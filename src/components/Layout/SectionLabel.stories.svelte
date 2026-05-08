<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SectionLabel from './SectionLabel.svelte';

	const { Story } = defineMeta({
		title: 'Components/Layout/SectionLabel',
		component: SectionLabel,
		tags: ['autodocs'],
		argTypes: {
			title: { control: 'text' },
			description: { control: 'text' }
		}
	});
</script>

<Story name="Title Only" args={{ title: 'Previous Events' }} />

<Story
	name="With Description"
	args={{
		title: 'Previous Events',
		description: "You can usually catch me grooving alongside some of the coolest DJs in and around the 'Mittelfranken' region."
	}}
/>