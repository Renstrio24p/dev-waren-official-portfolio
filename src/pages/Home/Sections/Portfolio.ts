import 'animate.css';
import { Header, Pillar } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts';
import { ProjectList } from './PortfolioList';

export default function Portfolio(DOM: HTMLElement, dataId: number) {
    // Check if already animated in this session
    const alreadyAnimated = sessionStorage.getItem('portfolioAnimated') === 'true';

    const ui = useTSElements(
        DOM,
        html`
        <section id="portfolio"
            class="w-full min-h-screen ${alreadyAnimated ? '' : 'animate__animated animate__fadeInUp animate__slow'}">
        
            <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-16 items-center">
                ${Pillar(DOM)}
            </div>
        
            <div
                class="relative h-[20em] overflow-hidden grid place-items-center ${alreadyAnimated ? '' : 'animate__animated animate__fadeIn animate__slower'}">
                <div class="absolute bg-[url('nature.webp')] bg-fixed bg-cover bg-center w-full h-full max-h-fit"></div>
                <div class="absolute bg-gray-50/80 bg-cover bg-center w-full h-full max-h-fit"></div>
                <div class="relative flex flex-col">
                    ${Header(DOM, "Portfolio")}
                </div>
            </div>
        
            <div
                class="bg-[#1A1A1A] text-white ${alreadyAnimated ? '' : 'animate__animated animate__fadeInUp animate__delay-1s'}">
                <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-16 items-center">
                    ${Pillar(DOM, "bg-white")}
                </div>
                <div class="overflow-hidden">
                    ${ProjectList(DOM, dataId)}
                </div>
            </div>
        </section>
        `
    );

    if (!alreadyAnimated) {
        sessionStorage.setItem('portfolioAnimated', 'true');
    }

    return ui;
}
