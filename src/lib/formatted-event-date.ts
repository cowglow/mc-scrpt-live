import { SHOW_TIMEZONE } from "$lib/constants";
import { getShowYear } from "$lib/show-year";

export default function formattedEventDate(
	date: Date,
	now: Date = new Date(),
	locales: Intl.LocalesArgument = navigator.languages as string[]
) {
	const isCurrentYear = getShowYear(date) === getShowYear(now);

	return date.toLocaleDateString(locales, {
		timeZone: SHOW_TIMEZONE,
		year: isCurrentYear ? undefined : "numeric",
		month: "short",
		day: "2-digit"
	});
}
