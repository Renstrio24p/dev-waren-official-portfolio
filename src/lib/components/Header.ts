import { html, useTSElements } from '@devwareng/vanilla-ts'
import { useUniqueId } from '../hooks';

export default function Header(DOM: HTMLElement, title: string) {

    const { dataId } = useUniqueId();

    const ui = useTSElements(
        DOM,
        html`<h2 data-id="${dataId}" class="text-2xl font-semibold tracking-widest px-8 py-4 border-4 w-fit uppercase">${title}</h2>`
    );
    return ui
}