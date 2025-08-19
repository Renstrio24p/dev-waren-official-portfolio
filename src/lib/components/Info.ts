import { html, useTSElements } from '@devwareng/vanilla-ts'

type Details = {
    title: string,
    image: string,
    desc: string
}

export default function Info(DOM: HTMLElement, detail: Details) {
    const ui = useTSElements(
        DOM,
        html`
        <div class="flex flex-col w-fit text-center md:text-left">
            <div class="relative mb-4">
                <img src="${detail.image}" alt="${detail.title}" class="absolute bottom-[-45%] right-2/3 lg:left-[-5%]" />
                <h3 class="uppercase tracking-widest font-semibold text-2xl">${detail.title}</h3>
            </div>
            <p class="text-gray-600">${detail.desc}</p>
        </div>
`
    );
    return ui
}