import { useIntroductionSettings } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Introduction(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <section class="bg-[#1D1D1D] text-white  relative overflow-hidden" id="services">
            <div class="relative max-w-[1720px] mx-auto px-4 md:px-8 py-8 grid gap-4 z-[2]">
                <h2 class="text-4xl font-semibold relative z-[2]">CoderTubes Services</h2>
                <p class="w-full md:w-2/3 relative z-[2] text-sm md:text-base">I design and build complete, high-performance web
                    applications from
                    the
                    ground up —
                    from
                    crafting
                    sleek,
                    responsive UIs to
                    engineering secure, scalable backends. Skilled in both frontend and backend technologies, I deliver clean,
                    maintainable
                    code and optimized workflows that bring ideas to life. Whether it’s a modern web app, a feature-rich
                    dashboard,
                    or a
                    complex API, I ensure every project is fast, user-friendly, and built to last.</p>
                <button
                    class="w-fit border-x-2 px-8 py-1 mt-4 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                    id="read-me">READ MORE</button>
                <img src="/it.png" alt="logo it" class="absolute right-0 top-0 w-84 z-[1]">
            </div>
        </section>
`
    );

    useIntroductionSettings(DOM);
    return ui
}