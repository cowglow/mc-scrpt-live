/// <reference types="@sveltejs/kit" />

type EventShow = {
  name: string;
  date: Date;
  venue: string;
  link: string;
};

type ShowData = {
  zeitstempel: string;
  eventDate: string;
  eventName: string;
  eventLink: string;
  eventLocation: string;
  eventStartTime: string;
};

type Pagination = {
  previousPage: boolean;
  nextPage: boolean;
  currentPage: number;
  itemsTotal: number;
  totalPages: number;
  items: Partial<EventShow>[];
};
