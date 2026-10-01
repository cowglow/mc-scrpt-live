import { error } from "@sveltejs/kit";
import { getPost, getPosts } from "$lib/posts";
import type { EntryGenerator } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => getPosts().map(({ slug }) => ({ slug }));

export function load({ params }) {
	const post = getPost(params.slug);
	if (!post) error(404, "Not found");
	return { post };
}
