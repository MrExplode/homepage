<script lang="ts">
    import type { Tech } from '$lib/tech'

    import * as HoverCard from '@/ui/hover-card'
    import { Portal } from 'bits-ui'

    interface Props {
        t: Tech
        class: string
    }

    let { t, class: className }: Props = $props()
</script>

<HoverCard.Root>
    <HoverCard.Trigger>
        <div class="flex items-center justify-center">
            <!-- dumb string concat instead of cn, because prerendering breaks cn (in my experience) -->
            <img src={t.icon} alt={t.name} class={t.class + ' ' + className} />
        </div>
    </HoverCard.Trigger>
    <Portal>
        <HoverCard.Content>
            <div class="flex items-center gap-4">
                <img src={t.icon} alt="" class="h-10" />
                <div>
                    <h3 class="font-bold tracking-tight">{t.name}</h3>
                    {#if t.category}
                        <p class="text-muted-foreground text-sm">{t.category}</p>
                    {/if}
                </div>
            </div>
        </HoverCard.Content>
    </Portal>
</HoverCard.Root>
