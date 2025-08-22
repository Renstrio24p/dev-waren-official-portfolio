import { Header, Pillar } from '@/lib/components';
import { html, useTSComponent, useTSElements, useTSEvent } from '@devwareng/vanilla-ts'
import Details from './Details';
import Skills from './Skills';

export default function AboutMe(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <section class="relative px-4 pb-8 pt-16" id="about-me">
            <div class="absolute bg-[url('/bg.webp')] bg-fixed bg-cover bg-center w-full min-h-screen max-h-fit"></div>
            <div class="absolute bg-gray-50/95 bg-cover bg-center w-full h-screen"></div>
            <div class="relative flex flex-col">
                <div class="max-w-screen-2xl mx-auto py-8 flex flex-col gap-16 items-center">
                    ${Header("About Me")}
                    <div class="text-center max-w-4xl">
                        <p>
                            I'm happy to share my experience as a Full Stack Web Developer for 4 years of experience in
                            Designing UI / UX Interactive
                            Applications using Figma Design and Follow SEO Principles and Strict Alignments, layouts and color
                            palettes to make more
                            user friendly web applications.
                        </p>
                    </div>
                    <button
                        class="border-x-2 w-fit px-8 py-2 uppercase tracking-widest font-semibold transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                        id="explore">Explore</button>
                    ${Pillar()}
                    <div id="details-section"></div>
                    ${Pillar()}
                    <div class="overflow-hidden w-full">
                        <div id="skills-section"></div>
                    </div>
                </div>
            </div>
        </section>
    `
    );

    useTSComponent("details-section", DOM, Details);
    useTSComponent("skills-section", DOM, Skills);

    useTSEvent("explore", "click", () => window.location.href = "/about-me")

    return ui
}