<script lang="ts">
    import ThemeSwitch from '@/ThemeSwitch.svelte'
    import '../app.css'
</script>

<svelte:head>
    <title>SunStorm</title>
</svelte:head>

<ThemeSwitch />
<slot />
