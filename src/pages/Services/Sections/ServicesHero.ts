import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ServicesHero(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <section class="py-16 px-4 text-center min-h-[25em] grid place-items-center">
            <div class="space-y-4">
                <h1
                    class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 animate__animated animate__fadeIn duration-300">
                    Crafting Software with Distinction
                </h1>
                <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeInUp delay-100">
                    Bespoke digital solutions, meticulously engineered to elevate your business.
                    Whether you’re launching, scaling, or refining, I deliver technology with precision,
                    elegance, and a touch of British finesse. </p>
            </div>
        </section>
        `
    );

    return ui
}
