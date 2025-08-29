import { useContactVisibility } from "../forContact/useContactVisibility";
import { useServicesComponent } from "./useServicesComponent";

const useServicesSettings = (DOM: HTMLElement): void => {

    const { handleShowContact } = useContactVisibility(DOM)!;

    handleShowContact();
    useServicesComponent(DOM);

};
export { useServicesSettings };