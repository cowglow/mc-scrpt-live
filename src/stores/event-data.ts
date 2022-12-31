import { events } from '$lib/../data/event-list.json';
import { readable } from 'svelte/store';

const eventCollection: EventShow[] = events.map((event: EventData) => {
	const { eventName, eventDate, eventStartTime, eventLocation, eventLink } = event;
	const date = new Date(eventDate);
	const startTime = new Date(eventStartTime);
	return {
		name: eventName,
		date: new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			startTime.getHours(),
			startTime.getMinutes(),
			startTime.getSeconds(),
			startTime.getMilliseconds()
		),
		venue: eventLocation,
		link: eventLink
	};
});

export const EventDataStore = readable({
	...eventCollection,
	latest: () => {
		console.log('latest');
		return eventCollection.splice(0, 6);
	}
});
