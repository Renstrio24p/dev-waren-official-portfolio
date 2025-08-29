import { useContactVisibility } from "../forContact/useContactVisibility";
import { useServicesComponent } from "./useServicesComponent";

const useServicesSettings = (DOM: HTMLElement) => {

    const { handleShowContact } = useContactVisibility(DOM)!;

    const handleContact = handleShowContact();

    const serviceComponent = useServicesComponent(DOM);

    return [handleContact, serviceComponent]

};
export { useServicesSettings };