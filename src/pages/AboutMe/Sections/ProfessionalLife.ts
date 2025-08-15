import 'animate.css'; // ✅ Import animate.css first
import { Title } from '@/lib/components';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function ProfessionalLife(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
        <section class="text-gray-600 animate__animated animate__fadeInUp">
            ${Title("My Professional Life")}
            <p class="my-4 animate__animated animate__fadeIn animate__delay-1s">
                The early days of my online career were not exciting. I did a ton of grunt work because I just
                wanted to make extra cash to help my family.
            </p>
        
            <div class="flex flex-col relative pl-8 border-l-4 border-gray-300 lg:max-w-1/2">
        
                <!-- Timeline item -->
                <div class="mb-8 relative animate__animated animate__fadeInLeft animate__delay-1s">
                    <div
                        class="absolute -left-[26px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-1s">
                    </div>
                    <p class="text-2xl font-semibold">2020</p>
                    <p class="text-gray-600">Started working as a freelance developer at CoderTubes Inc.</p>
                    <p>I'm part of the team at CoderTubes Inc. where I apply my skills to create engaging, user-friendly
                        solutions that meet both business goals and user needs.</p>
                </div>
        
                <!-- Timeline item -->
                <div class="mb-8 relative animate__animated animate__fadeInRight animate__delay-2s">
                    <div
                        class="absolute -left-[26px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-2s">
                    </div>
                    <p class="text-2xl font-semibold">2021</p>
                    <p class="text-gray-600">Joined my first full-time developer role</p>
                </div>
        
                <div class="mb-8 relative animate__animated animate__fadeInLeft animate__delay-3s">
                    <div
                        class="absolute -left-[26px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-3s">
                    </div>
                    <p class="text-2xl font-semibold">2022</p>
                    <p class="text-gray-600">Joined my first project based company for Daily Work</p>
                </div>
        
                <div class="mb-8 relative animate__animated animate__fadeInRight animate__delay-4s">
                    <div
                        class="absolute -left-[26px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-4s">
                    </div>
                    <p class="text-2xl font-semibold">2023</p>
                    <p class="text-gray-600">Joined my first project based company for Github</p>
                </div>
        
                <div class="mb-8 relative animate__animated animate__fadeInUp animate__delay-5s">
                    <div
                        class="absolute -left-[26px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate__animated animate__bounceIn animate__delay-5s">
                    </div>
                    <p class="text-2xl font-semibold">2024 - Present</p>
                    <p class="text-gray-600">Joined as a Web Master at Magic 89.9 FM Radio Station</p>
                </div>
            </div>
        </section>
        `
    );
    return ui;
}
