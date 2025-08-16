import { useTSSelect } from "@devwareng/vanilla-ts";
import { animate } from "motion";

let isScrolled = false;

const useNavbarScroll = () => {
    const nameTitle = useTSSelect("#name-logo") as HTMLElement | null;
    const navbar = useTSSelect("#navbar") as HTMLElement | null;

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

    return { handleScroll };
};

export { useNavbarScroll };