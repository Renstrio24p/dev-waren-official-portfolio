import { Contact } from "@/pages/Home/Sections";
import { useTSComponent, useTSSelect } from "@devwareng/vanilla-ts";


let isContactVisible = false;

const useContactVisibility = (DOM: HTMLElement) => {
    const contactMe = useTSSelect("#contact-me") as HTMLElement | null;

    const handleShowContact = () => {
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
            isContactVisible = !isContactVisible;
        });
    };

    return { handleShowContact };

};

export { useContactVisibility };