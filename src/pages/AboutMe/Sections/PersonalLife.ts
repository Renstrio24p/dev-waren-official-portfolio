import { Title } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function PersonalLife(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <section class="space-y-6 text-gray-600 animate__animated animate__fadeIn">
            ${Title("Personal Life")}
            <p class="animate__animated animate__fadeInUp animate__delay-1s">
                Life is not all about work — I also make time to enjoy good food and create memories.
                One of my favorite spots is <strong>Dookie Restaurant</strong>, where I often share
                dinner with family and friends. The place has a warm, welcoming atmosphere that
                makes every meal feel special.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 items-center animate__animated animate__zoomIn animate__delay-2s">
                <!-- Left Image -->
                <div class="overflow-hidden group h-full">
                    <img src="/dinner.jpg" alt="Dinner at Dookie Restaurant"
                        class="rounded-lg shadow-lg w-full md:h-full object-cover object-left transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105">
                </div>
        
                <!-- Right Grid -->
                <div
                    class="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-full md:max-w-[500px] md:max-h-[500px] mx-auto group">
        
                    <!-- Top-left big square -->
                    <div class="rounded-lg col-span-3 row-span-3 overflow-hidden">
                        <img src="/gallery8.webp"
                            class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                            alt="">
                    </div>
        
                    <!-- Top-right rectangle -->
                    <div class="rounded-lg col-span-1 row-span-1 overflow-hidden">
                        <img src="/gallery7.webp"
                            class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                            alt="">
                    </div>
        
                    <!-- Middle-right tall rectangle -->
                    <div class="rounded-lg col-span-1 row-span-2 overflow-hidden">
                        <img src="/gallery6.webp"
                            class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                            alt="">
                    </div>
        
                    <!-- Bottom-left rectangle -->
                    <div class="rounded-lg col-span-4 row-span-2 overflow-hidden">
                        <img src="/gallery5.jpg"
                            class="object-cover object-center w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                            alt="">
                    </div>
                </div>
            </div>
        
            <p class="animate__animated animate__fadeInUp animate__delay-3s">
                I currently live in <strong>Mandaluyong City</strong>, a bustling area in the heart
                of Metro Manila. Surrounded by vibrant streets and friendly neighbors, it’s a place
                that feels like home and keeps me connected to both city life and community warmth.
            </p>
        </section>
        `
    );
    return ui
}
