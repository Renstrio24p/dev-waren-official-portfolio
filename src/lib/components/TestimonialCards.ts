// components/TestimonialCards.ts
import { html } from '@devwareng/vanilla-ts';
import { testimonials } from '../constants';
import Stars from './Stars';
import { mapper } from '../func';
import { useUniqueId } from '../hooks';

export default function TestimonialCards() {

    return mapper(
        testimonials.map(({ message, image, name, school, rating }, i) => {

            const { dataId } = useUniqueId();

            return html`
            <div data-id="${dataId}" class="p-6 animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.2}s">
                <p class="text-gray-600">${message}</p>
                <div class="flex flex-col sm:flex-row justify-between md:items-center gap-2">
                    <div class="inline-flex items-center gap-4 mt-8">
                        <img src="${image}" alt="${name}" class="w-12 h-12 rounded-full" fetchpriority="low" width="48" height="48"
                            loading="lazy" />
                        <div>
                            <h3 class="text-lg font-semibold">${name}</h3>
                            <p class="text-sm text-gray-600">${school}</p>
                        </div>
                    </div>
                    <div class="text-2xl text-yellow-500 flex items-center">
                        ${Stars(rating || 5)}
                    </div>
                </div>
            </div>
            `
        }
        )
    )
}
