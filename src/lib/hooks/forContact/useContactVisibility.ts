import { Contact } from "@/pages/Home/Sections";
import { useTSComponent, useTSSelect } from "@devwareng/vanilla-ts";

let isContactVisible = false;

const useContactVisibility = (DOM: HTMLElement) => {
    const contactMe = useTSSelect("#contact-me") as HTMLElement | null;

    const handleShowContact = () => {
        contactMe?.addEventListener("click", () => {
            const contactSection = useTSSelect("#contact-section-container") as HTMLElement | null;

            if (!contactSection) return;

            if (!isContactVisible) {
                // ✅ mount Contact into reserved container
                useTSComponent("contact-section-container", DOM, Contact);
                isContactVisible = true;
            } else {
                // ✅ clear the container instead of removing it
                contactSection.innerHTML = "";
                isContactVisible = false;
            }
        });
    };

    return { handleShowContact };
};

export { useContactVisibility };
