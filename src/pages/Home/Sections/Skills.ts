import { Header, Stacks } from '@/lib/components';
import { useFilterTechStacks } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Skills(DOM: HTMLElement) {
    const { filteredTechstacks, backendTechstacks, languages } = useFilterTechStacks();

    const ui = useTSElements(
        DOM,
        html`
        <section id="skills" class="w-full flex flex-col relative overflow-hidden">
        
            <div class="w-full flex items-center justify-center">
                ${Header(DOM, "Skills")}
            </div>
        
            <div class="py-16 w-full">
                <p class="tracking-widest font-semibold text-left uppercase text-lg md:text-xl lg:text-2xl">
                    I'm using the following tools:
                </p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${filteredTechstacks.map((techstack) => Stacks(DOM, techstack)).join('')}
                </div>
        
                <p class="tracking-widest font-semibold text-left uppercase text-2xl">
                    Learnings
                </p>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${backendTechstacks.map((techstack) => Stacks(DOM, techstack)).join('')}
                </div>
        
                <p class="tracking-widest font-semibold text-left uppercase text-lg md:text-xl lg:text-2xl">
                    Other Skills
                </p>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-y-8">
                    ${languages.map((techstack) => Stacks(DOM, techstack)).join('')}
                </div>
            </div>
        </section>
        `
    );

    return ui;
}
