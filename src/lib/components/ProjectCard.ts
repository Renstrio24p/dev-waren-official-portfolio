import 'animate.css';
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
        <a class="group relative overflow-hidden shadow-lg block" id="card-${dataId}" href=${project.url}>
            <img src=${project.image} alt=${project.title}
                class="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
        
            <!-- Overlay Content -->
            <div
                class="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white
                                       opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                       transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
        
                <h3 class="font-semibold text-lg mb-2 animate__animated animate__fadeInUp animate__delay-200ms">
                    ${project.title}
                </h3>
                <p class="text-sm mb-4 text-center px-4 animate__animated animate__fadeInUp animate__delay-400ms">
                    ${project.desc}
                </p>
                <div class="flex flex-wrap gap-2 justify-center animate__animated animate__fadeInUp animate__delay-600ms"
                    id=${safeTitleId}>
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
