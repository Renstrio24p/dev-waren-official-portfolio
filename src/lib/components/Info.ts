import { html } from '@devwareng/vanilla-ts';

type Details = {
    title: string;
    image: string;
    desc: string;
};

// ✅ Return HTML string instead of using useTSElements inside Info
export default function Info(detail: Details) {
    return html`
        <div class="flex flex-col w-fit text-center md:text-left py-8">
            <div class="relative mb-4">
                <img src="${detail.image}" alt="${detail.title}" class="absolute bottom-[-45%] right-2/3 lg:left-[-5%]" />
                <h3 class="uppercase tracking-widest font-semibold text-2xl">${detail.title}</h3>
            </div>
            <p class="text-gray-600">${detail.desc}</p>
        </div>
    `;
}
