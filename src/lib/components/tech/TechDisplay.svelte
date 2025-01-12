<script lang="ts">
    import { cn } from '@/utils'
    import { tech, type Tech } from '$lib/tech'
    import TechWidget from '@/tech/TechWidget.svelte'

    let { overflow, masking, animation } = $props()

    // grouping the tech list into columns
    const dummy = [...tech]
    const colNum = 5
    const colCount = Math.ceil(dummy.length / colNum)
    const cols: Tech[][] = []
    while (dummy.length) {
        cols.push(dummy.splice(0, colCount))
    }
</script>

<div
    class={cn(
        'mx-auto flex max-h-full gap-4',
        overflow && 'overflow-hidden',
        masking &&
            '[mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'
    )}
>
    {#each cols as col, i}
        <div class="group">
            <!-- the column content -->
            <div
                class={cn(
                    'group-hover:[animation-play-state:_paused]',
                    animation &&
                        (i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll')
                )}
            >
                {#each col as t}
                    <TechWidget {t} class="m-2 w-14" />
                {/each}
            </div>
            <!-- A duplicate of the column content for animation -->
            <div
                aria-hidden="true"
                class={cn(
                    'group-hover:[animation-play-state:_paused]',
                    animation &&
                        (i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll')
                )}
            >
                {#each col as t}
                    <TechWidget {t} class="m-2 w-14" />
                {/each}
            </div>
        </div>
    {/each}
</div>
