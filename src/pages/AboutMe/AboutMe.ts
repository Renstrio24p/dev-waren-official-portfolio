import { useAboutSettings } from '@/lib/hooks';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function AboutMe(DOM: HTMLElement) {
    useTSMetaData({
        name: 'About Me',
        description: 'This Page contains information about me',
        author: 'Waren Gador'
    });

    const ui = useTSElements(
        DOM,
        html`
        <div class="min-h-screen relative">
            <div class="absolute bg-gradient-to-b bg-black/86 bg-cover bg-no-repeat w-full min-h-[4.5rem] z-4">
            </div>
            <div
                class="absolute bg-gradient-to-tr from-gray-50 via-gray-50 to-transparent bg-cover bg-no-repeat w-full min-h-screen z-1 inset-0">
            </div>
            <div class="fixed bg-cracked bg-fixed bg-cover bg-no-repeat w-full min-h-screen z-[-1]">
            </div>
            <div class="relative max-w-screen-2xl mx-auto py-32 z-[10] px-4 md:px-0">
                <div id="about-hero"></div>
                <div class="grid lg:grid-cols-2 gap-4">
                    <div id="professional-life"></div>
                    <div id="personal-life"></div>
                </div>
                <div id="working-gallery"></div>
                <div id="testimonials"></div>
                <div id="closing-note"></div>
                <div id="carousel"></div>
                <div id="contact-section"></div>
            </div>
        </div>
        `
    );

    useAboutSettings(DOM);
    return ui;
}
