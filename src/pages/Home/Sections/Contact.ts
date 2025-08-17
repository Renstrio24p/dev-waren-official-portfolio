import 'animate.css';
import { Header, Pillar } from '@/lib/components';
import { html, useTSElements, useTSEventAll } from '@devwareng/vanilla-ts';
import { useContactForm } from '@/lib/hooks';

export default function Contact(DOM: HTMLElement) {

    const { errors, handleSubmit, requestAnimation } = useContactForm(DOM);

    const ui = useTSElements(
        DOM,
        html`
        <section id="contact" class="relative min-h-screen animate__animated animate__fadeInUp animate__slow py-32">
            <div class="absolute bg-[url('/bg.webp')] bg-fixed bg-cover bg-center w-full min-h-screen max-h-fit z-[-1]"></div>
            <div class="absolute bg-gray-50/95 bg-center bg-cover w-full z-[-1] h-screen"></div>
        
            <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-8 items-center">
                ${Header("Contact")}
        
                <p class="animate__animated animate__fadeIn animate__delay-1s px-4">
                    Shall we work together? Pop me a message, and I’ll be in touch before you can say “cuppa tea.”
                </p>
        
                ${Pillar(DOM)}
        
                <form class="grid gap-4 w-full md:w-1/2 animate__animated animate__fadeInUp animate__delay-1s px-4" id="send">
                    <div>
                        <input type="text" name="fullname" placeholder="Name"
                            class="px-4 py-2 border-b border-gray-600 outline-none focus:border-3 w-full" />
                        <p class="text-red-500 text-sm mt-1" data-error-field="name">${errors?.name || ''}</p>
                    </div>
        
                    <div>
                        <input type="email" name="email" placeholder="Email"
                            class="px-4 py-2 border-b border-gray-600 outline-none focus:border-3 w-full" />
                        <p class="text-red-500 text-sm mt-1" data-error-field="email">${errors?.email || ''}</p>
                    </div>
        
                    <div>
                        <input type="text" name="subject" placeholder="Subject"
                            class="px-4 py-2 border-b border-gray-600 outline-none focus:border-3 w-full" />
                        <p class="text-red-500 text-sm mt-1" data-error-field="subject">${errors?.subject || ''}</p>
                    </div>
        
                    <div>
                        <textarea name="message" placeholder="Message"
                            class="px-4 py-2 border-b border-gray-600 resize-none h-[300px] outline-none focus:border-3 w-full"></textarea>
                        <p class="text-red-500 text-sm mt-1" data-error-field="message">${errors?.message || ''}</p>
                    </div>
        
                    <div class="w-full flex justify-center py-8">
                        <button type="submit"
                            class="border-x-2 w-fit px-8 py-2 uppercase tracking-widest font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
        
                ${Pillar(DOM)}
            </div>
        </section>
        `
    );


    requestAnimation();
    useTSEventAll("#send", "submit", (e) => handleSubmit(e));




    return ui;
}
