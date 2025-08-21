// hooks/useScrollNavbar.ts
import { HookFunction } from '@/lib/types';
import { animate, scroll } from 'motion';

const useScrollNavbar: HookFunction = (navbar) => {
    if (!navbar) return;

    let isScrolled = true; // default to "scrolled" style

    // Set default style (white)
    navbar.style.backgroundColor = 'rgba(255,255,255,1)';
    navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    navbar.style.color = '#000';

    const stopScroll = scroll((_progress: number) => {
        const shouldBeScrolled = window.scrollY > 20;

        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;

            animate(
                navbar,
                isScrolled
                    ? {
                        backgroundColor: 'rgba(255,255,255,1)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        color: '#000',
                    }
                    : {
                        backgroundColor: 'rgba(255,255,255,0)',
                        boxShadow: '0 0 0 rgba(0,0,0,0)',
                        color: '#fff',
                    },
                { duration: 0.3 }
            );
        }
    });

    return () => {
        stopScroll();
    };
}

export { useScrollNavbar }
