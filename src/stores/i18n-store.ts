import { derived, writable } from "svelte/store";
import languages from "$lib/i18n/languages";

type i18nStores = [locale: Languages, languages: typeof languages];

export const locale = writable<Languages>("de");

const availableLanguages = writable(languages);

function translate([locale, languages]: i18nStores) {
	return languages[locale];
}

export default derived([locale, availableLanguages], translate);
