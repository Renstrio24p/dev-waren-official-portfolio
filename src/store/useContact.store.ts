// store/contactStore.ts
type ContactState = {
    visible: boolean;
    toggle: () => void;
    setVisible: (value: boolean) => void;
};

// Minimal Zustand-like store for vanilla TS
export const createStore = <T extends object>(initialState: T) => {
    let state = { ...initialState };
    const listeners: Array<(state: T) => void> = [];

    const setState = (partial: Partial<T>) => {
        state = { ...state, ...partial };
        listeners.forEach((listener) => listener(state));
    };

    const getState = () => state;

    const subscribe = (listener: (state: T) => void) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) listeners.splice(index, 1);
        };
    };

    return { setState, getState, subscribe };
};

export const contactStore = createStore<ContactState>({
    visible: false,
    toggle: () => {
        contactStore.setState({ visible: !contactStore.getState().visible });
    },
    setVisible: (value) => {
        contactStore.setState({ visible: value });
    },
});
