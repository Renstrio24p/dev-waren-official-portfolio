import { useTSSelect } from "@devwareng/vanilla-ts";
import { animate } from "motion";

let isScrolled = false;

const useNavbarScroll = () => {
    const nameTitle = useTSSelect<HTMLElement>("#name-logo");
    const navbar = useTSSelect<HTMLElement>("#navbar");

    if (!nameTitle || !navbar) return;

    const handleScroll = () => {
        const shouldBeScrolled = window.scrollY > 20;

        // Title color toggle
        nameTitle.classList.toggle("text-white", window.scrollY <= 0);
        nameTitle.classList.toggle("text-black", window.scrollY > 0);

        // Animate navbar only when state changes
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            animate(
                navbar,
                shouldBeScrolled
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

    return { handleScroll };
};

export { useNavbarScroll };
