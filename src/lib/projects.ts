import type { Tech } from '$lib/tech'
import java from '$lib/images/tech/java.svg'
import gradle from '$lib/images/tech/gradle.svg'
import svelte from '$lib/images/tech/svelte.svg'
import typescript from '$lib/images/tech/typescript.svg'
import pnpm from '$lib/images/tech/pnpm.svg'

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
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    },
    {
        name: 'ShowManager',
        url: 'https://github.com/MrExplode/ShowManager',
        time: '2020 - present',
        description: 'Audio-Visual automation software written in java.',
        tech: [
            { name: 'Java', icon: java, category: 'language' },
            { name: 'Gradle', icon: gradle, category: 'build system' },
            { name: 'Svelte', icon: svelte, category: 'framework' },
            { name: 'TypeScript', icon: typescript, category: 'language' },
            { name: 'pnpm', icon: pnpm, category: 'package manager' }
        ]
    }
]
