import { ProjectCard } from "../components";
import { tabs, projects } from "../constants";


const useFilterProjects = (DOM: HTMLElement, dataId: number) => {
    const updateProjects = (filter?: boolean) => {
        const container = DOM.querySelector('#projects-container') as HTMLElement;
        if (!container) return;
        container.textContent = '';

        const filtered = filter === true
            ? projects.filter(p => p.fullStack)
            : filter === false
                ? projects.filter(p => p.designed)
                : projects;

        filtered.forEach(project => {
            container.innerHTML += ProjectCard(container, project, dataId);
        });
    }

    const setActive = (activeId: string) => {
        tabs.forEach(tab => {
            const el = DOM.querySelector(`#${tab.id}`) as HTMLElement;
            const line = el?.nextElementSibling as HTMLElement;
            if (!el || !line) return;

            if (tab.id === activeId) {
                el.classList.add('font-semibold');
                line.classList.replace('h-[1px]', 'h-[2px]');
            } else {
                el.classList.remove('font-semibold');
                line.classList.replace('h-[2px]', 'h-[1px]');
            }
        });
    }

    const selectFilterProjects = () => {
        tabs.forEach(tab => {
            const el = DOM.querySelector(`#${tab.id}`);
            if (!el) return;

            el.addEventListener('click', () => {
                updateProjects(tab.filter);
                setActive(tab.id);
            });
        });
    }

    // Initialize after DOM is rendered
    const init = () => {
        updateProjects();
        setActive('allproject');
        selectFilterProjects();
    }

    return { updateProjects, selectFilterProjects, init };
}

export { useFilterProjects }
