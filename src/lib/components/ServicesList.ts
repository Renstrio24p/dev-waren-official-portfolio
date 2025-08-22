import { html } from '@devwareng/vanilla-ts'
import { servicesList } from '../constants'
import { mapper } from '../func'

export default function ServicesList() {
    return mapper(
        servicesList.map(({ title, image, desc }, i) => {
            const delay = (i + 1) * 300; // stagger delay
            return html`
                <div data-id="${i}"
                    class="group relative flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate__animated animate__fadeInUp"
                    style="animation-delay:${delay}ms;">
                
                    <!-- Image Wrapper -->
                    <div
                        class="absolute -top-12 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                        <img src="${image}" alt="${title}" class="w-12 h-12 object-contain" />
                    </div>
                
                    <!-- Text Content -->
                    <div class="mt-16 space-y-4">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition">${title}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">${desc}</p>
                    </div>
                </div>
            `;
        })
    );
}
