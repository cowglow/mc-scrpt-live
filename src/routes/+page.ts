import type { PageLoad } from './$types';
import previousShows from '$data/previous-shows-trimmed.json';
import upcomingShows from '$data/upcoming-shows.json';

export const prerender = true;

export const load: PageLoad = async () => {
	return { upcomingShows, previousShows };
};
