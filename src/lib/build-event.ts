import { formatDate } from "$lib/format-date";
import type { EventShow } from "../app";

export function buildEvent(show: EventShow): string {
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
		`LOCATION:${show.venue}`
	];

	if (show.link) lines.push(`URL:${show.link}`);

	lines.push("END:VEVENT");
	return lines.join("\r\n");
}
