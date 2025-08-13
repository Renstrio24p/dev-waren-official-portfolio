// Sidebar.ts
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Sidebar(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
    <aside id="sidebar"
        class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-50">
        <div class="flex flex-col gap-6 p-6">
            <ul class="flex flex-col gap-4 font-medium">
                <li><a href="#about-me" class="hover:text-blue-600 transition-colors">About me</a></li>
                <li><a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a></li>
                <li><a href="#portfolio" class="hover:text-blue-600 transition-colors">Portfolio</a></li>
            </ul>
            <a href="#contact" class="bg-white text-black shadow px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Me
            </a>
        </div>
    </aside>
    `
    );
    return ui;
}
