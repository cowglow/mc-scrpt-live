import type { PageLoad } from './$types';
import { events } from '$data/event-list.json';
import paginateContent from '$lib/paginate-content';

export const prerender = true;
export const load: PageLoad = async (meta) => {
	const showData = paginateContent({ content: events, index: 1, max: 6 });
	return { ...meta, data: showData };
};
