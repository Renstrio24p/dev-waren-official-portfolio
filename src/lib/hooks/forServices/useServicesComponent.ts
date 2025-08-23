import { HookFunction } from "@/lib/types";
import { ImageDivider, ListofServices, ServicesHero } from "@/pages/Services/Sections";
import { useTSCollection } from "@devwareng/vanilla-ts";

const useServicesComponent: HookFunction = (DOM) => {

    const sections = [
        "services-hero",
        "services-divider",
        "services-list"
    ]

    const components = [
        ServicesHero,
        ImageDivider,
        ListofServices
    ]

    useTSCollection(sections, DOM, components)

};

export { useServicesComponent };