
import "./index.css"
import "animate.css"
import "boxicons/css/boxicons.min.css"
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';
import { useMainComponent, useSSRHydration } from "./lib/hooks";

export default function Start(DOM?: HTMLElement) {

    const { isDOM } = useSSRHydration(DOM!);
    if (!isDOM) return null;

    useTSMetaData({
        name: 'Dev Waren Portfolio',
        description: 'This is My Official Portfolio Website',
        author: 'Waren Gador'
    });

    const title = "Dev Waren"

    const ui = useTSElements(
        isDOM!,
        html`
            <div id='nav-container'></div>
            <main id='router' class='main scroll-smooth'></main>
            <div id="footer-container" class="z-[99]"></div>
        `
    );

    useMainComponent(isDOM!, title);

    return ui
}

export const startHTML = Start()