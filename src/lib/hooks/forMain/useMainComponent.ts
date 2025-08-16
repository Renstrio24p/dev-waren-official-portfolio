import { useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import { Router } from "@/routes"

const useMainComponent = (isDOM: HTMLElement, title: string) => {


    const sections = [
        "nav-container",
        "router",
        "footer-container"
    ]

    const components = [
        Navbar,
        Router,
        Footer
    ]

    useVercelInsights();
    useTSCollection(sections, isDOM, components, [title])
    window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "smooth" }));

}

export { useMainComponent }