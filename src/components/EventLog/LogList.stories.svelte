<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LogList from './LogList.svelte';

	const sampleEvents = [
		{
			name: 'Sound Journey Vol. 3',
			date: new Date('2026-03-15T22:00:00'),
			venue: 'Z-Bau',
			link: 'https://facebook.com/events/123456789'
		},
		{
			name: 'Open Air Session',
			date: new Date('2026-02-20T20:00:00'),
			venue: 'Stadtpark Nürnberg',
			link: ''
		},
		{
			name: 'Club Night',
			date: new Date('2026-01-10T23:00:00'),
			venue: 'Kofferfabrik',
			link: 'https://facebook.com/events/111222333'
		}
	];

	const { Story } = defineMeta({
		title: 'Components/EventLog/LogList',
		component: LogList,
		tags: ['autodocs']
	});
</script>

<Story name="Multiple Events" args={{ data: sampleEvents }} />

<Story name="Empty" args={{ data: [] }} />