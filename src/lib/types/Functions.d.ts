import { ContactErrors } from "./Form";

export type SidebarFunction = (sidebarId: string,
    menuBtnId: string) => void


export type HookFunction = (DOM: HTMLElement, ...params: unknown[]) => void;

export type Sections = string[]

export type Components = Function[]

export type HandlerSubmit = (event: Event) => Promise<void>

export type ContactHookFunction = (DOM: HTMLElement) => { errors: ContactErrors, handleSubmit: (event: Event) => Promise<void>, requestAnimation: () => void };

export type ProjectHookFunction = (project: Partial<Project>) => { projectList: string | undefined }

export type ShowContact = (DOM: HTMLElement) => { handleShowContact: Function };

export type HydrationFunction = (DOM: HTMLElement) => { isDOM: HTMLElement | null };