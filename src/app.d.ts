// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

type EventShow = {
	name: string;
	date: Date;
	venue: string;
	link: string;
};

type PaginatedShows = {
	currentPage: number;
	previousPage: boolean;
	nextPage: boolean;
	shows: Partial<EventShow>[];
};
