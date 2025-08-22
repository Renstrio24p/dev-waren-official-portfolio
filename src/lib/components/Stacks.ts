import { html } from '@devwareng/vanilla-ts'

type TechStack = {
    title: string,
    image: string,
    backend: boolean
}

export default function Stacks(techstacks: TechStack) {

    return html`
        <div class="flex flex-col gap-4 justify-between items-center text-center">
            <img src="${techstacks.image}" alt="${techstacks.title}" width="80px" height="80px">
            <p class="">${techstacks.title}</p>
        </div>
    `
}