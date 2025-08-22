import { Info } from '@/lib/components';
import { details } from '@/lib/constants';
import { mapper } from '@/lib/func';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Details(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
            <div class="grid md:grid-cols-2 py-16 gap-4">
                ${mapper(details.map(detail => Info(detail)))}
            </div>
        `
    );

    return ui;
}
