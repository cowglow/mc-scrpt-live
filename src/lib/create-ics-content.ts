import { buildEvent } from "$lib/build-event";
import type { EventShow } from "../app";

export const ICAL_HEAD = [
	"BEGIN:VCALENDAR",
	"VERSION:2.0",
	"PRODID:-//mc.scrpt.live//EN",
	"CALSCALE:GREGORIAN",
	"METHOD:PUBLISH"
];
export const ICAL_TAIL = "END:VCALENDAR";

export function createICSContent(dates: EventShow[]) {
	return [...ICAL_HEAD, ...dates.map(buildEvent), ICAL_TAIL].join("\r\n");
}
