
import "./index.css"
import "boxicons/css/boxicons.min.css"
import { createIcons, icons } from "lucide";
import { Router } from "./routes";
import { html, useTSComponent, useTSElements, useTSMetaData, useTSAnchorMount } from '@devwareng/vanilla-ts';
import { useMainComponent } from "./lib/hooks";

export default function Start(DOM?: HTMLElement) {

    if (typeof window === "undefined") return;

    const isDOM = DOM || document.body;
    createIcons({ icons });

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

    useMainComponent(isDOM);
    useTSComponent("router", isDOM, Router, title);
    useTSAnchorMount();

    return ui

}

export const startHTML = Start()