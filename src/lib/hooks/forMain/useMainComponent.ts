import { useTSAnchorMount, useTSCollection, useTSComponent } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import { Router } from "@/routes"


const useMainComponent = (isDOM: HTMLElement, title: string) => {

    enum IDs {
        NAVBAR = "nav-container",
        ROUTER = "router",
        FOOTER = "footer-container"
    }

    const sections = [IDs.NAVBAR, IDs.FOOTER]
    const components = [Navbar, Footer]

    useVercelInsights()
    useTSCollection(sections, isDOM, components)
    useTSAnchorMount()

    window.addEventListener("load", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    )

    useTSComponent("router", isDOM!, Router, title);
}

export { useMainComponent }
