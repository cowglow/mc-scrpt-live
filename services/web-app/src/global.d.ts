/// <reference types="@sveltejs/kit" />

type Event = {
  zeitstempel: string;
  eventDate: string;
  eventName: string;
  eventLink: string;
};

type Pagination = {
  previousPage: number;
  nextPage: number;
  total: number;
  totalPages: number;
  items: Partial<Event>[];
};
