type Tab = {
    id: string;
    label: string;
    filter?: boolean | undefined;
}

const tabs: Tab[] = [
    { id: 'allproject', label: 'All', filter: undefined },
    { id: 'fullstack', label: 'Full Stack', filter: true },
    { id: 'designed', label: 'Designed', filter: false },
];

export { tabs };