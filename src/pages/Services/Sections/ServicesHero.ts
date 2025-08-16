
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ServicesHero(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <section class="py-16 px-4">
            <h1>Services</h1>
        </section>
`
    );
    return ui
}