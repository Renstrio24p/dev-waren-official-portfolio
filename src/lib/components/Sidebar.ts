import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Sidebar(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div>
            <aside>
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
                <a href="#contact" class="bg-white text-black shadow px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Me
                </a>
            </aside>
        </div>
`
    );
    return ui
}