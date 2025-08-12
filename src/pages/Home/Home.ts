// Home.ts
import { html, useTSElements, useTSEvent, useTSEventAll, useTSSelect } from "@devwareng/vanilla-ts";
import { AboutMe, Contact, Hero, Introduction, Portfolio } from "./Sections";
import { useContactForm, useUniqueId } from "@/lib/hooks";
import { contactStore } from "@/store";

const Home = (DOM: HTMLElement, websiteName: string) => {
    document.title = websiteName;

    const { dataId } = useUniqueId();

    const { handleSubmit } = useContactForm();

    // Render all sections including Navbar
    const ui = useTSElements(
        DOM,
        html`
        <div class="relative min-h-screen flex flex-col overflow-hidden">
            ${Hero(DOM)}
            ${Introduction(DOM)}
            ${AboutMe(DOM)}
            ${Portfolio(DOM, dataId)}
            ${Contact(DOM)}
        </div>
        `
    );

    useTSEvent('back', 'click', () => window.scrollTo(0, 0));
    useTSEventAll("#send", "click", (e) => {
        e.preventDefault();
        handleSubmit(e);
        console.log('submit');
    });

    const errorEl = useTSSelect<HTMLElement>('#form-error');

    useTSEventAll("#send", "submit", () => handleSubmit);

    // Subscribe to error changes
    contactStore.subscribe((state) => {
        errorEl!.textContent = state.error;
    });

    return ui;
};

export default Home;
