import createShowCollection from '$lib/create-show-collection';

type PaginateContent = [content: EventData[], index: number, max: number, total: number];

export default function ([content, index, max, total]: PaginateContent): PaginatedShows {
	const offset = max * (index - 1);
	const totalPages = Math.ceil(total / max);
	const paginatedItems = content.slice(offset, max * index);
	return {
		currentPage: index,
		previousPage: index - 1 > 0,
		nextPage: index < totalPages,
		total,
		shows: createShowCollection(paginatedItems)
	};
}
