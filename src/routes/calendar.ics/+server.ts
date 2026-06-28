import upcomingShows from "$data/upcoming-shows.json";
import previousShows from "$data/previous-shows-trimmed.json";
import type { EventShow } from "../../app";
import { createICSContent } from "$lib/create-ics-content";

export const prerender = true;

export function GET() {
	const allShows = [...upcomingShows, ...previousShows];

	const calendar = allShows.map((show) => ({
		...show,
		date: new Date(show.date)
	})) satisfies EventShow[];

	return new Response(createICSContent(calendar), {
		headers: {
			"Content-Type": "text/calendar; charset=utf-8"
		}
	});
}
