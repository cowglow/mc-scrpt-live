import type { PageLoad } from './$types';
import { MAX_EVENT_ITEMS } from '$lib/constants';
import { getPreviousDates, getUpcomingDates } from '$lib/date-filters';
import createShowCollection from '$lib/create-show-collection';
import eventData from '$data/event-list.json';

export const prerender = true;

export const load: PageLoad = async () => {
	const shows = createShowCollection(eventData);
	const upcomingEvents = getUpcomingDates(shows).slice(0, MAX_EVENT_ITEMS);
	const previousEvents = getPreviousDates(shows).slice(0, MAX_EVENT_ITEMS);

	return {
		shows: [...upcomingEvents, ...previousEvents],
		total: eventData.length
	};
};
