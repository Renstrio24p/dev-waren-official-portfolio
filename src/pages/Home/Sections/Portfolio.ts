import 'animate.css';
import { Header, Pillar } from '@/lib/components';
import { html, useTSComponent, useTSElements } from '@devwareng/vanilla-ts'
import { ProjectList } from './PortfolioList';

export default function Portfolio(DOM: HTMLElement, dataId: number) {
    const ui = useTSElements(
        DOM,
        html`
        <section class="w-full min-h-screen animate__animated animate__fadeInUp animate__slow" id="portfolio">
            <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-16 items-center">
                ${Pillar()}
            </div>
        
            <div
                class="relative h-[20em] overflow-hidden grid place-items-center animate__animated animate__fadeIn animate__slower">
                <div class="absolute bg-[url('/nature.webp')] bg-fixed bg-cover bg-center w-full h-full max-h-fit"></div>
                <div class="absolute bg-gray-50/80 bg-cover bg-center w-full h-full max-h-fit"></div>
                <div class="relative flex flex-col">
                    ${Header("Portfolio")}
                </div>
            </div>
        
            <div class="bg-[#1A1A1A] text-white animate__animated animate__fadeInUp animate__delay-1s">
                <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-16 items-center">
                    ${Pillar("bg-white")}
                </div>
                <div class="overflow-hidden">
                    <div id="project-list"></div>
                </div>
            </div>
        </section>
        `
    );

    useTSComponent("project-list", DOM, ProjectList, dataId);

    return ui;
}
