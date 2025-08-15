
import { html } from '@devwareng/vanilla-ts'
import "boxicons/css/boxicons.min.css";
import { useUniqueId } from '../hooks';

type Links = {
    name: string,
    icon: string,
    link: string
}

export default function LinkBlock(links: Links) {

    const { dataId } = useUniqueId();


    const ui = html`
        <a data-id="${dataId}" href="${links.link}" aria-label="${links.name}">
            <i class="bx bxl-${links.icon} text-4xl"></i>
        </a>
        `

    return ui
}