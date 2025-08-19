import { HookFunction } from "@/lib/types";
import { ListofServices, ServicesHero } from "@/pages/Services/Sections";
import { useTSCollection } from "@devwareng/vanilla-ts";

const useServicesComponent: HookFunction = (DOM) => {

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