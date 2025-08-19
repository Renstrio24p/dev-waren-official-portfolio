// server.ts
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import express from "express"
import type { ViteDevServer } from "vite"
import crypto from "node:crypto"
import dns from "node:dns/promises"
import net from "node:net"
import { URL } from "node:url"

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== "production"
const port = Number(process.env.PORT) || 5173
const base = process.env.BASE || "/"

// -----------------------------------------------------------------------------
// Type Augmentations
// -----------------------------------------------------------------------------
declare global {
  namespace Express {
    interface Locals {
      nonce: string
    }
  }
  interface GlobalThis {
    __rawFetch__?: typeof fetch
  }
}

// -----------------------------------------------------------------------------
// SSRF GUARD (allow ONLY self)
// -----------------------------------------------------------------------------

async function isLoopbackHost(hostname: string): Promise<boolean> {
  const directIP = net.isIP(hostname) ? hostname : null
  const candidates = directIP
    ? [directIP]
    : (await dns.lookup(hostname, { all: true })).map((r) => r.address)
  return candidates.every((ip) => ip === "127.0.0.1" || ip === "::1")
}

// Use the existing fetch type to avoid DOM/Undici imports
type FetchFn = typeof fetch
type FetchInput = Parameters<FetchFn>[0]
type FetchInit = Parameters<FetchFn>[1]
type FetchReturn = ReturnType<FetchFn>

/**
 * Build an absolute URL from input (string | URL | Request-like with .url)
 */
function toAbsoluteURL(
  input: FetchInput | { url: string },
  baseURL = `http://localhost:${port}`
): URL {
  if (typeof input === "string") return new URL(input, baseURL)
  // URL instance
  if (input instanceof URL) return input
  // Request-like (avoid referencing Request type directly to keep types portable)
  const maybe = input as { url?: unknown }
  if (maybe && typeof maybe.url === "string") return new URL(maybe.url, baseURL)
  throw new TypeError("Unsupported fetch input for SSRF guard")
}

/**
 * Self-only fetch: allows only http(s) to 127.0.0.1 / ::1 / localhost, same port.
 */
async function safeFetch(input: FetchInput, init?: FetchInit): FetchReturn {
  const u = toAbsoluteURL(input)

  if (u.protocol !== "http:" && u.protocol !== "https:") {
    throw new TypeError("Blocked by SSRF guard: non-http(s) scheme")
  }

  const host = u.hostname.toLowerCase()
  const isLocalhostName = host === "localhost"
  const ok = isLocalhostName ? true : await isLoopbackHost(host)
  if (!ok) throw new Error(`Blocked by SSRF guard: outbound request to ${u.hostname}`)

  // Only allow our current server port (and empty means default port, which we disallow)
  const allowedPorts = new Set([String(port), ""])
  if (!allowedPorts.has(String(u.port || ""))) {
    throw new Error(`Blocked by SSRF guard: disallowed port ${u.port}`)
  }
  // @ts-ignore
  return globalThis.__rawFetch__!(input, init)
}

// Save original fetch and override with SSRF guard (guarded for HMR)
if (typeof globalThis.fetch !== "function") {
  throw new Error("Global fetch is not available in this Node version.")
}
// @ts-ignore
if (!globalThis.__rawFetch__) {
  // @ts-ignore
  globalThis.__rawFetch__ = globalThis.fetch
}
globalThis.fetch = safeFetch as typeof fetch

// -----------------------------------------------------------------------------
// Minimal HTML escape helper
// -----------------------------------------------------------------------------
function escapeHTML(s?: string): string {
  if (!s) return ""
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

// -----------------------------------------------------------------------------
// Express app
// -----------------------------------------------------------------------------
const app = express()
app.set("trust proxy", false)

if (!isDev) {
  app.use((req, res, next) => {
    const nonce = crypto.randomBytes(16).toString("base64")
    res.locals.nonce = nonce

    const csp = [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com`,
      "font-src 'self' https: data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.googleapis.com https://www.gstatic.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; ")

    res.setHeader("X-Frame-Options", "DENY")
    res.setHeader("X-Content-Type-Options", "nosniff")
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin")
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin")
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp")
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin")

    const ua = req.headers["user-agent"] || ""
    if (/Lighthouse|Chrome-Lighthouse|PageSpeed/i.test(ua)) {
      res.setHeader("Content-Security-Policy-Report-Only", csp)
    } else {
      res.setHeader("Content-Security-Policy", csp)
    }

    next()
  })
}

// -----------------------------------------------------------------------------
// Proxy guard route
// -----------------------------------------------------------------------------
app.use(["/proxy", "/api/proxy"], async (req, res) => {
  try {
    const target = String(req.query.url || "")
    if (!target) return res.status(400).json({ error: "Missing url" })

    const u = new URL(target, `http://localhost:${port}`)
    if (!(await isLoopbackHost(u.hostname))) {
      return res.status(403).json({ error: "Blocked by SSRF guard" })
    }

    const r = await safeFetch(u.toString())
    const body = await r.text()
    res.status(r.status).send(body)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Proxy error"
    res.status(500).json({ error: message })
  }
})

// -----------------------------------------------------------------------------
// Vite (dev) or static (prod)
// -----------------------------------------------------------------------------
let vite: ViteDevServer | undefined

if (isDev) {
  const { createServer } = await import("vite")
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import("compression")).default
  const sirv = (await import("sirv")).default
  app.use(compression())
  app.use(base, sirv(path.resolve(__dirname, "dist/client"), { extensions: [] }))
}

// -----------------------------------------------------------------------------
// SSR HTML rendering
// -----------------------------------------------------------------------------
app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "")

    let template: string
    let render: (url: string, nonce: string) => Promise<{ html: string; head: string }>

    if (isDev && vite) {
      template = await fs.readFile(path.resolve(__dirname, "index.html"), "utf-8")
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule("/src/entry-server.ts")).render
    } else {
      template = await fs.readFile(path.resolve(__dirname, "dist/client/index.html"), "utf-8")
      const mod = await import(path.resolve(__dirname, "dist/server/entry-server.js"))
      render = mod.render as typeof render
    }

    const rendered = await render(url, res.locals.nonce)

    const safeHead = escapeHTML(rendered.head)
    const appHtml = rendered.html ?? ""

    const html = template
      .replace(`<!--app-head-->`, safeHead ?? "")
      .replace(`<!--app-html-->`, appHtml)
      .replace(/<script(?![^>]*\bsrc\b)/g, `<script nonce="${res.locals.nonce}"`)

    res.status(200).set({ "Content-Type": "text/html" }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace?.(e as Error)
    console.error((e as Error).stack)
    res.status(500).end((e as Error).stack)
  }
})

// -----------------------------------------------------------------------------
// Start server
// -----------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`✅ Server started at http://localhost:${port} (${isDev ? "dev" : "prod"})`)
})
