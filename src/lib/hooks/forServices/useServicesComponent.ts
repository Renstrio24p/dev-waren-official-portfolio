import { ListofServices, ServicesHero } from "@/pages/Services/Sections";
import { useTSCollection } from "@devwareng/vanilla-ts";

const useServicesComponent = (DOM: HTMLElement): void => {

    const sections = [
        "services-hero",
        "services-list"
    ]

    const components = [
        ServicesHero,
        ListofServices
    ]

    useTSCollection(sections, DOM, components)


};

export { useServicesComponent };