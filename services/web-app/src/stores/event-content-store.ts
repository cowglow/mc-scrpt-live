import { derived, writable } from "svelte/store";
import { getPreviousDates, getUpcomingDates } from "$lib/date-filters";
import { events } from "../data/event-list.json";
import { paginateContent } from "$lib/paginate-content";

export const EVENT_CONTENT_DEFAULT_PAGE = 1;
export const currentPage = writable(EVENT_CONTENT_DEFAULT_PAGE);

export const EVENT_CONTENT_MAX_PAGES = 7;
const EVENT_CONTENT_PREVIOUS_DATES = getPreviousDates(events);
const EVENT_CONTENT_UPCOMING_DATES = getUpcomingDates(events);

export const eventDataStore = writable<{ previousEvents: ShowData[], upcomingEvents: ShowData[] }>({
  previousEvents: EVENT_CONTENT_PREVIOUS_DATES,
  upcomingEvents: EVENT_CONTENT_UPCOMING_DATES
});

export const eventContentStore = derived(
  [currentPage, eventDataStore],
  ([$currentPage, $data]) =>
    paginateContent($currentPage, EVENT_CONTENT_MAX_PAGES, $data.previousEvents),
  paginateContent(EVENT_CONTENT_DEFAULT_PAGE, EVENT_CONTENT_MAX_PAGES, EVENT_CONTENT_PREVIOUS_DATES));