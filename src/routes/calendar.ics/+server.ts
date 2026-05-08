import upcomingShows from "$data/upcoming-shows.json";
import previousShows from "$data/previous-shows.json";

export const prerender = true;

function formatDate(date: Date): string {
	return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function buildEvent(show: { name: string; date: string; venue: string; link: string }): string {
	const start = new Date(show.date);
	const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
	const uid = `${formatDate(start)}@mc.scrpt.live`;

	const lines = [
		"BEGIN:VEVENT",
		`UID:${uid}`,
		`DTSTAMP:${formatDate(new Date())}`,
		`DTSTART:${formatDate(start)}`,
		`DTEND:${formatDate(end)}`,
		`SUMMARY:MC SCRPT @ ${show.name}`,
		`LOCATION:${show.venue}`,
	];

	if (show.link) lines.push(`URL:${show.link}`);

	lines.push("END:VEVENT");
	return lines.join("\r\n");
}

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
		...allShows.map(buildEvent),
		"END:VCALENDAR",
	].join("\r\n");

	return new Response(calendar, {
		headers: {
			"Content-Type": "text/calendar; charset=utf-8",
			"Content-Disposition": 'attachment; filename="mc-scrpt-events.ics"',
		},
	});
}