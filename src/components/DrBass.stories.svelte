<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DrBass from './DrBass.svelte';

	const { Story } = defineMeta({
		title: 'Components/DrBass',
		component: DrBass,
		tags: ['autodocs']
	});
</script>

<Story name="Default"  />