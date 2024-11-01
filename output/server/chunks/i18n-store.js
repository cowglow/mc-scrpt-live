import { d as derived, w as writable } from "./index2.js";
const ANCHOR_EVENTS = "event-log";
const ANCHOR_VIDEOS = "media-player";
const ANCHOR_AUDIO = "soundcloud-playlist";
const DOWNLOAD_ROUTE = "/download";
const EVENT_LOCALSTORAGE_KEY = "EVENT_LOG";
const EVENT_CONTENT_DEFAULT_PAGE = 1;
const MAX_EVENT_ITEMS = 6;
const JSON_PATH = "/event-log";
const en = {
  "nextEvent.banner.title": "Next Big Show",
  "nextEvent.banner.cta": "More Info",
  "nextEvent.banner.date.days": "Days",
  "nextEvent.banner.date.hours": "Hrs",
  "nextEvent.banner.date.minutes": "Mins",
  "nextEvent.banner.date.seconds": "Secs",
  "events.header.title": "Previous Events",
  "events.header.description": "You can usually catch me grooving alongside some of the coolest DJs in and around the 'Mittelfranken' region.",
  "events.all.cta": "See All Events",
  "footer.message": "Available for booking and collaboration.\nFeel free to contact me."
};
const de = {
  "nextEvent.banner.title": "Nächste Show",
  "nextEvent.banner.cta": "Mehr Infos",
  "nextEvent.banner.date.days": "Tage",
  "nextEvent.banner.date.hours": "Std\n",
  "nextEvent.banner.date.minutes": "Mins",
  "nextEvent.banner.date.seconds": "Sek",
  "events.header.title": "Frühere Ereignisse",
  "events.header.description": "Normalerweise kann man mich an der Seite einiger der coolsten DJs in und um Mittelfranken beim Grooven erwischen.",
  "events.all.cta": "Alle Events sehen",
  "footer.message": "Ich bin für Kollabo und Buchungen verfügbar.\nDu kannst mich gerne kontaktieren."
};
const languages = {
  en,
  de
};
const locale = writable("de");
const availableLanguages = writable(languages);
function translate([locale2, languages2]) {
  return languages2[locale2];
}
const translations = derived([locale, availableLanguages], translate);
export {
  ANCHOR_EVENTS as A,
  DOWNLOAD_ROUTE as D,
  EVENT_CONTENT_DEFAULT_PAGE as E,
  JSON_PATH as J,
  MAX_EVENT_ITEMS as M,
  ANCHOR_VIDEOS as a,
  ANCHOR_AUDIO as b,
  EVENT_LOCALSTORAGE_KEY as c,
  translations as t
};
