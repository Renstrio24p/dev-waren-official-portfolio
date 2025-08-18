import { useTSAnchorMount, useTSCollection } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import { Router } from "@/routes"
import DOMPurify from 'dompurify';
import { ComponentFunction } from "@/lib/types/Functions";

const useMainComponent: ComponentFunction = (isDOM, title) => {

    const sections = [
        "nav-container",
        "router",
        "footer-container"
    ]

    const components = [
        Navbar,
        Router,
        Footer
    ]

    useVercelInsights();
    useTSCollection(sections, isDOM, components, [title])
    useTSAnchorMount();

    if (window.trustedTypes && !window.trustedTypes.getPolicy?.("default")) {
        window.trustedTypes.createPolicy!("default", {
            createHTML: (string: string) => DOMPurify.sanitize(string),
        });
    }

    window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "smooth" }));

}

export { useMainComponent }