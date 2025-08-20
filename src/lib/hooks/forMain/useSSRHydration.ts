import { HydrationFunction } from "@/lib/types";

const useSSRHydration: HydrationFunction = (DOM) => {
    if (typeof window === "undefined") {
        return { isDOM: null };
    }

    const isDOM = DOM || document.body;

    return { isDOM };
};

export { useSSRHydration };
