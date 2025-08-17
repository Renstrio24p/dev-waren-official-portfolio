import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ListofServices(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <section>
            <h3>List of Serivces</h3>
        </section>
        `
    );
    return ui
}