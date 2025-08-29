import { useTSElementEach } from "@devwareng/vanilla-ts";

const useNavbarHighlighter = (
    DOM: HTMLElement,
    containerSelector: string,
    activeClassList: string[] = ["text-blue-600", "font-semibold"]
) => {
    const links = DOM.querySelectorAll<HTMLElement>(containerSelector);

    if (!links.length) return;

    // Highlight the first link by default
    links[0].classList.add(...activeClassList);

    // Add smooth highlight switching
    return useTSElementEach(links, ["click"], (el) => {
        links.forEach((link) => link.classList.remove(...activeClassList));
        el.classList.add(...activeClassList);

        // Smooth scroll only if first link is clicked
        if (el === links[0]) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
};

export { useNavbarHighlighter };
