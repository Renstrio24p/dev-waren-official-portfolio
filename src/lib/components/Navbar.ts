import { html, useTSElements } from '@devwareng/vanilla-ts';
import { useNavbarLinks, useNavbarSettings } from '@/lib/hooks';


export default function Navbar(DOM: HTMLElement) {

    // top hook
    const { links } = useNavbarLinks();

    // UI Render
    const ui = useTSElements(
        DOM,
        html`
        <header id="navbar" class="fixed top-0 left-0 right-0 bg-transparent z-[99]">
            <div class="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-6 py-4">
                <div class="inline-flex gap-4 cursor-pointer" id="logo-app">
                    <img src="/devwaren.webp" alt="logo" class="h-10 w-auto animate-pulse" />
                    <h1 class="text-xl font-semibold text-gray-600" id="name-logo">Dev Waren &trade;</h1>
                </div>
                <nav class="hidden md:flex items-center gap-6">
                    <ul class="flex items-center gap-x-16 font-medium">
                        ${links}
                    </ul>
                    <a href="#contact"
                        class="bg-white text-black shadow px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        aria-label="Contact me">
                        Contact Me
                    </a>
                </nav>
                <button class="block md:hidden text-black cursor-pointer" id="menu-btn" aria-label="menu">
                    <i class="bx bx-menu text-4xl"></i>
                </button>
            </div>
        </header>
        <div id="sidebar-container"></div>
    `
    );

    // bottom hook 
    useNavbarSettings(DOM);

    return ui;
}
