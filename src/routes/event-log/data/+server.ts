import type { RequestHandler } from "@sveltejs/kit";
import previousShows from "$data/previous-shows.json";

export const prerender = true;

export const GET: RequestHandler = () => {
	return new Response(JSON.stringify(previousShows));
};
