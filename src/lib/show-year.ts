import { SHOW_TIMEZONE } from "$lib/constants";

export function getShowYear(date: Date): number {
	return Number(date.toLocaleString("en-US", { timeZone: SHOW_TIMEZONE, year: "numeric" }));
}
