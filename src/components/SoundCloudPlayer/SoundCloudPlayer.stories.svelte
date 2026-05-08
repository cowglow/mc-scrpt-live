<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import SoundCloudPlayer from "./SoundCloudPlayer.svelte";

	const { Story } = defineMeta({
		title: "Components/SoundCloudPlayer/SoundCloudPlayer",
		component: SoundCloudPlayer,
		tags: ["autodocs"]
	});
</script>

<Story name="Consent Required" />
