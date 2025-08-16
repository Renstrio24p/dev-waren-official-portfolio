import { ServicesHero } from "@/pages/Services/Sections";
import { useTSCollection } from "@devwareng/vanilla-ts";

const useServicesComponent = (DOM: HTMLElement): void => {

    const sections = [
        "services-hero"
    ]

    const components = [
        ServicesHero
    ]

    useTSCollection(sections, DOM, components)


};

export { useServicesComponent };