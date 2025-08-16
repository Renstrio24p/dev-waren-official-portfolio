import { useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"

const useMainComponent = (isDOM: HTMLElement) => {

    const { analytics } = useVercelInsights();

    const sections = [
        "nav-container",
        "footer-container"
    ]

    const components = [
        Navbar,
        Footer
    ]

    useTSCollection(sections, isDOM, components)

    analytics
}

export { useMainComponent }