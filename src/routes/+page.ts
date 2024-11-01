import previousShows from "$data/previous-shows-trimmed.json";
import upcomingShows from "$data/upcoming-shows.json";

export const prerender = true;

export const load = async () => {
	return { upcomingShows, previousShows };
};
