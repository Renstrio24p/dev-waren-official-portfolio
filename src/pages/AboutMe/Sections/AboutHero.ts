import 'animate.css';
import { Title } from '@/lib/components';
import { useLinks } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts';

export default function AboutHero(DOM: HTMLElement) {
    const { linkElements } = useLinks();

    const ui = useTSElements(
        DOM,
        html`
        <div
            class="md:grid flex flex-col-reverse md:grid-cols-2 gap-8 py-16 items-center animate__animated animate__fadeIn animate__delay-0_5s">
        
            <!-- Left Content -->
            <div
                class="flex flex-col gap-8 text-gray-600 leading-relaxed px-4 animate__animated animate__fadeInLeft animate__delay-1s">
                ${Title("About Myself")}
        
                <p class="animate__animated animate__fadeIn animate__delay-1_5s">
                    I’m truly excited to share my skills and contributions with everyone. Over the past four years, I have built
                    a strong foundation in developing responsive, high-performance web applications. My technical expertise
                    includes working extensively with technologies such as Go (Golang), React, TypeScript, React Native, and
                    Chakra UI. In addition, I have a creative side, with experience in UI/UX design using tools like Figma,
                    which allows me to bring both functionality and aesthetics together in my projects.
                </p>
        
                <p class="animate__animated animate__fadeIn animate__delay-2s">
                    Currently, I’m part of the team at Magic 89.9, where I apply my skills to create engaging, user-friendly
                    solutions that meet both business goals and user needs. I enjoy taking on challenges that push me to learn
                    more, optimize performance, and craft seamless user experiences. Beyond my core technical work, I’m always
                    open to meaningful discussions—whether it’s about the latest technology trends, UI/UX improvements, or
                    innovative problem-solving approaches. I’d be happy to connect, exchange ideas, and explore opportunities
                    to collaborate on something impactful.
                </p>
        
                <div
                    class="inline-flex gap-4 justify-between items-center animate__animated animate__fadeInUp animate__delay-2_5s">
        
                    <div class="inline-flex gap-4">
                        ${linkElements}
                    </div>
                </div>
            </div>
        
            <!-- Right Image -->
            <div class="flex justify-center relative animate__animated animate__fadeInRight animate__delay-1_5s">
                <img src="/devwarenabout.webp" alt="Waren Gador Portrait" width="400" height="400"
                    class="rounded-xl object-cover animate__animated animate__zoomIn animate__delay-1_5s" loading="lazy">
                <div
                    class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent rounded-b-xl pointer-events-none blur-3xl animate__animated animate__fadeIn animate__delay-2_5s">
                </div>
            </div>
        </div>
        `
    );

    return ui;
}
