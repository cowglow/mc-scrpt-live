import type { PageLoad, PageLoadEvent } from './$types';
import dataLoader from '$stores/data-loader';
import { JSON_PATH, MAX_EVENT_ITEMS } from '$lib/constants';

export const prerender = true;

export const load: PageLoad = async (meta: PageLoadEvent) => {
	const eventData = await dataLoader(JSON_PATH, meta.fetch);
	const { events } = eventData;
	return {
		...meta,
		data: Array(...events).slice(0, MAX_EVENT_ITEMS),
		total: events.length
	};
};
