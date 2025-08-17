// components/Stars.ts
import { html } from '@devwareng/vanilla-ts';
import { mapper } from '../func';

// rating: number between 0–5
export function Stars(rating = 5) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return html`
        ${mapper(
            Array(fullStars)
                .fill(null)
                .map(() => html`<i class='bx bxs-star text-yellow-500'></i>`)
        )}
        ${mapper(
            Array(emptyStars)
                .fill(null)
                .map(() => html`<i class='bx bx-star text-yellow-500'></i>`)
        )}
    `;
}
