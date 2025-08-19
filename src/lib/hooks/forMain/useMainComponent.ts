import { useTSAnchorMount, useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import DOMPurify from "dompurify"

// Register TrustedHTML policy once
if (typeof window !== "undefined" && window.trustedTypes && !window.trustedTypes.getPolicy!("dompurify")) {
    window.trustedTypes.createPolicy!("dompurify", {
        createHTML: (dirty: string) =>
            DOMPurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true }) as any,
    });
}

const useMainComponent = (isDOM: HTMLElement) => {
    const sections = ["nav-container", "footer-container"]
    const components = [Navbar, Footer]

    useVercelInsights()
    useTSCollection(sections, isDOM, components)
    useTSAnchorMount()

    window.addEventListener("load", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    )
}

export { useMainComponent }
