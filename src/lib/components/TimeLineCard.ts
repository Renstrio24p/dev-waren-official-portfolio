
import { html } from '@devwareng/vanilla-ts'
import { mapper } from '../func'
import { timeline } from '../constants/timeline'
import { useUniqueId } from '../hooks'



export default function TimeLineCard() {

    const { dataId } = useUniqueId()

    const ui = mapper(timeline.map(({ year, bg, desc, transition }) => html`
        <div data-id="${dataId}" class="mb-8 relative animate__animated ${transition}">
            <div
                class="absolute -left-[26px] top-1 w-5 h-5 ${bg} rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-5s">
            </div>
            <p class="text-2xl font-semibold">${year}</p>
            ${mapper(desc.map((item) => html`<p>${item}</p>`))}
        </div>
    `))

    return ui

}