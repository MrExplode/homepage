<script lang="ts">
    import ThemeSwitch from '@/ThemeSwitch.svelte'
    import '../app.css'
    import 'lenis/dist/lenis.css'

    let { children } = $props()

    const description =
        '23 year old undergraduate Full Stack Developer, DevOps enjoyer, occasionally drummer and light designer.'
    const icon = 'https://sunstorm.rocks/icon_256.png'
</script>

<svelte:head>
    <title>SunStorm</title>
    <link rel="icon" type="image/png" href="/icon_256.png" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#616161" />
    <meta name="googlebot" content="notranslate" />
    <link rel="canonical" href="https://sunstorm.rocks" />

    <meta property="org:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="SunStorm" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={icon} />

    <meta property="twitter:title" content="SunStorm" />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:image" content={icon} />
</svelte:head>

<ThemeSwitch />
{@render children?.()}
