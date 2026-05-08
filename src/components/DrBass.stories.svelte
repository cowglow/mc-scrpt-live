<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DrBass from './DrBass.svelte';

	const { Story } = defineMeta({
		title: 'Components/DrBass',
		component: DrBass,
		tags: ['autodocs'],
		parameters: {
			backgrounds: { default: 'dark' }
		}
	});
</script>

<Story name="Default" />