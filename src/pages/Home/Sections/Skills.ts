import 'animate.css';
import { Header, Stacks } from '@/lib/components';
import { useFilterTechStacks } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Skills(DOM: HTMLElement) {
    const { filteredTechstacks, backendTechstacks, languages } = useFilterTechStacks();


    const ui = useTSElements(
        DOM,
        html`
        <section class="w-full flex flex-col relative animate__animated animate__fadeInUp animate__slow overflow-hidden pt-32"
            id="skills">
            <div class="w-full flex items-center justify-center">
                ${Header("Skills")}
            </div>
            <div class="pt-16 w-full">
                <p class="tracking-widest font-semibold text-left uppercase text-lg md:text-xl lg:text-2xl">
                    I'm using the following tools:
                </p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${filteredTechstacks.map((techstack) => Stacks(techstack)).join('')}
                </div>
        
                <p class="tracking-widest font-semibold text-left uppercase text-2xl">
                    Learnings
                </p>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${backendTechstacks.map((techstack) => Stacks(techstack)).join('')}
                </div>
        
                <p class="tracking-widest font-semibold text-left uppercase text-lg md:text-xl lg:text-2xl">
                    Other Skills
                </p>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${languages.map((techstack) => Stacks(techstack)).join('')}
                </div>
            </div>
        </section>
        `
    );

    return ui;
}
