import { writable } from 'svelte/store';

export const EVENT_CONTENT_DEFAULT_PAGE = 1;
export const CurrentPageStore = writable<number>(EVENT_CONTENT_DEFAULT_PAGE);
