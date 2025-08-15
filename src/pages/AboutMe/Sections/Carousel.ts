import { initMarqueeeSlider } from '@/lib/utils';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function Carousel(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Carousel',
        description: 'Infinite moving carousel from left to right',
        author: 'Waren'
    });

    const ui = useTSElements(
        DOM,
        html`
        <div class="relative overflow-hidden px-4">
        
            <h2 class="pb-16 text-lg">Here's the list of companies I've worked with along with Magic 89.9</h2>
        
            <div id="marquee-slider" class="px-4 overflow-hidden" data-speed="10" data-space="30">
                <div class="marquee-slider-wrapper">
                    <div class="marquee-slider-slides-wrapper flex gap-2">
                        <img src="/magic.webp" width="200" height="200" alt="">
                        <img src="/disney.webp" width="200" height="200" alt="">
                        <img src="/pixar.webp" width="200" height="200" alt="">
                        <img src="/warner.webp" width="100" height="100" alt="">
                        <img src="/codertubes.webp" width="250" height="300" alt="">
        
                    </div>
                </div>
            </div>
        </div>
       
        `
    );

    initMarqueeeSlider("marquee-slider");

    return ui;
}
