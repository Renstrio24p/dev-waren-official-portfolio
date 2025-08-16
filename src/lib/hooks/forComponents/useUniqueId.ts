
let pillarCounter = 0;
const useUniqueId = (): { dataId: number } => {
    pillarCounter++;
    const dataId = pillarCounter;

    return { dataId };
};

export { useUniqueId };