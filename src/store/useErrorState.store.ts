// store/contactStore.ts
import { createStore } from 'zustand/vanilla';

type ContactState = {
    error: string;
    setError: (message: string) => void;
};

export const contactStore = createStore<ContactState>((set) => ({
    error: "",
    setError: (message) => set({ error: message }),
}));
