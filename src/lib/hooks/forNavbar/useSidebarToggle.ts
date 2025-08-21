import { SidebarFunction } from '@/lib/types/Functions';
import { useTSEvent, useTSSelect } from '@devwareng/vanilla-ts';

export const useSidebarToggle: SidebarFunction = (
    sidebarId,
    menuBtnId
) => {
    const sidebar = useTSSelect<HTMLElement>(`#${sidebarId}`)!;
    const menuBtn = useTSSelect<HTMLElement>(`#${menuBtnId}`)!;

    const showSidebar = () => {
        sidebar?.classList.remove('-translate-x-full');
        sidebar?.classList.add('translate-x-0');
    };

    const hideSidebar = () => {
        sidebar?.classList.remove('translate-x-0');
        sidebar?.classList.add('-translate-x-full');
    };

    // Menu button click → toggle sidebar
    useTSEvent(`${menuBtnId}`, 'click', (e) => {
        e.stopPropagation();
        if (sidebar?.classList.contains('-translate-x-full')) {
            showSidebar();
        } else {
            hideSidebar();
        }
    });

    // Click outside → close sidebar
    useTSEvent(document, "click", (e) => {
        const target = e.target as HTMLElement;
        if (!sidebar?.contains(target) && target !== menuBtn && !menuBtn.contains(target)) {
            hideSidebar();
        }
    })

    return { showSidebar, hideSidebar };
};
