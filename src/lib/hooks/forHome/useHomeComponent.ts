import { HookFunction, Sections } from "@/lib/types"
import { AboutMe, Contact, Hero, Introduction, Portfolio } from "@/pages/Home/Sections"
import { useTSCollection } from "@devwareng/vanilla-ts"

const useHomeComponents: HookFunction = (DOM) => {
    const sections: Sections = [
        "hero-section",
        "introduction-section",
        "about-me-section",
        "portfolio-section",
        "contact-form",
    ]

    const components: Function[] = [
        Hero,
        Introduction,
        AboutMe,
        Portfolio,
        Contact
    ]

    useTSCollection(sections, DOM, components)

}

export { useHomeComponents }