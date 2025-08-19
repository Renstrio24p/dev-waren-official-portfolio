import { HookFunction } from "@/lib/types";

const useSSRHydration: HookFunction = (DOM) => {
    if (typeof window === "undefined") {
        return { isDOM: null };
    }

    const isDOM = DOM || document.body;


    return { isDOM };
};

export { useSSRHydration };
