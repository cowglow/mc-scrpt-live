import { T as current_component, U as fallback, P as escape_html, K as bind_props, G as attr, C as pop, A as push, N as ensure_array_like, V as spread_props, O as store_get, Q as unsubscribe_stores, W as update_store, X as store_set, R as head } from "../../chunks/index.js";
import { t as translations, E as EVENT_CONTENT_DEFAULT_PAGE, M as MAX_EVENT_ITEMS, c as EVENT_LOCALSTORAGE_KEY, J as JSON_PATH, A as ANCHOR_EVENTS, a as ANCHOR_VIDEOS, b as ANCHOR_AUDIO } from "../../chunks/i18n-store.js";
import { r as readable, d as derived, w as writable } from "../../chunks/index2.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function SectionLabel($$payload, $$props) {
  let title = fallback($$props["title"], "Section Label");
  let description = $$props["description"];
  $$payload.out += `<h3 class="svelte-s8huiq">${escape_html(title)}</h3> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="section-label-desc svelte-s8huiq">${escape_html(description)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { title, description });
}
const GdprBanner$1 = "/_app/immutable/assets/GDPR-YouTube-Playlist.ClWzAsHS.png";
function MediaPlayer($$payload, $$props) {
  push();
  $$payload.out += `<div id="media-player" class="svelte-covc9">`;
  SectionLabel($$payload, { title: "YouTube Playlist #MCSCRPT" });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="svelte-covc9"><img${attr("src", GdprBanner$1)} alt="YouTube GDPR Consent Banner." class="svelte-covc9"></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
const GdprBanner = "/_app/immutable/assets/GDPR-Soundcloud-Playlist.CUG6r6wP.png";
function SoundCloudPlayer($$payload, $$props) {
  push();
  const params = {
    url: "https://api.soundcloud.com/playlists/633696606",
    color: "#ff5500",
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true
  };
  Object.keys(params).map((param) => {
    return `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`;
  }).join("&");
  $$payload.out += `<div id="soundcloud-player" class="svelte-9lf4r">`;
  SectionLabel($$payload, {
    description: "MC Scrpt Playlist",
    title: "SoundCloud"
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="svelte-9lf4r"><img${attr("src", GdprBanner)} alt="SoundCloud GDPR Consent Banner" class="svelte-9lf4r"></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function LogController($$payload, $$props) {
  let stepForward = $$props["stepForward"];
  let stepBackward = $$props["stepBackward"];
  let stepBackwardDisabled = fallback($$props["stepBackwardDisabled"], true);
  let stepForwardDisabled = fallback($$props["stepForwardDisabled"], true);
  $$payload.out += `<div class="wrapper svelte-1m9k5uj"><button${attr("disabled", stepBackwardDisabled, true)} class="svelte-1m9k5uj"><img src="/images/expand-less.svg" alt="Previous page"></button> <button${attr("disabled", stepForwardDisabled, true)} class="svelte-1m9k5uj"><img src="images/expand-more.svg" alt="Next page"></button></div>`;
  bind_props($$props, {
    stepForward,
    stepBackward,
    stepBackwardDisabled,
    stepForwardDisabled
  });
}
function formattedEventLinkString(urlString) {
  const url = new URL(urlString);
  return `${url.hostname.replace("www.", "")}${url.pathname}`;
}
function LogEntry($$payload, $$props) {
  push();
  let eventDate, eventMonth, eventMonthMobile, eventDay, eventYear, eventUrl, eventStartTime;
  let name = fallback($$props["name"], "");
  let date = fallback($$props["date"], () => /* @__PURE__ */ new Date(), true);
  let venue = fallback($$props["venue"], "");
  let link = fallback($$props["link"], "");
  eventDate = new Date(date);
  eventMonth = eventDate.toLocaleString("de-DE", { timeZone: "Europe/Berlin", month: "2-digit" });
  eventMonthMobile = eventDate.toLocaleString("de-DE", { timeZone: "Europe/Berlin", month: "short" });
  eventDay = eventDate.toLocaleString("de-DE", { timeZone: "Europe/Berlin", day: "2-digit" });
  eventYear = eventDate.toLocaleString("de-DE", { timeZone: "Europe/Berlin", year: "numeric" });
  eventUrl = formattedEventLinkString(link);
  eventStartTime = eventDate.toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit"
  });
  $$payload.out += `<div class="wrapper svelte-1ddzabr"><div class="flex-it event-date svelte-1ddzabr"><div class="mobile svelte-1ddzabr"><span>${escape_html(eventMonthMobile)}<br>${escape_html(`${eventYear}`)}</span></div> <div class="desktop svelte-1ddzabr"><span>${escape_html(`${eventMonth} ${eventDay}`)}<br>${escape_html(`${eventYear}`)}</span></div></div> <div class="flex-it event-name svelte-1ddzabr"><span class="svelte-1ddzabr">${escape_html(name)}</span> <span class="svelte-1ddzabr">${escape_html(venue)}</span></div> <div class="flex-it event-link svelte-1ddzabr"><div class="mobile svelte-1ddzabr"><a${attr("href", link)} rel="noreferrer nofollow" target="event-link" class="svelte-1ddzabr"><img alt="Event link icon" src="/images/event-link-icon.svg"></a></div> <div class="desktop svelte-1ddzabr"><img alt="Event link icon" src="/images/event-link-icon.svg"> <a${attr("href", link)} rel="noreferrer nofollow" target="event-link" class="svelte-1ddzabr">${escape_html(eventUrl)}</a></div></div> <div class="flex-it event-time desktop svelte-1ddzabr"><div class="desktop svelte-1ddzabr"><img${attr("alt", `Event Start Time is ${eventStartTime}`)} src="/images/event-start-time-icon.svg"> <span class="svelte-1ddzabr">${escape_html(eventStartTime)}</span></div></div></div>`;
  bind_props($$props, { name, date, venue, link });
  pop();
}
function LogList($$payload, $$props) {
  let data = fallback($$props["data"], () => [], true);
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="wrapper svelte-jd1dse"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let event = each_array[$$index];
    LogEntry($$payload, spread_props([event]));
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
}
function getTimeDifference(dateFuture, currentDate = /* @__PURE__ */ new Date()) {
  const diff = Math.floor((dateFuture.getTime() - currentDate.getTime()) / 1e3);
  return {
    days: Math.floor(diff / 86400),
    hours: Math.floor(diff % 86400 / 3600),
    minutes: Math.floor(diff % 3600 / 60),
    seconds: Math.floor(diff % 60)
  };
}
function CountDown($$payload, $$props) {
  push();
  var $$store_subs;
  let days, hours, minutes, seconds;
  let date = fallback($$props["date"], () => new Date(Date.now()), true);
  let diff = getTimeDifference(date);
  let interval = setInterval(
    () => {
      diff = getTimeDifference(date);
    },
    1e3
  );
  onDestroy(() => {
    clearInterval(interval);
  });
  days = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.date.days"];
  hours = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.date.hours"];
  minutes = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.date.minutes"];
  seconds = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.date.seconds"];
  $$payload.out += `<div class="wrapper svelte-1cfk31f"><div class="container svelte-1cfk31f"><span class="svelte-1cfk31f">${escape_html(`0${diff.days}`.slice(-2))}</span><span class="svelte-1cfk31f">${escape_html(days)}</span></div> <div class="container svelte-1cfk31f"><span class="svelte-1cfk31f">${escape_html(`0${diff.hours}`.slice(-2))}</span><span class="svelte-1cfk31f">${escape_html(hours)}</span></div> <div class="container svelte-1cfk31f"><span class="svelte-1cfk31f">${escape_html(`0${diff.minutes}`.slice(-2))}</span><span class="svelte-1cfk31f">${escape_html(minutes)}</span></div> <div class="container svelte-1cfk31f"><span class="svelte-1cfk31f">${escape_html(`0${diff.seconds}`.slice(-2))}</span><span class="svelte-1cfk31f">${escape_html(seconds)}</span></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { date });
  pop();
}
function getUpcomingShow(shows, currentDateTime = /* @__PURE__ */ new Date()) {
  return shows.reduce((upcomingShows, show) => {
    const showEvent = new Date(show.date);
    if (showEvent > currentDateTime) {
      return [...upcomingShows, show];
    }
    return upcomingShows;
  }, []);
}
function NextEventBanner($$payload, $$props) {
  push();
  var $$store_subs;
  let label, cta;
  let data = fallback($$props["data"], () => [], true);
  const nextShow = getUpcomingShow(data);
  label = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.title"];
  cta = store_get($$store_subs ??= {}, "$translations", translations)["nextEvent.banner.cta"];
  if (nextShow.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="next-event-banner" class="svelte-c727pe"><div class="title svelte-c727pe"><h1 class="svelte-c727pe">${escape_html(label)}</h1> <h2 class="svelte-c727pe">${escape_html(nextShow[0].name)}</h2> <h3 class="svelte-c727pe">${escape_html(nextShow[0].venue)}</h3></div> <div class="count-down svelte-c727pe">`;
    CountDown($$payload, { date: new Date(nextShow[0].date) });
    $$payload.out += `<!----></div> <div class="info svelte-c727pe"><a${attr("href", nextShow[0].link)} rel="noreferrer nofollow" target="event-link" class="svelte-c727pe">${escape_html(cta)}</a></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
async function dataLoader(url, storageKey, expirationTime = 7 * 24 * 60 * 60 * 1e3) {
  const lastUpdateKey = `${storageKey}_LAST_UPDATE`;
  const lastUpdate = localStorage.getItem(lastUpdateKey);
  const now = (/* @__PURE__ */ new Date()).getTime();
  if (lastUpdate && now - Number(lastUpdate) < expirationTime) {
    const cachedData = localStorage.getItem(storageKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  }
  try {
    const response = await fetch(url, { cache: "force-cache" });
    const json = await response.json();
    localStorage.setItem(storageKey, JSON.stringify(json));
    localStorage.setItem(lastUpdateKey, now.toString());
    return json;
  } catch (err) {
    console.log(err);
  }
}
function paginateContent([content, currentPage, maxPages]) {
  const startIndex = (currentPage - 1) * maxPages;
  const endIndex = startIndex + maxPages;
  const paginatedItems = content.slice(startIndex, endIndex);
  return {
    currentPage,
    previousPage: currentPage > 1,
    nextPage: currentPage - 1 < maxPages,
    shows: paginatedItems
  };
}
function validUpcomingShows(shows, currentData = /* @__PURE__ */ new Date()) {
  return shows.some((show) => {
    const showEvent = new Date(show.date);
    return showEvent > currentData;
  });
}
function EventLog($$payload, $$props) {
  push();
  var $$store_subs;
  let label, content, logData;
  let upcomingShows = fallback($$props["upcomingShows"], () => [], true);
  let previousShows = fallback($$props["previousShows"], () => [], true);
  let spawned = writable(true);
  let shows = writable(previousShows);
  let currentPage = writable(EVENT_CONTENT_DEFAULT_PAGE);
  let maxPages = readable(MAX_EVENT_ITEMS);
  let eventsStore = derived([shows, currentPage, maxPages], paginateContent);
  const disableBanner = validUpcomingShows(upcomingShows);
  function stepBackward() {
    update_store($$store_subs ??= {}, "$currentPage", currentPage, -1);
  }
  async function stepForward() {
    if (store_get($$store_subs ??= {}, "$spawned", spawned)) {
      store_set(shows, await dataLoader(JSON_PATH, EVENT_LOCALSTORAGE_KEY));
      store_set(spawned, false);
    }
    update_store($$store_subs ??= {}, "$currentPage", currentPage);
  }
  label = store_get($$store_subs ??= {}, "$translations", translations)["events.header.title"];
  content = store_get($$store_subs ??= {}, "$translations", translations)["events.header.description"];
  logData = store_get($$store_subs ??= {}, "$eventsStore", eventsStore).shows;
  if (disableBanner) {
    $$payload.out += "<!--[-->";
    NextEventBanner($$payload, { data: upcomingShows });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="wrapper svelte-qjr3hq"><h1 class="svelte-qjr3hq">${escape_html(label)}</h1> <h3 class="svelte-qjr3hq">${escape_html(content)}</h3> `;
  LogList($$payload, { data: logData });
  $$payload.out += `<!----> `;
  LogController($$payload, spread_props([
    {
      stepBackwardDisabled: !store_get($$store_subs ??= {}, "$eventsStore", eventsStore).previousPage,
      stepForwardDisabled: !store_get($$store_subs ??= {}, "$eventsStore", eventsStore).nextPage,
      stepForward,
      stepBackward
    }
  ]));
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { upcomingShows, previousShows });
  pop();
}
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { upcomingShows, previousShows } = data;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta property="og:title" content="MC SCRPT | Drum and Bass MC"> <meta property="og:type" content="website"> <meta property="og:url" content="https://mc.scrpt.live"> <meta property="og:image" content="https://mc.scrpt.live/images/og-image.png"> <meta property="og:description" content="Upcoming shows, videos and music."> <meta name="twitter:card" content="summary"> <meta name="twitter:creator" content="@MCScrpt"> <link rel="preload" href="/fonts/PressStart2P-Regular.woff2" crossorigin="anonymous" as="font" type="font/woff2"> <link rel="preload" href="/fonts/ShareTechMono-Regular.woff2" crossorigin="anonymous" as="font" type="font/woff2"> <link rel="preload" href="/fonts/bd_console.woff2" crossorigin="anonymous" as="font" type="font/woff2"> <link rel="preload" href="/fonts/teko-regular.woff2" crossorigin="anonymous" as="font" type="font/woff2"> <link rel="preload" href="/fonts/teko-medium.woff2" crossorigin="anonymous" as="font" type="font/woff2">`;
  });
  $$payload.out += `<section class="events svelte-1xka1hh"${attr("id", ANCHOR_EVENTS)}>`;
  EventLog($$payload, { upcomingShows, previousShows });
  $$payload.out += `<!----></section> <section class="videos svelte-1xka1hh"${attr("id", ANCHOR_VIDEOS)}>`;
  MediaPlayer($$payload);
  $$payload.out += `<!----></section> <section class="audio svelte-1xka1hh"${attr("id", ANCHOR_AUDIO)}>`;
  SoundCloudPlayer($$payload);
  $$payload.out += `<!----></section>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
