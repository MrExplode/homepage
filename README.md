# infinity icon scroller

Animation config is in [tailwind.config.js](./tailwind.config.js), from line 85.  
The overflow is hidden with `overflow: hidden;` ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)) and styled with a `mask-image` magic. ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image))  

The [`TechDisplay`](./src/lib/components/tech/TechDisplay.svelte) component contains the logic.