export const paginateContent = (page: number, max: number, list: ShowData[]): Pagination => {
  const offset = max * (page - 1);
  const totalPages = Math.ceil(list.length / max);
  const paginatedItems = list.slice(offset, max * page);
  return {
    currentPage: page,
    previousPage: page - 1 > 0,
    nextPage: page < totalPages,
    itemsTotal: list.length,
    totalPages: totalPages,
    items: paginatedItems
  };
};