// store/contactStore.ts
import { createStore } from 'zustand/vanilla';

type ContactErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

type ContactState = {
    errors: ContactErrors;
    setError: (errors: ContactErrors) => void;
    clearErrors: () => void;
};

export const contactStore = createStore<ContactState>((set) => ({
    errors: {},
    setError: (errors) => set({ errors }),
    clearErrors: () => set({ errors: {} }),
}));
