import { AboutHero, Carousel, ClosingNote, PersonalLife, ProfessionalLife, WorkGallery } from "@/pages/AboutMe/Sections"
import { useTSCollection } from "@devwareng/vanilla-ts"

const useAboutComponents = (DOM: HTMLElement) => {

    const sections = [
        "about-hero",
        "carousel",
        "professional-life",
        "personal-life",
        "closing-note",
        "working-gallery"
    ]

    const components = [
        AboutHero,
        Carousel,
        ProfessionalLife,
        PersonalLife,
        ClosingNote,
        WorkGallery
    ]

    useTSCollection(sections, DOM, components)

}

export { useAboutComponents }