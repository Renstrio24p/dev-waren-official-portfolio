import { Sections } from "@/lib/types"
import { AboutHero, Carousel, ClosingNote, PersonalLife, ProfessionalLife, Testimonials, WorkGallery } from "@/pages/AboutMe/Sections"
import { useTSCollection } from "@devwareng/vanilla-ts"

const useAboutComponents = (DOM: HTMLElement) => {

    enum IDs {
        HERO = "about-hero",
        CAROUSEL = "carousel",
        PROFESSIONAL_LIFE = "professional-life",
        PERSONAL_LIFE = "personal-life",
        CLOSING_NOTE = "closing-note",
        WORKING_GALLERY = "working-gallery",
        TESTIMONIALS = "testimonials"
    }

    const sections: Sections = [
        IDs.HERO,
        IDs.CAROUSEL,
        IDs.PROFESSIONAL_LIFE,
        IDs.PERSONAL_LIFE,
        IDs.CLOSING_NOTE,
        IDs.WORKING_GALLERY,
        IDs.TESTIMONIALS
    ]

    const components: Function[] = [
        AboutHero,
        Carousel,
        ProfessionalLife,
        PersonalLife,
        ClosingNote,
        WorkGallery,
        Testimonials
    ]

    return useTSCollection(sections, DOM, components)

}

export { useAboutComponents }