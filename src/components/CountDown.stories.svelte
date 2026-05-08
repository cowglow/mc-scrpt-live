<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CountDown from './CountDown.svelte';

	const { Story } = defineMeta({
		title: 'Components/CountDown',
		component: CountDown,
		tags: ['autodocs'],
		argTypes: {
			date: { control: 'date' }
		}
	});
</script>

<Story
	name="Upcoming Event"
	args={{
		date: new Date('2027-01-01T22:00:00')
	}}
/>

<Story
	name="Imminent"
	args={{
		date: new Date(Date.now() + 3 * 60 * 60 * 1000)
	}}
/>