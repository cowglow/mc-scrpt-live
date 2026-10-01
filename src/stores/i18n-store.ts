import { tick } from "svelte";
import { derived, writable } from "svelte/store";
import languages from "$lib/i18n/languages";
import { LANGUAGE_LOCALSTORAGE_KEY } from "$lib/constants";

type i18nStores = [locale: Languages, languages: typeof languages];

// Matches the pre-rendered HTML, so hydration starts from the same text
export const locale = writable<Languages>("de");

const availableLanguages = writable(languages);

function translate([locale, languages]: i18nStores) {
	return languages[locale];
}

export function isLanguage(value: unknown): value is Languages {
	return typeof value === "string" && value in languages;
}

// Switch to the language picked by the inline script in app.html, then reveal the page
export async function applyDocumentLanguage() {
	const html = document.documentElement;
	if (isLanguage(html.lang)) locale.set(html.lang);
	await tick();
	html.removeAttribute("data-lang-pending");
}

export function setLocale(lang: Languages) {
	locale.set(lang);
	document.documentElement.lang = lang;
	try {
		localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, lang);
	} catch {
		// Storage can be blocked; the choice then only lasts for this page view
	}
}

export default derived([locale, availableLanguages], translate);
