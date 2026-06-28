  * ~~Make the changes his calendar subscription.~~
  * ~~Change protocol~~
  * ~~Add Google Calendar option~~
* ~~Add download link to ics file for specific event on the NextEventBanner~~
* Improve overall layout
* ~~Improve semantic HTML attributes~~
* ~~Implement h-calendar microformat~~
  * ~~`LogList.svelte` — add `h-feed` to wrapper~~
  * ~~`EventLog.svelte` — add `h-feed` to `div.event-log`; `p-name` on `<h1>`~~
  * ~~`LogEntry.svelte` — `h-event`, `dt-start`, `p-name`, `p-location`, `u-url` present~~
  * ~~`LogEntry.svelte` — `h-event`, `dt-start`, `p-name`, `p-location`, `u-url` complete~~
* ~~Export full event list in new route~~
* Fix Vitest glob — `vite.config.ts` uses `*.{test}.ts`, silently excludes all `.spec.ts` files; change to `{test,spec}`
* Add missing unit tests
  * `formatted-event-date.ts` — no spec
  * `paginate-content.ts` — no spec (pagination logic, highest priority)
  * `verify-venue.ts` — no spec
* ~~Rename unclear variables in `EventLog.svelte`~~
  * ~~`spawned` → `initialLoadPending` (describes init state, not lifecycle)~~
  * ~~`shows` (writable store) → `showsStore`, disambiguate from the `previousShows` prop~~
  * ~~`disableBanner` → `hasUpcomingShows` (name reads backwards to its truthiness)~~
  * ~~`label` / `content` → `eventLogTitle` / `eventLogDescription`~~
* ~~Embed Canva Quick Intro Presentation in a `<dialog>` on the downloads page~~
  * ~~Button "Quick Intro Presentation" opens native dialog via `showModal()`~~
  * ~~`<form method="dialog">` close button (works without JS)~~
  * ~~`<iframe>` with `?embed` Canva URL, 16:9 aspect ratio~~
  * ~~Existing Canva external link kept as fallback~~