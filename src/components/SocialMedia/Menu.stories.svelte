<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Menu from './Menu.svelte';

	const { Story } = defineMeta({
		title: 'Components/SocialMedia/Menu',
		component: Menu,
		tags: ['autodocs'],
		parameters: {
			backgrounds: { default: 'dark' }
		}
	});
</script>

<Story name="Default" />