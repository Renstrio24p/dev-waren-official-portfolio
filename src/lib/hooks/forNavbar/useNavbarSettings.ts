import { useTSEvent, useTSSelect } from "@devwareng/vanilla-ts";
import { useScrollNavbar } from "./useScrollbar";
import { useSidebarToggle } from "./useSidebarToggle";
import Sidebar from "@/lib/components/Sidebar";

const useNavbarSettings = (DOM: HTMLElement): void => {

    const nav = useTSSelect<HTMLElement>('#navbar')!;
    useScrollNavbar(nav);

    // Mount sidebar
    const sidebarContainer = DOM.querySelector('#sidebar-container')!;
    const sidebarToggle = useSidebarToggle('sidebar', 'menu-btn');
    Sidebar(sidebarContainer as HTMLElement, () => {
        sidebarToggle?.hideSidebar();
    });

    // Sidebar logic via hook
    useSidebarToggle('sidebar', 'menu-btn');

    // Logo click → scroll to top
    useTSEvent('logo-app', 'click', () => {
        if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        else window.location.href = "/";
    });

};

export { useNavbarSettings };