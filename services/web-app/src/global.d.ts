/// <reference types="@sveltejs/kit" />

type Event = {
  zeitstempel: string;
  eventDate: string;
  eventName: string;
  eventLink: string;
  eventLocation: string;
  eventStartTime: string;
};

type Pagination = {
  previousPage: number | null;
  nextPage: number | null;
  total: number;
  totalPages: number;
  items: Partial<Event>[];
};
