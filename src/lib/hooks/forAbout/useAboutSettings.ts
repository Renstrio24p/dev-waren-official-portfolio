import { initMarqueeeSlider } from "../../utils";
import { useNavbarScroll } from "../forNavbar/useNavbarScroll";
import { useAboutComponents } from "./useAboutComponent";


const useAboutSettings = (DOM: HTMLElement) => {

    const { handleScroll } = useNavbarScroll()!;

    window.addEventListener("scroll", handleScroll);
    initMarqueeeSlider("marquee");
    handleScroll();
    useAboutComponents(DOM);

    window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "smooth" }));

};

export { useAboutSettings };
