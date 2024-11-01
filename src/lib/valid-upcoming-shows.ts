import type { EventShow } from "../app";

export function validUpcomingShows(shows: EventShow[], currentData: Date = new Date()) {
	return shows.some((show) => {
		const showEvent = new Date(show.date);
		return showEvent > currentData;
	});
}
