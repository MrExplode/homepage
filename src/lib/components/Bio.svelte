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
        23 year old <TypeWriter list={descriptions} />
    </p>
    <div class="flex w-full justify-center border-t pt-2 md:justify-start">
        <Button href="https://github.com/MrExplode" target="_blank" variant="ghost" size="icon">
            <img src={githubWhite} alt="github logo" class="hidden h-5 w-5 dark:block" />
            <img src={github} alt="github logo" class="block h-5 w-5 dark:hidden" />
        </Button>
        <Button
            href="https://bsky.app/profile/sunstorm.rocks"
            target="_blank"
            variant="ghost"
            size="icon"
            class="text-primary-foreground"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 568 501"
                class="size-5! text-primary"
            >
                <title>Bluesky butterfly logo</title>
                <path
                    fill="currentColor"
                    d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"
                ></path>
            </svg>
        </Button>
    </div>
</div>
