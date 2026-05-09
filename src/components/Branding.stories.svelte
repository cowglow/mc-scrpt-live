<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Branding from "./Branding.svelte";

	const { Story } = defineMeta({
		title: "Components/Branding",
		component: Branding,
		tags: ["autodocs"]
	});
</script>

<Story name="Default">
	{#snippet template(args)}
		<div style="font-size: clamp(1.4rem, 50vw, 10rem); color: white; display: flex; align-items: center;">
			<Branding {...args} />
		</div>
	{/snippet}
</Story>