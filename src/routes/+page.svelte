<script lang="ts">
    import avatar from '$lib/images/avatar.png'
    import { tech, type Tech } from '$lib/tech'

    import TechWidget from '@/TechWidget.svelte'
    import TypeWriter from '@/TypeWriter.svelte'
    import { cn } from '@/utils'
    import { onMount } from 'svelte'

    const dummy = [...tech]
    shuffleArray(dummy)
    const colNum = 5
    const colCount = Math.ceil(dummy.length / colNum)
    const cols: Tech[][] = []
    while (dummy.length) {
        cols.push(dummy.splice(0, colCount))
    }

    $: freezeStates = ['']
    $: {
        console.log(freezeStates)
    }

    function shuffleArray(array: Array<unknown>) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }

    const mouse = (i: number, s: string) => {
        freezeStates[i] = s
        freezeStates = [...freezeStates]
    }

    onMount(() => {
        for (let i = 0; i < colNum; i++) freezeStates.push('')
    })
</script>

<div class="container flex h-screen w-screen flex-col justify-center">
    <div class="flex max-h-[70%] items-center gap-8">
        <img src={avatar} alt="avatar" class="h-32 w-32 rounded-full" />
        <div class="flex flex-col gap-4">
            <h1 class="text-4xl font-bold tracking-tight">SunStorm</h1>
            <p class="text-muted-foreground">
                21 year old <TypeWriter
                    list={['software developer', 'devops engineer', 'drummer', 'light designer']}
                />
            </p>
        </div>
        <div
            class="ml-auto flex max-h-full gap-4 overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
            {#each cols as col, i}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    on:mouseenter={() => mouse(i, '[animation-play-state:_paused]')}
                    on:mouseleave={() => mouse(i, '')}
                >
                    <div
                        class={cn(
                            freezeStates[i],
                            i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'
                        )}
                    >
                        {#each col as t}
                            <TechWidget {t} />
                        {/each}
                    </div>
                    <div
                        class={cn(
                            freezeStates[i],
                            i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'
                        )}
                    >
                        {#each col as t}
                            <TechWidget {t} />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
