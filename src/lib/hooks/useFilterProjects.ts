import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/projects";

const useFilterProjects = (DOM: HTMLElement, dataId: number) => {
    const updateProjects = (isFullStack?: boolean) => {
        const container = DOM.querySelector('#projects-container');
        if (!container) return;

        container.textContent = '';

        const filtered = isFullStack === true
            ? projects.filter(p => p.fullStack)
            : isFullStack === false
                ? projects.filter(p => p.designed)
                : projects;

        filtered.forEach(project => {
            container.innerHTML += ProjectCard(container as HTMLElement, project, dataId);
        });
    }

    const setActive = (activeId: 'allproject' | 'fullstack' | 'designed') => {
        const tabs = ['allproject', 'fullstack', 'designed'] as const;

        tabs.forEach(id => {
            const tab = DOM.querySelector(`#${id}`) as HTMLElement;
            const line = tab?.nextElementSibling as HTMLElement;
            if (!tab || !line) return;

            if (id === activeId) {
                tab.classList.add('font-semibold');
                line.classList.replace('h-[1px]', 'h-[2px]');
            } else {
                tab.classList.remove('font-semibold');
                line.classList.replace('h-[2px]', 'h-[1px]');
            }
        });
    }

    const selectFilterProjects = () => {
        const allTab = DOM.querySelector('#allproject');
        const fullstackTab = DOM.querySelector('#fullstack');
        const designedTab = DOM.querySelector('#designed');

        allTab?.addEventListener('click', () => {
            updateProjects();
            setActive('allproject');
        });

        fullstackTab?.addEventListener('click', () => {
            updateProjects(true);
            setActive('fullstack');
        });

        designedTab?.addEventListener('click', () => {
            updateProjects(false);
            setActive('designed');
        });
    }

    return { updateProjects, selectFilterProjects };
}


export { useFilterProjects }