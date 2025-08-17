import { navlinks } from "@/lib/constants";
import { mapper } from "@/lib/func";
import { html } from "@devwareng/vanilla-ts";
import { useUniqueId } from "../forComponents/useUniqueId";

const useNavbarLinks = () => {

    const { dataId } = useUniqueId();

    const links = mapper(navlinks.map(({ name, link }) => html`
        <li data-id="${dataId}">
            <a href="${link}" class="hover:text-blue-600 transition-colors" aria-label="${name}">
                ${name}
            </a>
        </li>
    `))

    return { links }

};

export { useNavbarLinks };