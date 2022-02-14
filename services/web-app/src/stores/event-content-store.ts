import { writable } from "svelte/store";
import { events } from "../data/event-list.json";
import { getPreviousDates, getUpcomingDates } from "$lib/date-filters";
import { paginateContent } from "$lib/paginate-content";

export const EVENT_CONTENT_DEFAULT_PAGE = 1;
export const EVENT_CONTENT_MAX_PAGES = 7;

export const EVENT_CONTENT_PREVIOUS_DATES = getPreviousDates(events);
export const EVENT_CONTENT_UPCOMING_DATES = getUpcomingDates(events);

export const EVENT_CONTENT_INITIAL_VALUE = paginateContent(
  EVENT_CONTENT_PREVIOUS_DATES,
  EVENT_CONTENT_DEFAULT_PAGE,
  EVENT_CONTENT_MAX_PAGES
);

export const eventContentStoreCurrentPage = writable(
  EVENT_CONTENT_DEFAULT_PAGE
);
export const eventContentStore = writable<Pagination>(
  EVENT_CONTENT_INITIAL_VALUE
);
