<script lang="ts">
    import { ModeWatcher, toggleMode } from 'mode-watcher'
    import Sun from '@lucide/svelte/icons/sun'
    import Moon from '@lucide/svelte/icons/moon'

    import { Button } from '@/ui/button'
</script>

<ModeWatcher />
<Button onclick={toggleMode} variant="outline" size="icon" class="absolute right-0 m-2">
    <Sun
        class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
    />
    <Moon
        class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">Toggle theme</span>
</Button>
