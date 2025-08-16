// Home.ts
import { html, useTSElements } from "@devwareng/vanilla-ts";
import { useHomeComponents } from "@/lib/hooks";

const Home = (DOM: HTMLElement, websiteName: string) => {
    document.title = websiteName;

    // Render all sections including Navbar
    const ui = useTSElements(
        DOM,
        html`
        <div class="relative min-h-screen flex flex-col overflow-hidden">
            <div id="hero-section"></div>
            <div id="introduction-section"></div>
            <div id="about-me-section"></div>
            <div id="portfolio-section"></div>
            <div id="contact-form"></div>
        </div>
        `
    );

    useHomeComponents(DOM);

    return ui;
};

export default Home