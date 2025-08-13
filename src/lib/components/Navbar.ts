import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Navbar(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
            <header id="navbar" class="fixed top-0 left-0 right-0 z-[10] bg-transparent">
                <div class="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-6 py-4">
                    <div class="inline-flex gap-4 cursor-pointer" id="logo-app">
                        <img src="/devwaren.webp" alt="logo" class="h-10 w-auto animate-pulse" />
                        <h1 class="text-xl font-semibold text-gray-600">Dev Waren &trade;</h1>
                    </div>
                    <nav class="hidden md:flex items-center gap-6">
                        <ul class="flex items-center gap-x-16 font-medium">
                            <li class="hover:text-blue-600 transition-colors cursor-pointer">
                                <a href="#about-me">About me</a>
                            </li>
                            <li class="hover:text-blue-600 transition-colors cursor-pointer">
                                <a href="#skills">Skills</a>
                            </li>
                            <li class="hover:text-blue-600 transition-colors cursor-pointer">
                                <a href="#portfolio">Portfolio</a>
                            </li>
                        </ul>
                        <a href="#contact"
                            class="bg-white text-black shadow px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Contact Me
                        </a>
                    </nav>
                </div>
            </header>
        `
    );


    return ui;
}
