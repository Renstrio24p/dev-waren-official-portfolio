import { useFilterProjects } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ProjectList(DOM: HTMLElement, dataId: number) {

    const { init } = useFilterProjects(DOM, dataId);

    // Initial UI
    const ui = useTSElements(
        DOM,
        html`
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-3 w-full uppercase text-center text-xs md:text-base">
                <div>
                    <p id="allproject" class="w-full px-8 font-semibold cursor-pointer mb-4">All</p>
                    <div class="line w-full h-[2px] bg-white"></div>
                </div>
                <div>
                    <p id="fullstack" class="w-full px-8 cursor-pointer mb-4">Full Stack</p>
                    <div class="line w-full h-[1px] bg-white"></div>
                </div>
                <div>
                    <p id="designed" class="w-full px-8 cursor-pointer mb-4">Designed</p>
                    <div class="line w-full h-[1px] bg-white"></div>
                </div>
            </div>
        </div>
        <div id="projects-container" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16"></div>
    `
    );

    init();

    return ui;
}
