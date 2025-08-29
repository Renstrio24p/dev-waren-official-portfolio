import { useTSEvent, useTSSelect } from "@devwareng/vanilla-ts";
import { useScrollNavbar } from "./useScrollbar";
import { useSidebarToggle } from "./useSidebarToggle";
import { Sidebar } from "@/lib/components";
import { HookFunction, SidebarExtend } from "@/lib/types";

const useNavbarSettings: HookFunction = (DOM) => {

    const nav = useTSSelect<HTMLElement>('#navbar')!;
    useScrollNavbar(nav);

    // Mount sidebar
    const sidebarContainer = DOM.querySelector('#sidebar-container')!;
    const sidebarToggle = useSidebarToggle('sidebar', 'menu-btn') as SidebarExtend | undefined;
    Sidebar(sidebarContainer as HTMLElement, () => sidebarToggle?.hideSidebar());

    // Sidebar logic via hook
    const sidebarToggler = useSidebarToggle('sidebar', 'menu-btn');

    // Logo click → scroll to top
    const events = useTSEvent('logo-app', 'click', () => {
        if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
        else window.location.href = "/";
    });


    return [sidebarToggler, events]

};

export { useNavbarSettings };