// components/Stars.ts
import { html } from '@devwareng/vanilla-ts';

// rating: number between 0–5
export function Stars(rating = 5) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return html`
        ${Array(fullStars)
        .fill(null)
        .map(() => html`<i class='bx bxs-star text-yellow-500'></i>`)
        .join('')}
        ${Array(emptyStars)
        .fill(null)
        .map(() => html`<i class='bx bx-star text-yellow-500'></i>`)
        .join('')}
    `;
}
