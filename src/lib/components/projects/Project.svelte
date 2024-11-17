<script lang="ts">
    import type { Project } from '$lib/projects'
    import { Button } from '@/ui/button'
    import { Separator } from '@/ui/separator'
    import github from '$lib/images/tech/github.svg'
    import TechWidget from '@/tech/TechWidget.svelte'
    // import github-white from '$lib/images/tech/github-white.svg'

    let { project }: { project: Project } = $props()
</script>

<div class="flex flex-col gap-2">
    <div class="flex items-start gap-1">
        <div class="mt-1 space-y-1">
            <p class="text-xl font-bold">{project.name}</p>
            <p class="text-sm text-muted-foreground">{project.time}</p>
        </div>
        {#if project.url}
            <Button href={project.url} target="_blank" variant="ghost" size="icon">
                <img src={github} alt="github icon" class="size-4" />
            </Button>
        {/if}
    </div>
    {#if project.tech}
        <div class="flex space-x-4">
            {#each project.tech as t}
                <TechWidget {t} class="h-6 max-w-7" />
            {/each}
        </div>
    {/if}
    <Separator />
    <p>{project.description}</p>
</div>
