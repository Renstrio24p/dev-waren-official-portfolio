import { useTSAnchorMount, useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import DOMPurify from 'dompurify';

const useMainComponent = (isDOM: HTMLElement) => {

    const sections = [
        "nav-container",
        "footer-container"
    ]

    const components = [
        Navbar,
        Footer
    ]

    useVercelInsights();
    useTSCollection(sections, isDOM, components)
    useTSAnchorMount();

    if (window.trustedTypes && !window.trustedTypes.getPolicy?.("default")) {
        window.trustedTypes.createPolicy!("default", {
            createHTML: (string: string) => DOMPurify.sanitize(string),
        });
    }

    window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "smooth" }));

}

export { useMainComponent }