import { Title } from '@/lib/components';
import { useTestimonialCards } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Testimonials(DOM: HTMLElement) {

    const { testimonialCards } = useTestimonialCards();

    const ui = useTSElements(
        DOM,
        html`
        <section class="py-16 px-2">
            ${Title("Client Testimonials")}
            <div class="grid md:grid-cols-2">
                ${testimonialCards}
            </div>
        </section>
`
    );
    return ui
}