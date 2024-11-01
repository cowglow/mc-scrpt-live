import type { EventShow, PaginatedShows } from "../app";

type PaginateContent = [content: EventShow[], index: number, max: number];

export function paginateContent([content, currentPage, maxPages]: PaginateContent): PaginatedShows {
	const startIndex = (currentPage - 1) * maxPages;
	const endIndex = startIndex + maxPages;

	const paginatedItems = content.slice(startIndex, endIndex);

	return {
		currentPage,
		previousPage: currentPage > 1,
		nextPage: currentPage - 1 < maxPages,
		shows: paginatedItems
	};
}
