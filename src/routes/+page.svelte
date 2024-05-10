<script lang="ts">
    import avatar from '$lib/images/avatar.png'
    import Bio from '@/Bio.svelte'

    import TechDisplay from '@/TechDisplay.svelte'
</script>

<div class="container flex h-screen w-screen flex-col justify-center">
    <div class="flex max-h-[70%] items-center gap-8">
        <Bio />
        <TechDisplay class="ml-auto max-h-full" />
    </div>
</div>
