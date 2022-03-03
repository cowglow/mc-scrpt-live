import { writable } from "svelte/store";
import { getPreviousDates, getUpcomingDates } from "../date-filters";
import { events } from "../../data/event-list.json";

interface EventDataStoreInterface {
  previousEvents: ShowData[];
  upcomingEvents: ShowData[];
}

export const EventDataStore = writable<EventDataStoreInterface>({
  previousEvents: getPreviousDates(events),
  upcomingEvents: getUpcomingDates(events)
});
