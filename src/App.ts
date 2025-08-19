
import "./index.css"
import "boxicons/css/boxicons.min.css"
import { html, useTSComponent, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';
import { useMainComponent, useSSRHydration } from "./lib/hooks";
import { Router } from "./routes"
import DOMPurify from "dompurify"

export default function Start(DOM?: HTMLElement) {


    // Register TrustedHTML policy once
    if (typeof window !== "undefined" && window.trustedTypes && !window.trustedTypes.getPolicy!("dompurify")) {
        window.trustedTypes.createPolicy!("dompurify", {
            createHTML: (dirty: string) =>
                DOMPurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true }) as any,
        });
    }

    const { isDOM } = useSSRHydration(DOM);
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

    useMainComponent(isDOM!);
    useTSComponent("router", isDOM!, Router, title);

    return ui
}

export const startHTML = Start()