import { html, useTSElements } from '@devwareng/vanilla-ts'

type Project = {
    title: string,
    image: string,
    stacks: string[],
    url: `https://${string}`,
    desc: string,
    fullStack: boolean
}

export default function ProjectCard(
    DOM: HTMLElement,
    project: Partial<Project>,
    dataId: number
) {
    const safeTitleId = project.title?.replace(/\s+/g, "-").toLowerCase() ?? `card-${dataId}`;

    const ui = useTSElements(
        DOM,
        html`
        <a class="group relative overflow-hidden shadow-lg" id="card-${dataId}" href=${project.url}>
            <img src=${project.image} alt=${project.title}
                class="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
        
            <!-- Overlay Content -->
            <div
                class="absolute inset-0 bg-black/70 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center items-center text-white">
        
                <h3 class="font-semibold text-lg mb-2">
                    ${project.title}
                </h3>
                <p class="text-sm mb-4 text-center px-4">
                    ${project.desc}
                </p>
                <div class="flex flex-wrap gap-2 justify-center" id=${safeTitleId}>
                    ${project.stacks?.map((stack) => html`
                    <span class="bg-white text-black text-xs px-2 py-1 rounded">${stack}</span>
                    `).join('')}
                </div>
            </div>
        </a>
        `
    );

    return ui;
}
