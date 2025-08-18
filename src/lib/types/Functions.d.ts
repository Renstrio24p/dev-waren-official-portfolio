
export type SidebarFunction = (sidebarId: string,
    menuBtnId: string) => void


export type ComponentFunction = (DOM: HTMLElement, ...params: unknown) => void