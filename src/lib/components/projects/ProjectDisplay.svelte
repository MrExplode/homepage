<script lang="ts">
    import { projects } from '$lib/projects'
    import Project from '@/projects/Project.svelte'
</script>

<div class="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
    {#each projects as p}
        <Project project={p} />
    {/each}
</div>
