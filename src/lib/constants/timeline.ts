
type Timeline = {
    year: number,
    bg?: string,
    transition: string,
    desc: string[]
}

const timeline: Timeline[] = [
    {
        year: 2020,
        bg: "bg-green-500 ",
        transition: "animate__fadeInLeft animate__delay-1s",
        desc: [
            `Started working as a freelance developer at CoderTubes Inc.`,
            `I'm part of the team at CoderTubes Inc. where I apply my skills to create engaging, user-friendly
            solutions that meet both business goals and user needs.`
        ]
    },
    {
        year: 2021,
        bg: "bg-yellow-500",
        transition: "animate__fadeInRight animate__delay-2s",
        desc: [
            `Joined my first full-time developer role at Daily Universe Inc.`,
        ]
    },
    {
        year: 2022,
        bg: "bg-red-500 ",
        transition: "animate__fadeInLeft animate__delay-3s",
        desc: [
            `Joined my first project based company for Daily Work`,
        ]
    },
    {
        year: 2023,
        bg: "bg-blue-500 ",
        transition: "animate__fadeInRight animate__delay-4s",
        desc: [
            `Joined project based company remotely work at Github`,
        ]
    },
    {
        year: 2024,
        bg: "bg-green-300",
        transition: "animate__fadeInUp animate__delay-5s",
        desc: [
            `Joined as a Web Master at Magic 89.9 FM Radio Station - Present`,
        ]
    }
]

export { timeline }