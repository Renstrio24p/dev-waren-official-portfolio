import { html } from '@devwareng/vanilla-ts'
import { servicesList } from '../constants'
import { mapper } from '../func'

export default function ServicesList() {

    return mapper(servicesList.map(({ title, image, desc }, i) => (
        html`
            <div data-id="${i}" class="flex flex-col gap-4 justify-end">
                <img src="${image}" alt="${title}" width="200" height="200" />
                <div class="text-sm md:text-base text-gray-700">
                    <h3 class="text-2xl mb-4">${title}</h3>
                    <p>${desc}</p>
                </div>
            </div>
        `
    )))
}