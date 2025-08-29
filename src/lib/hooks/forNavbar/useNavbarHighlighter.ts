import { useTSElementEach } from "@devwareng/vanilla-ts";

const useNavbarHighlighter = (
    DOM: HTMLElement,
    containerSelector: string,
    activeClassList: string[] = ["text-blue-600", "font-semibold"]
) => {
    const links = DOM.querySelectorAll<HTMLElement>(containerSelector);

    if (!links.length) return;

    links[0].classList.add(...activeClassList);

    return useTSElementEach(links, ["click"], (el) => {
        links.forEach(link => {
            link.classList.remove(...activeClassList)
        });
        el.classList.add(...activeClassList);

        links[0].addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }))

    });
};

export { useNavbarHighlighter };
