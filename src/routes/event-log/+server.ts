import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import eventData from '$data/event-list.json';

export const prerender = true;

export const GET: RequestHandler = ({ request }) => {
	return new Response(JSON.stringify(eventData));
};
