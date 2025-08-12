import 'animate.css';
import { Header, Pillar } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function Contact(DOM: HTMLElement) {



    const ui = useTSElements(
        DOM,
        html`
        <section id="contact" class="relative min-h-screen animate__animated animate__fadeInUp animate__slow">
            <!-- Background Layers -->
            <div class="absolute bg-[url('/bg.jpg')] bg-fixed bg-center bg-cover w-full z-[-1] h-screen"></div>
            <div class="absolute bg-gray-50/97 bg-center bg-cover w-full z-[-1] h-screen"></div>
        
            <!-- Content -->
            <div class="max-w-screen-2xl mx-auto py-16 flex flex-col gap-8 items-center">
                ${Header(DOM, "Contact")}
        
                <p class="animate__animated animate__fadeIn animate__delay-1s px-4">
                    Shall we work together? Pop me a message, and I’ll be in touch before you can say “cuppa tea.”
                </p>
        
                ${Pillar(DOM)}
        
                <!-- Contact Form -->
                <form class="grid gap-2 w-full md:w-1/2 animate__animated animate__fadeInUp animate__delay-1s px-4" id="send">
                    <input type="text" name="fullname" placeholder="Name"
                        class="px-4 py-2 border-b-1 border-gray-600 outline-none focus:border-3" />
        
                    <input type="email" name="email" placeholder="Email"
                        class="px-4 py-2 border-b-1 border-gray-600 outline-none focus:border-3" />
        
                    <input type="text" name="subject" placeholder="Subject"
                        class="px-4 py-2 border-b-1 border-gray-600 outline-none focus:border-3" />
        
                    <textarea name="message" placeholder="Message"
                        class="px-4 py-2 border-b border-gray-600 resize-none h-[300px] outline-none focus:border-3"></textarea>
        
                    <div class="w-full flex justify-center py-8">
                        <button type="submit"
                            class="border-x-2 w-fit px-8 py-2 uppercase tracking-widest font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
        
                <p id="form-error" class="text-red-500 animate__animated animate__fadeInUp animate__delay-1s"></p>
        
        
                ${Pillar(DOM)}
            </div>
        </section>
        `

    );



    return ui;
}
