import type { EventShow } from "../types";

export default function getPreviousDates(events: EventShow[]): EventShow[] {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		const eventDate = Date.parse(date);
		return eventDate < currentDate;
	});
}
