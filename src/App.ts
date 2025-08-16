
import "./index.css"
import "boxicons/css/boxicons.min.css"
import { Router } from "./routes";
import { html, useTSComponent, useTSElements, useTSMetaData, useTSAnchorMount } from '@devwareng/vanilla-ts';
import { useMainComponent } from "./lib/hooks";
import DOMPurify from 'dompurify';

interface TrustedTypePolicyFactory {
    getPolicy?(name: string): TrustedTypePolicy | undefined;
    createPolicy?(name: string, options: TrustedTypePolicyOptions): TrustedTypePolicy;
}

declare global {
    interface Window {
        trustedTypes?: TrustedTypePolicyFactory;
        createPolicy?(name: string, options: TrustedTypePolicyOptions): TrustedTypePolicy | string;
    }
}

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
    useTSComponent("router", isDOM, Router, title);
    useTSAnchorMount();

    if (window.trustedTypes && !window.trustedTypes.getPolicy?.("default")) {
        window.trustedTypes.createPolicy!("default", {
            createHTML: (string: string) => DOMPurify.sanitize(string),
        });
    }

    return ui

}

export const startHTML = Start()