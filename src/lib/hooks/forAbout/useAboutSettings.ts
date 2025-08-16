import { initMarqueeeSlider } from "../../utils";
import { useNavbarScroll } from "../forNavbar/useNavbarScroll";
import { useContactVisibility } from "../forContact/useContactVisibility";
import { useAboutComponents } from "./useAboutComponent";


const useAboutSettings = (DOM: HTMLElement) => {

    const { handleScroll } = useNavbarScroll()!;
    const { handleShowContact } = useContactVisibility(DOM)!;

    window.addEventListener("scroll", handleScroll);
    initMarqueeeSlider("marquee");
    handleScroll();
    handleShowContact();
    useAboutComponents(DOM);
};

export { useAboutSettings };
