// components/TestimonialCards.ts
import { html } from '@devwareng/vanilla-ts';
import { testimonials } from '../constants';
import { Stars } from './Stars';

export default function TestimonialCards() {
    return testimonials.map((e, i) => html`
        <div class="p-6 animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.2}s">
            <p class="text-gray-600">${e.message}</p>
            <div class="flex justify-between items-center">
                <div class="inline-flex items-center gap-4 mt-8">
                    <img src="${e.image}" alt="${e.name}" class="w-12 h-12 rounded-full" loading="lazy" />
                    <div>
                        <h3 class="text-lg font-semibold">${e.name}</h3>
                        <p class="text-sm text-gray-600">${e.school}</p>
                    </div>
                </div>
                <div class="text-2xl text-yellow-500 flex items-center">
                    ${Stars(e.rating || 5)}
                </div>
            </div>
        </div>
    `);
}
