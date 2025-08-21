import ServicesList from '@/lib/components/ServicesList';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ListofServices(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <section>
            <h3>List of Serivces</h3>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
                ${ServicesList()}
            </div>
        </section>
        `
    );
    return ui
}