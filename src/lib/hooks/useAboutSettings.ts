import { useTSComponent, useTSSelect } from "@devwareng/vanilla-ts";
import { animate } from "motion";
import { initMarqueeeSlider } from "../utils";
import { Contact } from "@/pages/Home/Sections";

let isScrolled = false; // track scroll state

const useAboutSettings = (DOM: HTMLElement) => {
    const nameTitle = useTSSelect("#name-logo") as HTMLElement | null;
    const navbar = useTSSelect("#navbar") as HTMLElement | null;
    const contactMe = useTSSelect("#contact-me") as HTMLElement | null;

    if (!nameTitle || !navbar) return;

    const handleScroll = () => {
        const shouldBeScrolled = window.scrollY > 20;

        // Update title color
        if (window.scrollY <= 0) {
            nameTitle.classList.add("text-white");
            nameTitle.classList.remove("text-black");
        } else {
            nameTitle.classList.remove("text-white");
            nameTitle.classList.add("text-black");
        }

        // Animate navbar background
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            animate(
                navbar,
                isScrolled
                    ? {
                        backgroundColor: "rgba(255,255,255,1)",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        color: "#000",
                    }
                    : {
                        backgroundColor: "rgba(255,255,255,0)",
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                        color: "#fff",
                    },
                { duration: 0.3 }
            );
        }
    };

    const handleShowContact = () => {
        let isContactVisible = false; // toggle state

        contactMe?.addEventListener("click", () => {
            const contactSection = DOM.querySelector("#contact-section");

            if (!isContactVisible) {
                // Show the contact section
                useTSComponent("contact-section", DOM, Contact);
            } else {
                // Hide the contact section if it exists
                contactSection?.remove();
            }

            // Toggle the state
            return (isContactVisible = !isContactVisible);

        });
    };



    window.addEventListener("scroll", handleScroll);
    initMarqueeeSlider("marquee");
    handleScroll(); // run on load
    handleShowContact();
};

export { useAboutSettings };
