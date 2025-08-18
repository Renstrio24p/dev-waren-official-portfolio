
const useSSRHydration = (DOM: HTMLElement) => {
    if (typeof window === "undefined") return;

    const isDOM = DOM || document.body;

    return { isDOM };
};

export { useSSRHydration };