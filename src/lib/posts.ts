import { marked } from "marked";

export interface Post {
	slug: string;
	title: string;
	date: string;
	summary: string;
	draft: boolean;
	html: string;
}

const files = import.meta.glob("/src/posts/*.md", {
	query: "?raw",
	import: "default",
	eager: true
}) as Record<string, string>;

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw };

	const meta: Record<string, string> = {};
	for (const line of match[1].split(/\r?\n/)) {
		const index = line.indexOf(":");
		if (index === -1) continue;
		const key = line.slice(0, index).trim();
		const value = line
			.slice(index + 1)
			.trim()
			.replace(/^["']|["']$/g, "");
		meta[key] = value;
	}
	return { meta, body: match[2] };
}

export function getPosts(): Post[] {
	return Object.entries(files)
		.map(([path, raw]) => {
			const slug = path.split("/").pop()!.replace(/\.md$/, "");
			const { meta, body } = parseFrontmatter(raw);
			return {
				slug,
				title: meta.title ?? slug,
				date: meta.date ?? "",
				summary: meta.summary ?? "",
				draft: meta.draft === "true",
				html: marked.parse(body, { async: false })
			};
		})
		.filter((post) => !post.draft)
		.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
	return getPosts().find((post) => post.slug === slug);
}
