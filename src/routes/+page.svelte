<script lang="ts">
    import Bio from '@/Bio.svelte'
    import TechDisplay from '@/TechDisplay.svelte'

    import Lenis from 'lenis'
    import Snap from 'lenis/snap'

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
</div>
<div bind:this={projects} class="container flex h-screen w-screen flex-col justify-center">
    <h1>Hello</h1>
</div>
