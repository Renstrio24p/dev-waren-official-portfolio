import { useTSAnchorMount, useTSCollection, useTSComponent } from "@devwareng/vanilla-ts"
import { Footer, Navbar } from "../../components"
import { useVercelInsights } from "../vercel/useVercelInsights"
import { Router } from "@/routes"
import DOMPurify from 'dompurify';
import { ComponentFunction } from "@/lib/types/Functions";

const useMainComponent: ComponentFunction = (isDOM, title) => {

    const sections = [
        "nav-container",
        "footer-container"
    ]

    const components = [
        Navbar,
        Footer
    ]

    useVercelInsights();
    useTSComponent("router", isDOM, Router, title);
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