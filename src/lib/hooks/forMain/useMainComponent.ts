import { useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"

const useMainComponent = (isDOM: HTMLElement) => {

    const sections = [
        "nav-container",
        "footer-container"
    ]

    const components = [
        Navbar,
        Footer
    ]

    useTSCollection(sections, isDOM, components)

}

export { useMainComponent }