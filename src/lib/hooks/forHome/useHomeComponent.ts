import { AboutMe, Contact, Hero, Introduction, Portfolio } from "@/pages/Home/Sections"
import { useTSCollection } from "@devwareng/vanilla-ts"

const useHomeComponents = (DOM: HTMLElement) => {
    const sections = [
        "hero-section",
        "introduction-section",
        "about-me-section",
        "portfolio-section",
        "contact-form",
    ]

    const components = [
        Hero,
        Introduction,
        AboutMe,
        Portfolio,
        Contact
    ]

    useTSCollection(sections, DOM, components)
}

export { useHomeComponents }