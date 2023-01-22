import languages from '$lib/i18n/languages';

type i18nStores = [locale: Languages, languages: typeof languages];

export const availableLanguages = languages;

export default function ([locale, languages]: i18nStores) {
	return languages[locale];
}
