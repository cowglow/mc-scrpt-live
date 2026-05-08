# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for MC SCRPT, a drum and bass artist. Deployed to GitHub Pages at [mc.scrpt.live](https://mc.scrpt.live). Built with SvelteKit using `adapter-static` — the output is a fully pre-rendered HTML site with no server runtime.

## Commands

```bash
npm run dev          # Dev server on localhost:3000
npm run build        # Production build → build/
npm run preview      # Preview the production build
npm run check        # Type-check with svelte-check + tsc
npm run lint         # Prettier check + ESLint
npm run format       # Auto-format with Prettier
npm run test         # Run Vitest (watch mode)
npm run storybook    # Storybook on localhost:6006
npm run sync         # Fetch event data from Google Apps Script (requires .env)
```

To run a single test file:
```bash
npx vitest run src/lib/footer-year.spec.ts
```

## Architecture

### Data flow

Event data originates from a **Google Apps Script (GAS) spreadsheet**. The sync script (`scripts/sync-events.ts`) fetches from the GAS deployment URL and writes three JSON files into `src/data/`:

- `upcoming-shows.json` — future events (reversed chronological)
- `previous-shows.json` — all past events
- `previous-shows-trimmed.json` — last 6 past events (used on homepage)

These JSON files are committed to the repo. At build time, `src/routes/+page.ts` imports them directly — no API call at runtime. The sync runs automatically every Thursday at 5 AM UTC via `sync-schedule.yml`, which commits updated JSON and redeploys.

For the `sync` script, you need a `.env` file with:
```
VITE_GAS_URL=script.google.com/macros/s
VITE_DEPLOYMENT_ID=<deployment-id>
```

The GAS endpoint is also in `http-request/google-apps-script.http` for manual testing.

### Runtime data caching

`src/lib/data-loader.ts` provides a `localStorage`-backed cache for data that needs to refresh at runtime (e.g. the `/event-log` route fetches live via the SvelteKit server route at `src/routes/event-log/`). It checks expiration before fetching and stores results under a key + `_LAST_UPDATE` pair.

### Path aliases

Defined in `svelte.config.js`:
- `$lib` → `src/lib/*`
- `$components` → `src/components/*`
- `$data` → `src/data/*`
- `$stores` → `src/stores/*`

### i18n

Translations live in `src/lib/i18n/` and are consumed via a Svelte store at `src/stores/i18n-store.ts`. The homepage uses it for the dismissible banner message.

### Scroll anchors

The single-page layout uses anchor IDs for in-page navigation (Events, Videos, Audio). Anchors are defined as constants in `src/lib/constants.ts` and set as `id` attributes on the corresponding `<section>` elements in `+page.svelte`.

## Known technical debt

**Tests not running:** `vite.config.ts` includes only `*.{test}.{js,ts}` — the curly-brace syntax matches only the literal string `test`, not `spec`. All six `.spec.ts` files in `src/lib/` are silently excluded. Fix: change the glob to `{test,spec}`.

**Commented-out test bodies:** `data-loader.spec.ts` and `scroll-to-view.spec.ts` have all assertions commented out. Both need a browser/jsdom environment (`localStorage`, `document`, `window.scrollTo`) which isn't configured for the unit test project — only the Storybook project uses Playwright browser mode.

**Boilerplate leftovers from project scaffolding:**
- `src/App.svelte` — Vite+Svelte welcome screen, not connected to the SvelteKit router
- `src/components/Counter.svelte` — referenced only by `App.svelte`
- `src/stories/` — default Storybook template stories (Button, Header, Page), not stories for actual project components