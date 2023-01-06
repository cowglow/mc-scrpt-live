import type { PageLoad, PageLoadEvent } from './$types';
import dataLoader from '$stores/data-loader';
import { JSON_PATH, MAX_EVENT_ITEMS } from '$lib/constants';

export const prerender = true;

export const load: PageLoad = async (meta: PageLoadEvent) => {
	const eventData = await dataLoader(JSON_PATH, meta.fetch);
	return {
		...meta,
		data: Array(...eventData.events).slice(0, MAX_EVENT_ITEMS),
		total: eventData.events.length
	};
};
