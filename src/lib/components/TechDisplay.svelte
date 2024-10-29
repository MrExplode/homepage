<script lang="ts">
    import { onMount } from 'svelte'

    import { cn } from '@/utils'
    import { tech, type Tech } from '$lib/tech'
    import TechWidget from '@/TechWidget.svelte'

    interface Props {
        class: string | undefined;
    }

    let { class: className }: Props = $props();
    

    const dummy = [...tech]
    shuffleArray(dummy)
    const colNum = 5
    const colCount = Math.ceil(dummy.length / colNum)
    const cols: Tech[][] = []
    while (dummy.length) {
        cols.push(dummy.splice(0, colCount))
    }

    let freezeStates = $state(['']);
    

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

<div
    class={cn(
        'flex gap-4 overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]',
        className
    )}
>
    {#each cols as col, i}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            onmouseenter={() => mouse(i, '[animation-play-state:_paused]')}
            onmouseleave={() => mouse(i, '')}
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
                aria-hidden="true"
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
