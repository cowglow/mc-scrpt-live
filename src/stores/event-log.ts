import { writable } from 'svelte/store';
import createShowCollection from '$lib/create-show-collection';

const RECENT_EVENTS = 'RECENT EVENTS';
const FIRST_EVENT = 'FIRST_EVENT';

type actionType = typeof RECENT_EVENTS | typeof FIRST_EVENT;

function reducer(state: EventData[], action: actionType): EventData[] {
	switch (action) {
		case FIRST_EVENT:
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return [state.pop()];
		case RECENT_EVENTS:
			return state.splice(0, 6);
		default:
			return state.splice(0, 6);
	}
}

export default function (url: string) {
	const loading = writable(false);
	const error = writable<boolean | unknown>(false);
	const data = writable<EventShow[]>([]);

	async function update(action: actionType = RECENT_EVENTS) {
		loading.set(true);
		error.set(false);
		try {
			const response = await fetch(url);
			const json = await response.json();
			const eventData = reducer(json.events, action);
			const shows = createShowCollection(eventData);
			data.set(shows as EventShow[]);
		} catch (err: unknown) {
			error.set(err);
		}
		loading.set(false);
	}

	// update().then((r) => console.log({ r }));
	return [data, loading, error, update];
}
