<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LogEntry from './LogEntry.svelte';

	const { Story } = defineMeta({
		title: 'Components/EventLog/LogEntry',
		component: LogEntry,
		tags: ['autodocs'],
		argTypes: {
			name: { control: 'text' },
			date: { control: 'date' },
			venue: { control: 'text' },
			link: { control: 'text' }
		}
	});
</script>

<Story
	name="Known Venue"
	args={{
		name: 'Sound Journey Vol. 3',
		date: new Date('2026-06-15T22:00:00'),
		venue: 'Z-Bau',
		link: 'https://facebook.com/events/123456789'
	}}
/>

<Story
	name="Unknown Venue"
	args={{
		name: 'Open Air Session',
		date: new Date('2026-07-20T20:00:00'),
		venue: 'Stadtpark Nürnberg',
		link: 'https://facebook.com/events/987654321'
	}}
/>

<Story
	name="No Link"
	args={{
		name: 'Club Night',
		date: new Date('2026-08-10T23:00:00'),
		venue: 'Kofferfabrik',
		link: ''
	}}
/>