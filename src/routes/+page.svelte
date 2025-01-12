<script lang="ts">
    import TechDisplay from '@/tech/TechDisplay.svelte'
    import { Label } from '@/ui/label'
    import { Switch } from '@/ui/switch'

    let overflow = $state(true)
    let masking = $state(true)
    let animation = $state(true)
</script>

<div class="container flex h-screen w-screen flex-col justify-center">
    <div class="flex max-h-[70%] flex-col items-center gap-8 md:flex-row">
        <div class="mr-10 flex flex-col gap-4">
            <div class="flex gap-4">
                <Switch id="overflow" bind:checked={overflow} />
                <Label for="overflow">Overflow hidden</Label>
            </div>
            <div class="flex gap-4">
                <Switch id="masking" bind:checked={masking} />
                <Label for="masking">Fade masking</Label>
            </div>
            <div class="flex gap-4">
                <Switch id="animation" bind:checked={animation} />
                <Label for="animation">Animation</Label>
            </div>
        </div>
        <TechDisplay {overflow} {masking} {animation} />
    </div>
</div>
