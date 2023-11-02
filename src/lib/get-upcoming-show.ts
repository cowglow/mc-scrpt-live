import type { EventShow } from '../app';

export function getUpcomingShow(shows: EventShow[], currentDateTime: Date = new Date()) {
	return shows.reduce((upcomingShows: EventShow[], show) => {
		const showEvent = new Date(show.date);
		if (showEvent > currentDateTime) {
			return [...upcomingShows, show];
		}
		return upcomingShows;
	}, []);
}
