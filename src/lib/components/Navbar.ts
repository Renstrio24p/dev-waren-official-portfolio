import { html, useTSElements, useTSEvent, useTSSelect } from '@devwareng/vanilla-ts';
import { useScrollNavbar, useSidebarToggle } from '@/lib/hooks';

import Sidebar from './Sidebar';

export default function Navbar(DOM: HTMLElement) {
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
                        <li><a href="#about-me" class="hover:text-blue-600 transition-colors">About me</a></li>
                        <li><a href="#services" class="hover:text-blue-600 transition-colors">Services</a></li>
                        <li><a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a></li>
                        <li><a href="#portfolio" class="hover:text-blue-600 transition-colors">Portfolio</a></li>
                    </ul>
                    <a href="#contact"
                        class="bg-white text-black shadow px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Contact Me
                    </a>
                </nav>
                <button class="block md:hidden text-black" id="menu-btn">
                    <i class="bx bx-menu text-4xl"></i>
                </button>
            </div>
        </header>
        <div id="sidebar-container"></div>
    `
    );

    const nav = useTSSelect<HTMLElement>('#navbar')!;
    useScrollNavbar(nav);

    // Mount sidebar
    const sidebarContainer = DOM.querySelector('#sidebar-container')!;
    const sidebarToggle = useSidebarToggle('sidebar', 'menu-btn');
    Sidebar(sidebarContainer as HTMLElement, () => {
        sidebarToggle?.hideSidebar();
    });

    // Sidebar logic via hook
    useSidebarToggle('sidebar', 'menu-btn');

    // Logo click → scroll to top
    useTSEvent('logo-app', 'click', () => {
        if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        else window.location.href = "/";
    });

    return ui;
}
