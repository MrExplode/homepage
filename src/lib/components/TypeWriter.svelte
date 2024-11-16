<script lang="ts">
    import { onMount } from 'svelte'
    import { get, writable, type Writable } from 'svelte/store'

    interface Props {
        list: string[]
    }

    let { list }: Props = $props()

    let index = 0
    const content = writable(list[0])

    const write = async (str: Writable<string>, to: string) => {
        let i = 0
        while (get(str) != to) {
            str.set(get(str) + to.charAt(i++))
            await delay(60)
        }
    }

    const erase = async (str: Writable<string>) => {
        let len = get(str).length
        while (get(str)) {
            str.set(get(str).substring(0, len-- - 1))
            await delay(40)
        }
    }

    onMount(() => {
        const i = setInterval(async () => {
            index = ++index % list.length
            await erase(content)
            await write(content, list[index])
        }, 5000)

        return () => clearInterval(i)
    })

    const delay = async (ms: number) => {
        await new Promise((res) => setTimeout(() => res(null), ms))
    }
</script>

<span class="font-bold">{$content}</span>
