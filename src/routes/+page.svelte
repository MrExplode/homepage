<script lang="ts">
    import Lenis from 'lenis'
    import Snap from 'lenis/snap'

    import { Button } from '@/ui/button'
    import Bio from '@/Bio.svelte'
    import TechDisplay from '@/TechDisplay.svelte'
    import ArrowDown from 'lucide-svelte/icons/arrow-down'

    const lenis = new Lenis({ autoRaf: true })
    const snap = new Snap(lenis, {})

    let index: HTMLElement | null = null
    let projects: HTMLElement | null = null

    $effect(() => {
        snap.addElement(index!)
        snap.addElement(projects!)
    })
</script>

<div bind:this={index} class="container flex h-screen w-screen flex-col justify-center">
    <div class="flex max-h-[70%] flex-col items-center gap-8 md:flex-row">
        <Bio />
        <TechDisplay class="ml-auto max-h-full" />
    </div>
    <Button
        variant="outline"
        size="icon"
        class="mx-auto translate-y-20 rounded-full shadow-md"
        onclick={() => lenis.scrollTo(projects!)}
    >
        <ArrowDown />
    </Button>
</div>
<div bind:this={projects} class="container flex h-screen w-screen flex-col justify-center">
    <h1>Projects</h1>
</div>
