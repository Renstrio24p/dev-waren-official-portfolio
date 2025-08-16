import { useTSEvent } from "@devwareng/vanilla-ts";

const useIntroductionSettings = (DOM: HTMLElement): void => {
    // Add scroll animation with IntersectionObserver
    const section = DOM.querySelector('#introduction-section');
    if (section) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.remove('opacity-0');
                        section.classList.add(
                            'animate__animated',
                            'animate__fadeInUp'
                        );
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(section);
    }

    useTSEvent("read-me", "click", () => window.location.href = "/services");
};

export { useIntroductionSettings };