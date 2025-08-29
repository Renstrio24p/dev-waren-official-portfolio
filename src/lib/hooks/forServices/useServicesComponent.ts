import { HookFunction } from "@/lib/types";
import { ImageDivider, ListofServices, ServicesHero } from "@/pages/Services/Sections";
import { useTSCollection } from "@devwareng/vanilla-ts";

const useServicesComponent: HookFunction = (DOM) => {

    enum IDs {
        HERO = "services-hero",
        DIVIDER = "services-divider",
        LIST = "services-list"
    }

    const sections = [IDs.HERO, IDs.DIVIDER, IDs.LIST]

    const components = [ServicesHero, ImageDivider, ListofServices]

    return useTSCollection(sections, DOM, components)

};

export { useServicesComponent };