/// <reference types="@sveltejs/kit" />

type Pagination = {
  previousPage: boolean;
  nextPage: boolean;
  currentPage: number;
  itemsTotal: number;
  totalPages: number;
  items: Partial<EventShow>[];
};
