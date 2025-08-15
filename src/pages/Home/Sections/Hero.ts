import 'animate.css';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Hero(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <section class="flex relative min-h-[20em] lg:min-h-screen z-0 overflow-hidden">
            <!-- Background Layers -->
            <div
                class="absolute bg-[url('/bg.jpg')] bg-center bg-cover w-full z-[-1] h-[20em] lg:h-screen animate__animated animate__fadeIn">
            </div>
            <div
                class="absolute bg-gray-50/90 bg-center bg-cover w-full z-[-1] h-[20em] lg:h-screen animate__animated animate__fadeIn animate__delay-1s">
            </div>
        
            <!-- Left Section -->
            <div class="flex flex-col items-start justify-end px-[5%] pb-[10%] w-full md:w-2/3 h-[20em] lg:min-h-screen">
                <div class="z-1 animate__animated animate__fadeInLeft animate__delay-1s">
                    <p class="mb-4">Hi, I'm</p>
                    <h1 class="text-4xl md:text-5xl lg:text-7xl font-semibold">Waren Gador</h1>
                    <p class="text-gray-500 mt-6">Fullstack Developer / UI/UX Designer</p>
        
                    <div class="mt-4 lg:mt-32 flex gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                        <div class="w-10 h-10 rounded-xs bg-white shadow flex items-center justify-center">
                            <a href="mailto:waren.gador15@gmail.com"
                                class="bx bx-envelope text-4xl text-gray-500 hover:text-gray-600 transition-colors">
                            </a>
                        </div>
                        <div class="w-10 h-10 rounded-xs bg-white shadow flex items-center justify-center">
                            <a href="http://github.com/Renstrio24p"
                                class="bx bxl-github text-4xl text-gray-500 hover:text-gray-600 transition-colors">
                            </a>
                        </div>
                        <div class="w-10 h-10 rounded-xs bg-white shadow flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/waren-g-18505b1b7/"
                                class="bx bxl-linkedin text-4xl text-gray-500 hover:text-gray-600 transition-colors"></a>
                        </div>
                        <div class="w-10 h-10 rounded-xs bg-white shadow flex items-center justify-center">
                            <a href="https://t.me/devwareng"
                                class="bx bxl-telegram text-4xl text-gray-500 hover:text-gray-600 transition-colors"></a>
                        </div>
                        <div class="w-10 h-10 rounded-xs bg-white shadow flex items-center justify-center">
                            <a href="https://www.facebook.com/rens.34dev"
                                class="bx bxl-facebook text-4xl text-gray-500 hover:text-gray-600 transition-colors"></a>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Right Section -->
            <div
                class="absolute hidden md:flex inset-0 clip-diagonal bg-black items-center justify-center animate__animated animate__fadeInRight animate__delay-1s bottom-0">
                <div class="relative z-[2] h-screen w-screen">
                    <img src="/devwareng.webp" alt="Profile"
                        class="max-h-screen object-cover z-10 absolute md:bottom-[20%] lg:bottom-0 right-[0%] w-1/2 animate__animated animate__zoomIn animate__delay-2s hidden md:block"
                        width="500" height="500" />
                </div>
            </div>
        </section>
        `
    );

    return ui;
}
