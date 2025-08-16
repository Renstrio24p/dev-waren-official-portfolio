import { links } from "../../constants/links"
import { LinkBlock } from "../../components"

const useLinks = () => {

    const linkElements = links.map((link) => LinkBlock(link)).join("");

    return { linkElements };

}

export { useLinks }