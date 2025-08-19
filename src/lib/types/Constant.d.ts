
export type Details = {
    title: string,
    image: string,
    desc: string
}

export type Link = {
    name: string,
    icon: string,
    link: `https://${string}`
}

export type NavLink = {
    name: string,
    link: `#${string}`
}

export type Project = {
    title: string,
    image: string,
    stacks: string[],
    url: `https://${string}`,
    desc: string,
    fullStack: boolean,
    designed: boolean
}

export type Tab = {
    id: string;
    label: string;
    filter?: boolean | undefined;
}

export type TechStack = {
    title: string,
    image: string,
    backend: boolean
}

export type TestimonialType = {
    name: string,
    school: string,
    image: string,
    rating: number,
    message: string
}

export type Timeline = {
    year: number,
    bg?: string,
    transition: string,
    desc: string[]
}