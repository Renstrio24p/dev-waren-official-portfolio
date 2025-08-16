// ✅ ClosingNote.ts
import { useContactVisibility } from '@/lib/hooks';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export default function ClosingNote(DOM: HTMLElement) {
    useTSMetaData({
        name: 'ClosingNote',
        description: 'Final personal message to the reader',
        author: 'Dev Waren'
    });


    const ui = useTSElements(
        DOM,
        html`
        <div class="px-4 py-12 animate__animated animate__fadeInUp text-base">
            <p class="text-gray-700 leading-relaxed mb-4">
                Thank you for taking the time to read this. I know I have an inspiring story, but I want to inspire you in the
                right way.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Everything I say is from my personal experience. None of the things I share on this blog will make you know me.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-2s">
                Building an online business takes a lot of time, hard work, patience, and a little bit of luck.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-3s">
                Once again, thanks a lot for taking the time to read this. I look forward to connecting with you.
            </p>
        
            <p class="py-4">Click the button below to get in touch with me</p>
        
            <button type="button" id="contact-me"
                class="cursor-pointer animate__animated animate__fadeIn animate__delay-3s border-x-2 w-fit px-8 py-2 uppercase tracking-widest font-semibold transition-colors duration-300 hover:bg-black hover:text-white animate__pulse animate__repeat-2">
                Contact
            </button>
        
            <p class="text-gray-700 mt-6 font-medium animate__animated animate__fadeIn animate__delay-4s">Cheers!,</p>
            <p class="text-gray-900 font-semibold animate__animated animate__fadeIn animate__delay-4s italic">– Dev Waren</p>
        
            <div id="contact-section-container" class="mt-6"></div>
        </div>
    `
    );

    const { handleShowContact } = useContactVisibility(DOM);
    handleShowContact();

    return ui;
}
