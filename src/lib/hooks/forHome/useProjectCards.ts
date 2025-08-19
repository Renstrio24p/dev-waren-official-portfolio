import { mapper } from "@/lib/func";
import { Project, ProjectHookFunction } from "@/lib/types";
import { html } from "@devwareng/vanilla-ts";

const useProjectCards: ProjectHookFunction = (project: Partial<Project>) => {

    const projectList = mapper(
        project.stacks?.map((stack) => html`
            <span class="bg-white text-black text-xs px-2 py-1 rounded">
                ${stack}
            </span>
    `))

    return { projectList };

};

export { useProjectCards };