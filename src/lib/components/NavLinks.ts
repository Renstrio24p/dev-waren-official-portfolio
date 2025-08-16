
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function NavLinks(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <div>
            <h1>NavLinks</h1>
        </div>
`
    );
    return ui
}