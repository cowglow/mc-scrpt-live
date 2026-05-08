<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Branding from './Branding.svelte';

	const { Story } = defineMeta({
		title: 'Components/Branding',
		component: Branding,
		tags: ['autodocs'],
		parameters: {
			backgrounds: { default: 'dark' }
		}
	});
</script>

<Story name="Default" />