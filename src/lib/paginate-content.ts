import { getPreviousDates, getUpcomingDates } from '$lib/date-filters';

type PaginateContent = [content: EventShow[], index: number, max: number];

export default function ([content, index, max]: PaginateContent): PaginatedShows {
	const offset = max * (index - 1);
	const upcomingEvents = getUpcomingDates(content);
	const previousEvents = getPreviousDates(content).slice(offset, max * index);
	const paginatedItems = [...upcomingEvents, ...previousEvents];
	return {
		currentPage: index,
		previousPage: index - 1 > 0,
		nextPage: index - 1 < max,
		shows: paginatedItems
	};
}
