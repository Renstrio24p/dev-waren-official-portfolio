import { html } from '@devwareng/vanilla-ts'
import { useUniqueId } from '../hooks'

export default function Title(title: string) {

    const { dataId } = useUniqueId();

    const ui = html`<h2 data-id="${dataId}" class="text-4xl font-semibold text-gray-600">${title}</h2>`

    return ui
}