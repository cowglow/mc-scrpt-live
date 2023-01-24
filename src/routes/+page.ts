import type { PageLoad, PageLoadEvent } from './$types';
import dataLoader from '$lib/data-loader';
import { JSON_PATH, MAX_EVENT_ITEMS } from '$lib/constants';
import { getPreviousDates, getUpcomingDates } from '$lib/date-filters';
import createShowCollection from '$lib/create-show-collection';

export const prerender = true;

export const load: PageLoad = async (meta: PageLoadEvent) => {
	const eventData = await dataLoader(JSON_PATH, meta.fetch);
	const { events } = eventData;
	const shows = createShowCollection(events);
	const upcomingEvents = getUpcomingDates(shows).slice(0, MAX_EVENT_ITEMS);
	const previousEvents = getPreviousDates(shows).slice(0, MAX_EVENT_ITEMS);
	return {
		...meta,
		data: [...upcomingEvents, ...previousEvents],
		total: events.length
	};
};
