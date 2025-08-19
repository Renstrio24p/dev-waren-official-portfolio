import { initMarqueeeSlider } from "@/lib/utils";
import { useNavbarScroll } from "../forNavbar/useNavbarScroll";
import { useAboutComponents } from "./useAboutComponent";


const useAboutSettings = (DOM: HTMLElement) => {

    const { handleScroll } = useNavbarScroll()!;

    window.addEventListener("scroll", handleScroll);
    initMarqueeeSlider("marquee");
    handleScroll();
    useAboutComponents(DOM);

};

export { useAboutSettings };
