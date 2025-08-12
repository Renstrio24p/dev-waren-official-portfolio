import { techstacks } from "../constants";
import { languages } from "../constants/techstacks";

const useFilterTechStacks = () => {
    const filteredTechstacks = techstacks.filter((techstack) => techstack.backend === false);
    const backendTechstacks = techstacks.filter((techstack) => techstack.backend === true);

    return { filteredTechstacks, backendTechstacks, languages };
};

export { useFilterTechStacks };