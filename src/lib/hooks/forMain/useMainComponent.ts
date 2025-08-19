import { useTSAnchorMount, useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"

const useMainComponent = (isDOM: HTMLElement) => {

    const sections = [
        "nav-container",
        "footer-container"
    ]

    const components = [
        Navbar,
        Footer
    ]

    useVercelInsights();
    useTSCollection(sections, isDOM, components)
    useTSAnchorMount();



    window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "smooth" }));

}

export { useMainComponent }