import { html, useTSElements } from "@devwareng/vanilla-ts";

export default function NavContainer(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`<div id="nav-container"></div>`
    ) as HTMLElement | void;

    return ui
}
