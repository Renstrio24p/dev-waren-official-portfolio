
import "./index.css"
import "boxicons/css/boxicons.min.css"
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';
import { useMainComponent } from "./lib/hooks";

export default function Start(DOM?: HTMLElement) {

    if (typeof window === "undefined") return;

    const isDOM = DOM || document.body;


    useTSMetaData({
        name: 'Dev Waren Portfolio',
        description: 'This is My Official Portfolio Website',
        author: 'Waren Gador'
    });

    const title = "Dev Waren"

    const ui = useTSElements(
        isDOM,
        html`
            <div id='nav-container'></div>
            <main id='router' class='main scroll-smooth'></main>
            <div id="footer-container" class="z-[99]"></div>
        `
    );

    useMainComponent(isDOM, title);

    return ui

}

export const startHTML = Start()