import { html, useTSElements, useTSEvent } from '@devwareng/vanilla-ts'
import Pillar from './Pillar';
import { useUniqueId } from '../hooks';

export default function Footer(DOM: HTMLElement) {

    const { dataId } = useUniqueId()

    const ui = useTSElements(
        DOM,
        html`
        <footer data-id="${dataId}" class="bg-[#1A1A1A] text-white">
            <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-8 items-center ">
                ${Pillar(DOM, "bg-white text-white")}
                <div class="italic text-center">
                    <p>"First, solve the problem. Then, write the code." </p>
                    <p>- John Johnson</p>
                </div>
                <div class="my-4 text-4xl flex gap-4">
                    <a href="http://https://www.facebook.com/rens.34dev" class="bx bxl-facebook" aria-label="facebook"></a>
                    <a href="http://https://www.linkedin.com/in/waren-g-18505b1b7" class="bx bxl-linkedin"
                        aria-label="linkedin"></a>
                    <a href="https://x.com/waren_gador" class="bx bxl-twitter" aria-label="twitter"></a>
                    <a href="http://github.com/devwaren" class="bx bxl-github" aria-label="github"></a>
                </div>
                <p class="text-white">Copyright &copy; 2025 Dev Waren</p>
        
                <button class="text-center cursor-pointer" id="back" aria-label="back to top">
                    <i class='bx bx-chevrons-up text-4xl animate-bounce delay-75'></i>
                    <p>Back to top</p>
                </button>
                ${Pillar(DOM, "bg-white text-white")}
            </div>
        </footer>
        `
    );

    useTSEvent("back", "click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    return ui
}