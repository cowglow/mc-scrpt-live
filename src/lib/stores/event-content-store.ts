import { writable } from "svelte/store";
import { getPreviousDates, getUpcomingDates } from "$lib/date-filters";
// @ts-ignore
import { events } from "$data/event-list.json";

interface EventDataStoreInterface {
  previousEvents: EventShow[];
  upcomingEvents: EventShow[];
}

const eventCollection: EventShow[] = events.map(
  // @ts-ignore
  ({ eventName, eventDate, eventStartTime, eventLocation, eventLink }) => {
    const date = new Date(eventDate);
    const startTime = new Date(eventStartTime);
    return {
      name: eventName,
      date: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        startTime.getHours(),
        startTime.getMinutes(),
        startTime.getSeconds(),
        startTime.getMilliseconds()
      ),
      venue: eventLocation,
      link: eventLink
    };
  }
);

export const EventDataStore = writable<EventDataStoreInterface>({
  previousEvents: getPreviousDates(eventCollection),
  upcomingEvents: getUpcomingDates(eventCollection)
});