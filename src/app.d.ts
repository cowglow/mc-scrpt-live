// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface PageData {
	upcomingShows: unknown; // Replace 'any' with the appropriate type
	previousShows: unknown; // Replace 'any' with the appropriate type
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

export { PageData, EventShow, PaginatedShows };
