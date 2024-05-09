<script lang="ts">
    import avatar from '$lib/images/avatar.png'
</script>

<div class="container flex h-screen w-screen flex-col justify-center">
    <div class="flex items-center gap-8">
        <img src={avatar} alt="avatar" class="h-32 w-32 rounded-full" />
        <div class="flex flex-col gap-4">
            <h1 class="text-4xl font-bold tracking-tight">SunStorm</h1>
            <p class="text-muted-foreground">
                21 year old <span class="font-bold">software developer</span>
            </p>
        </div>
    </div>
</div>
