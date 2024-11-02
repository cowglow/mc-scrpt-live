import type { EventShow, PaginatedShows } from "../app";

type PaginateContent = [content: EventShow[], index: number, max: number];

export function paginateContent([
	content,
	currentPage,
	maxPerPage
]: PaginateContent): PaginatedShows {
	const totalPages = Math.floor(content.length / maxPerPage);
	const startIndex = (currentPage - 1) * maxPerPage;
	const endIndex = startIndex + maxPerPage;

	const previousPage = currentPage > 1;
	const nextPage = currentPage < totalPages || totalPages === 1;

	const paginatedItems = content.slice(startIndex, endIndex);
	return {
		currentPage,
		previousPage,
		nextPage,
		shows: paginatedItems
	};
}
