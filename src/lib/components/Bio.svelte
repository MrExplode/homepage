<script lang="ts">
    import avatar from '$lib/images/avatar.png'

    import TypeWriter from '@/TypeWriter.svelte'

    const descriptions = ['software developer', 'devops engineer', 'drummer', 'light designer']
</script>

<img src={avatar} alt="avatar" class="h-32 w-32 rounded-full" />
<div class="flex flex-col items-center gap-4 md:items-start">
    <h1 class="text-4xl font-bold tracking-tight">SunStorm</h1>
    <p class="text-muted-foreground">
        21 year old <TypeWriter list={descriptions} />
    </p>
</div>
