import { useTSAnchorMount, useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import { HookFunction } from "@/lib/types"


const useMainComponent: HookFunction = (isDOM) => {
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
