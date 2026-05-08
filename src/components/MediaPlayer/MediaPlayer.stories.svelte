<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import MediaPlayer from "./MediaPlayer.svelte";

	const { Story } = defineMeta({
		title: "Components/MediaPlayer/MediaPlayer",
		component: MediaPlayer,
		tags: ["autodocs"]
	});
</script>

<Story name="Consent Required" />
