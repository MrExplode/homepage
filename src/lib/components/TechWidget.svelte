<script lang="ts">
    import type { Tech } from '$lib/tech'
    import { cn } from '@/utils'

    import * as HoverCard from '@/ui/hover-card'

    interface Props {
        t: Tech;
    }

    let { t }: Props = $props();
</script>

<HoverCard.Root>
    <HoverCard.Trigger>
        <div class="flex items-center justify-center">
            <img src={t.icon} alt="" class={cn('m-2 w-14', t.class)} />
        </div>
    </HoverCard.Trigger>
    <HoverCard.Content>
        <div class="flex items-center gap-4">
            <img src={t.icon} alt="" class="h-10" />
            <div>
                <h3 class="font-bold tracking-tight">{t.name}</h3>
                {#if t.category}
                    <p class="text-sm text-muted-foreground">{t.category}</p>
                {/if}
            </div>
        </div>
    </HoverCard.Content>
</HoverCard.Root>
