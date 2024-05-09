<script lang="ts">
    import type { Tech } from '$lib/tech'
    import { cn } from '@/utils'

    export let t: Tech
</script>

<div class="flex items-center justify-center">
    <img src={t.icon} alt="" class={cn('m-2 w-14', t.class)} />
</div>
