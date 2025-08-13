import { useTSEvent, useTSSelect } from '@devwareng/vanilla-ts';

export const useSidebarToggle = (
    sidebarId: string,
    menuBtnId: string
) => {
    const sidebar = useTSSelect<HTMLElement>(`#${sidebarId}`)!;
    const menuBtn = useTSSelect<HTMLElement>(`#${menuBtnId}`)!;

    const showSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
    };

    const hideSidebar = () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
    };

    // Menu button click → toggle sidebar
    useTSEvent(menuBtnId, 'click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('-translate-x-full')) {
            showSidebar();
        } else {
            hideSidebar();
        }
    });

    // Click outside → close sidebar
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!sidebar.contains(target) && target !== menuBtn && !menuBtn.contains(target)) {
            hideSidebar();
        }
    });

    return { showSidebar, hideSidebar };
};
