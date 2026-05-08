<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import NavBar from "./NavBar.svelte";

	const { Story } = defineMeta({
		title: "Components/Navigation/NavBar",
		component: NavBar,
		tags: ["autodocs"]
	});
</script>

<Story name="Default" />
