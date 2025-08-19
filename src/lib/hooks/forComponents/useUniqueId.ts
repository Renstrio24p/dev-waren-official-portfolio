
let pillarCounter = 0;

type UniqueId = () => { dataId: number };

const useUniqueId: UniqueId = () => {
    pillarCounter++;
    const dataId = pillarCounter;

    return { dataId };
};

export { useUniqueId };