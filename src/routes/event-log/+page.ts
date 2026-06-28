import previousShows from "$data/previous-shows.json";

export const prerender = true;

export function load() {
	return { shows: previousShows };
}
