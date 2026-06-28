import upcomingShows from "$data/upcoming-shows.json";
import previousShows from "$data/previous-shows-trimmed.json";
import { buildEvent } from "$lib/build-event";

export const prerender = true;

export function GET() {
	const allShows = [...upcomingShows, ...previousShows];

	const calendar = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//MC SCRPT//mc.scrpt.live//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		"X-WR-CALNAME:MC SCRPT Live Events",
		"X-WR-TIMEZONE:Europe/Berlin",
		"REFRESH-INTERVAL;VALUE=DURATION:PT12H",
		"X-PUBLISHED-TTL:PT12H",
		...allShows.map(buildEvent),
		"END:VCALENDAR"
	].join("\r\n");

	return new Response(calendar, {
		headers: {
			"Content-Type": "text/calendar; charset=utf-8"
		}
	});
}