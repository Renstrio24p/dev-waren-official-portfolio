import { mapper } from "@/lib/func";
import { html } from "@devwareng/vanilla-ts";

type Project = {
    title: string;
    image: string;
    stacks: string[];
    url: string;
    desc: string;
    fullStack: boolean;
    designed: boolean;
};

const useProjectCards = (project: Partial<Project>): { projectList: string | undefined } => {

    const projectList = mapper(project.stacks?.map((stack) => html`
                    <span class="bg-white text-black text-xs px-2 py-1 rounded">
                        ${stack}
                    </span>
            `))

    return { projectList };

};

export { useProjectCards };