export const paginateContent = (
  list: ShowData[],
  page: number,
  max: number
): Pagination => {
  const offset = max * (page - 1);
  const totalPages = Math.ceil(list.length / max);
  const paginatedItems = list.slice(offset, max * page);

  return {
    previousPage: page - 1 >= 0 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: list.length,
    totalPages: totalPages,
    items: paginatedItems,
  };
};
