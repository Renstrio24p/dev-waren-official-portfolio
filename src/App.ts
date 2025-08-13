
import "./index.css"
import "boxicons/css/boxicons.min.css"
import { createIcons, icons } from "lucide";
import { Router } from "./routes";
import { html, useTSComponent, useTSElements, useTSEventAll, useTSAnchorMount, useTSMetaData, useTSSelect } from '@devwareng/vanilla-ts';
import { Footer, Navbar } from "./lib/components";
import { useScrollNavbar } from "./lib/hooks";

export default function Start(DOM?: HTMLElement) {

    if (typeof window === "undefined") return;

    const isDOM = DOM || document.body;
    createIcons({ icons });

    useTSMetaData({
        name: 'Dev Waren Portfolio',
        description: 'This is My Official Portfolio Website',
        author: 'Waren Gador'
    });

    const title = 'Dev Waren'

    const ui = useTSElements(
        isDOM,
        html`
            <div id='nav-container'></div>
            <main id='router' class='main scroll-smooth'></main>
            ${Footer(isDOM)}
        `
    );

    useTSComponent('nav-container', isDOM, Navbar);
    useTSComponent('router', isDOM, Router, title)
    useTSAnchorMount()

    const navbar = useTSSelect('#navbar') as HTMLElement;
    useScrollNavbar(navbar);

    useTSEventAll("#logo-app", 'click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, 0)
    }
    );

    return ui

}

export const startHTML = Start();