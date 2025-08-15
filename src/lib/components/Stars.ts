import { html } from "@devwareng/vanilla-ts";

const Stars = () => (
    Array.from({ length: 5 }, () =>
        html`<i class='bx bxs-star text-yellow-500'></i>`
    ).join('')
)

export { Stars }