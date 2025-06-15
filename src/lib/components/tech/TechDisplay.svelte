<script lang="ts">
    import { cn } from '@/utils'
    import { tech, type Tech } from '$lib/tech'
    import TechWidget from '@/tech/TechWidget.svelte'

    interface Props {
        class: string | undefined
    }

    let { class: className }: Props = $props()

    // imitating Java's hashCode for Strings, as a quick way for deterministic shuffling
    const hash = (t: Tech): number =>
        [...t.name].reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)

    const dummy = [...tech].sort((a, b) => hash(a) - hash(b))
    const colNum = 5
    const colCount = Math.ceil(dummy.length / colNum)
    const cols: Tech[][] = []
    while (dummy.length) {
        cols.push(dummy.splice(0, colCount))
    }
</script>

<div
    class={cn(
        'flex gap-4 overflow-hidden mask-[linear-gradient(to_top,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]',
        className
    )}
>
    {#each cols as col, i}
        <div class="group">
            <div
                class={cn(
                    'group-hover:paused',
                    i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'
                )}
            >
                {#each col as t}
                    <TechWidget {t} class="m-2 w-14" />
                {/each}
            </div>
            <div
                aria-hidden="true"
                class={cn(
                    'group-hover:paused',
                    i % 2 ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'
                )}
            >
                {#each col as t}
                    <TechWidget {t} class="m-2 w-14" />
                {/each}
            </div>
        </div>
    {/each}
</div>
