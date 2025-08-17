import 'animate.css'; // ✅ Import animate.css first
import { TimeLineCard, Title } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function ProfessionalLife(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <section class="text-gray-600 animate__animated animate__fadeInUp">
            ${Title("My Professional Life")}
            <p class="my-4 animate__animated animate__fadeIn animate__delay-1s">
                The early days of my online career were not exciting. I did a ton of grunt work because I just
                wanted to make extra cash to help my family.
            </p>
        
            <div class="flex flex-col relative pl-8 border-l-4 border-gray-300 lg:max-w-1/2">
                ${TimeLineCard()}
            </div>
        </section>
        `
    );
    return ui;
}
