<script lang="ts">
    import avatar from '$lib/images/avatar.png'
    import github from '$lib/images/tech/github.svg'
    import githubWhite from '$lib/images/tech/github-white.svg'

    import TypeWriter from '@/TypeWriter.svelte'
    import { Button } from '@/ui/button'

    const descriptions = ['software developer', 'devops engineer', 'drummer', 'light designer']
</script>

<img src={avatar} alt="avatar" class="h-32 w-32 rounded-full" />
<div class="flex flex-col items-center gap-4 md:items-start">
    <h1 class="text-4xl font-bold tracking-tight">SunStorm</h1>
    <p class="text-muted-foreground">
        21 year old <TypeWriter list={descriptions} />
    </p>
    <div class="flex w-full justify-center border-t pt-2 md:justify-start">
        <Button href="https://github.com/MrExplode" target="_blank" variant="ghost" size="icon">
            <img src={githubWhite} alt="github logo" class="hidden h-5 w-5 dark:block" />
            <img src={github} alt="github logo" class="block h-5 w-5 dark:hidden" />
        </Button>
    </div>
</div>
