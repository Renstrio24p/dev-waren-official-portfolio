import ServicesList from '@/lib/components/ServicesList';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ListofServices(DOM: HTMLElement) {



    const ui = useTSElements(
        DOM,
        html`
        <section class="text-center">
            <h3 class="text-2xl">List of Services</h3>
            <p>I offer a wide range of services to meet your needs.</p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
                ${ServicesList()}
            </div>
        </section>
        `
    );


    return ui
}