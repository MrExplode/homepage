import {
    android,
    cef,
    cloudFlare,
    csharp,
    css,
    debian,
    docker,
    go,
    gradle,
    grafana,
    influxdb,
    java,
    junit,
    kotlin,
    linux,
    mariadb,
    maven,
    minio,
    mongodb,
    mysql,
    nginx,
    nodejs,
    opengl,
    pnpm,
    portainer,
    prisma,
    python,
    rabbitmq,
    redis,
    rust,
    svelte,
    tailwind,
    tauri,
    typescript,
    vite,
    type Tech
} from '$lib/tech'

export interface Project {
    name: string
    url?: string
    time: string
    description: string
    tech?: Tech[]
}

export const projects: Project[] = [
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description:
            'Audio-Visual automation and synchronisation app. Started out as a networked desktop timecode generator, ' +
            'now features audio playback, LTC timecode, scheduled OSC messages, and a neat web UI for remote control. ' +
            "It's regularly used in production, thousands of people attended events produced with this app.",
        tech: [java, typescript, svelte, gradle, pnpm]
    },
    {
        name: 'CornExpert',
        time: '2024',
        description:
            'A RAG-based LLM assistant, with focus on dynamic dataset loading. Fully featured user management, authentication via OAuth2. ' +
            'Started as an agricultural AI assistant with data from publications, the goals quickly shifted to a general solution, capable of generating and loading ' +
            'context from PDFs.',
        tech: [typescript, python, go, svelte, prisma, rabbitmq, mariadb, mongodb, minio]
    },
    {
        name: 'Labyrinth',
        url: 'https://github.com/MrExplode/Labyrinth',
        time: '2023',
        description:
            'JavaFX based labyrinth escape game, featuring a level editor, level generation, leaderboard and language selection. ' +
            'This was a university assignment, but I wanted to take it to another level. 100% JavaDoc and 70% unit test coverage are accomplished.',
        tech: [java, maven, junit, css]
    },
    {
        name: 'this page',
        url: 'https://github.com/MrExplode/homepage',
        time: '2024 - present',
        description:
            "This is my current homepage. For years my landing page was a single html file, but as I gained knowledge in frontend, I decided it's time for a shiny new page to introduce myself.",
        tech: [typescript, svelte, tailwind, pnpm, cloudFlare]
    },
    {
        name: 'homelab',
        time: '2020 - present',
        description:
            'With the power of Docker, running my fleet of more than 30 containers consisting of websites, media management, networking, storage, databases and more, spanning across two servers.',
        tech: [debian, docker, portainer, nginx, grafana, influxdb, mariadb, cloudFlare]
    },
    {
        name: 'brainmill',
        time: '2024 - present',
        description:
            'A fun project exploring the possibilities of end-to-end automatization of short form content creation.',
        tech: [typescript, nodejs, svelte, prisma, python, redis, docker]
    },
    {
        name: 'VrLauncher',
        time: '2022 - 2023',
        description:
            'App launcher & management suite for the Meta Quest 2 headset, with backend services for detailed analytics & data aggregation, and auto-updating.',
        tech: [csharp, go, java, mysql, grafana, android]
    },
    {
        name: 'Tear',
        time: '2024 - present',
        description:
            'The successor to VrLauncher, entirely redesigned with the experiences and knowledge from the previous iteration of design goals and decisions.',
        tech: [typescript, rust, kotlin, tauri, svelte, android]
    },
    {
        name: 'MineSide',
        time: '2020 - 2021',
        description:
            'A wide variety of desktop & server side applications at the 2nd largest Hungarian Minecraft network.',
        tech: [java, opengl, cef, mysql, redis, linux]
    }
]
