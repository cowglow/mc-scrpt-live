import type { EventShow, PaginatedShows } from "../app";

type PaginateContent = [content: EventShow[], index: number, max: number, overlap?: number];

export function paginateContent([
	content,
	currentPage,
	maxPerPage
]: PaginateContent): PaginatedShows {
	const totalPages = Math.floor(content.length / maxPerPage);
	const startIndex = (currentPage - 1) * maxPerPage;
	const endIndex = startIndex + maxPerPage;

	const previousPage = currentPage > 1;
	const nextPage = totalPages > currentPage - 1;

	const paginatedItems = content.slice(startIndex, endIndex);
	const paginatedItemsCount = paginatedItems.length;

	const remainderIsTooSmall = paginatedItemsCount < maxPerPage && content.length >= maxPerPage;
	const remainderFillerItems = content.slice(
		Math.max(0, startIndex - (maxPerPage - paginatedItemsCount)),
		startIndex
	);

	const shows = remainderIsTooSmall ? [...remainderFillerItems, ...paginatedItems] : paginatedItems;

	return {
		currentPage,
		previousPage,
		nextPage,
		shows
	};
}
