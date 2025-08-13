import { Info } from '@/lib/components';
import { details } from '@/lib/constants';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Details(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
    <div class="grid md:grid-cols-2 lg:grid-cols-3 py-16 gap-4">
        ${details.map((detail) => Info(DOM, detail))}
    </div>
`
    );
    return ui
}