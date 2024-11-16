<script lang="ts">
    import ThemeSwitch from '@/ThemeSwitch.svelte'
    import '../app.css'
    import 'lenis/dist/lenis.css'

    let { children } = $props()
</script>

<svelte:head>
    <title>SunStorm</title>
</svelte:head>

<ThemeSwitch />
{@render children?.()}
