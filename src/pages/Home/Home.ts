import { html, useTSElements } from "@devwareng/vanilla-ts";
import { useHomeComponents } from "@/lib/hooks";

const Home = (DOM: HTMLElement, websiteName: string) => {
    document.title = websiteName;

    const ui = useTSElements(
        DOM,
        html`
        <div class="relative min-h-screen flex flex-col overflow-hidden">
            <div
                class="absolute bg-[url('/bg.webp')] bg-center bg-fixed bg-cover w-full z-[-1] h-screen animate__animated animate__fadeIn">
            </div>
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