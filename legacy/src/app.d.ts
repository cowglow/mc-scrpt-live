/// <reference types="@sveltejs/kit" />

export type EventShow = {
  name: string;
  date: Date;
  venue: string;
  link: string;
};

export type ShowData = {
  zeitstempel: string;
  eventDate: string;
  eventName: string;
  eventLink: string;
  eventLocation: string;
  eventStartTime: string;
};

export type Pagination = {
  previousPage: boolean;
  nextPage: boolean;
  currentPage: number;
  itemsTotal: number;
  totalPages: number;
  items: Partial<EventShow>[];
};
