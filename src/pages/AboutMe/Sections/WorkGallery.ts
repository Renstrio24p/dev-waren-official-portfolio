import { Title } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function WorkGallery(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="text-gray-600 animate__animated animate__fadeInUp pt-16">
            ${Title("Work Gallery")}
            <div class="py-4 px-2">
                <p>My Working journey at Magic 89.9 FM Radio</p>
                <p>Thank you magic 89.9 FM Radio for being part of your team and giving me the opportunity to grow as a
                    developer
                </p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 group">
                <!-- Top-left big square -->
                <div class="overflow-hidden">
                    <img src="/gallery4.webp"
                        class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                        alt="">
                </div>
        
                <div class="overflow-hidden">
                    <img src="/gallery2.webp"
                        class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                        alt="">
                </div>
        
                <div class="overflow-hidden">
                    <img src="/gallery3.webp"
                        class="object-cover w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                        alt="">
                </div>
        
                <div class="overflow-hidden">
                    <img src="/gallery1.webp"
                        class="object-cover object-center w-full h-full transition duration-300 ease-in-out group-hover:opacity-30 hover:!opacity-100 hover:scale-105"
                        alt="">
                </div>
            </div>
        </div>
        `
    );
    return ui
}
