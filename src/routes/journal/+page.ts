import { getPosts } from "$lib/posts";

export const prerender = true;

export function load() {
	return {
		posts: getPosts().map(({ slug, title, date, summary }) => ({ slug, title, date, summary }))
	};
}
