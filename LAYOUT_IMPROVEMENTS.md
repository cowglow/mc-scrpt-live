# Layout Improvements

## Analysis

### Page structure
The site is a single-page layout with three sections: Events, Videos, Audio — each rendered inside `<main>` in `+page.svelte`. A sticky `Header` (hero image + nav) sits above and a `Footer` below.

### Component tree (layout-relevant)
```
+layout.svelte
  Header.svelte          — hero image, sticky nav bar
  main > +page.svelte
    section.events
      EventLog.svelte    — h1 title, h3 description, paginated list, LogController
        NextEventBanner  — upcoming show(s) with countdown, swipeable
        div.event-log.h-feed
          LogEntry.svelte (×n) — date | name + venue | link | time
    section.videos
      MediaPlayer.svelte
    section.audio
      SoundCloudPlayer.svelte
  Footer.svelte

/event-log/+page.svelte
  section.events
    LogList.svelte       — full event history, no pagination
      LogEntry.svelte (×n)
```

---

## Issues & Plan

### 1. Dead base color — `LogEntry.svelte:99`
**Problem:** `.wrapper { background-color: red }` is set as the base style but is always overridden by `nth-child(odd)` (white) and `nth-child(even)` (black). The red never renders — it's leftover debug code.
**Fix:** Remove the `background-color: red` declaration from `.wrapper`.

---

### 2. `<h3>` misused as subtitle — `EventLog.svelte:51`
**Problem:** `eventLogDescription` is rendered as `<h3>` but it is a tagline/subtitle, not a section heading. It also skips `<h2>` in the heading hierarchy (`<h1>` → `<h3>`).
**Fix:** Change `<h3>{eventLogDescription}</h3>` to `<p class="event-log-description">{eventLogDescription}</p>` and update the scoped style accordingly.

---

### 3. `.sr-only` hides from screen readers — `static/styles.css`
**Problem:** The global `.sr-only` class uses `display: none`, which removes content from both visual rendering and the accessibility tree. Any visually-hidden but semantically meaningful content (e.g. future `p-name` on `h-feed`) becomes invisible to screen readers.
**Fix:** Replace with the standard clip-path technique:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

### 4. No section labels for Videos / Audio — `+page.svelte`
**Problem:** The Videos and Audio sections have no visible heading. `SectionLabel.svelte` exists but is unused on the homepage. Users who scroll past the nav anchor have no landmark to orient them within the page.
**Fix:** Add `<SectionLabel>` to the Videos and Audio sections. The Events section already has its own `<h1>` inside `EventLog`, so it doesn't need one.

---

### 5. Mobile/desktop DOM duplication in `LogEntry.svelte:44–51`
**Problem:** The event date is rendered twice — once in a `.mobile` span and once in a `.desktop` span — toggled by `display: none` via CSS breakpoints. This duplicates content in the DOM and is harder to maintain.
**Fix:** Use a single `<time>` element and control the display format via CSS (e.g. `::before`/`::after` content, or a single responsive format using `font-variant-numeric` and locale options). Alternatively, use a single format that works at both sizes.

---

### 6. Opaque variable name — `NextEventBanner.svelte:14`
**Problem:** `label` is used for the banner title translation, the same naming pattern we already fixed in `EventLog.svelte` (`label` → `eventLogTitle`).
**Fix:** Rename `label` → `bannerTitle` for consistency and clarity.

---

## Impressum page — `src/routes/impressum/+page.svelte`

### 7. Inline style on the "Reset All" button — `impressum/+page.svelte:96`
**Problem:** `style="font-size: large;padding:7px 30px;"` is hardcoded inline. This is inconsistent with how every other button/link is styled and bypasses the scoped CSS.
**Fix:** Move to a CSS class (e.g. `.reset-all`) in the scoped `<style>` block.

---

### 8. Bare `<br />` used for spacing — `impressum/+page.svelte:39`
**Problem:** A standalone `<br />` between the `<address>` block and the next `<h2>` is used for visual spacing. This is a presentational hack.
**Fix:** Remove the `<br />` and add `margin-bottom` to the `address` element in the scoped style.

---

### 9. Untyped function parameter — `impressum/+page.svelte:12`
**Problem:** `function removeLocalStorageItem(key)` has no TypeScript type on `key`. Since the keys are always strings, this should be `key: string`.
**Fix:** Add the type annotation.

---

## Downloads page — `src/routes/download/+page.svelte`

### 10. Multiple `<h1>` elements — `download/+page.svelte`
**Problem:** The page has four `<h1>` elements: "Press Kit", "Releases", "Sound Packs", "DIY Corner". A page should have a single top-level `<h1>` — these section headings should be `<h2>`.
**Fix:** Add a single `<h1>Downloads</h1>` (or "MC SCRPT Downloads") at the top and demote the four section headings to `<h2>`.

---

### 11. `line-height` set to a padding variable — `download/+page.svelte:112`
**Problem:** `li { line-height: var(--bottom-padding) }` uses a spacing/padding token (8px–44px depending on viewport) as a line-height value. At small screens this is 8px — far too tight for readable text.
**Fix:** Use a unitless line-height value (e.g. `line-height: 1.6`) or a dedicated CSS variable.

---

### 12. Typo in body copy — `download/+page.svelte:44`
**Problem:** `"More music scheduled to release latest this years."` — "latest this years" should be "later this year."
**Fix:** Correct the copy.

---

## Priority order

| # | File | Change | Impact |
|---|------|--------|--------|
| ~~1~~ | ~~`LogEntry.svelte`~~ | ~~Remove dead `background-color: red`~~ | ~~Code clarity~~ |
| ~~2~~ | ~~`EventLog.svelte`~~ | ~~`<h3>` → `<p>` for description~~ | ~~Semantic HTML + visual~~ |
| ~~3~~ | ~~`static/styles.css`~~ | ~~Fix `.sr-only` to use clip-path~~ | ~~Accessibility~~ |
| 4 | `+page.svelte` / `MediaPlayer` / `SoundCloudPlayer` | Review section heading hierarchy — players already self-label, `SectionLabel` caused duplicates | Visual hierarchy |
| ~~5~~ | ~~`LogEntry.svelte`~~ | ~~Collapse mobile/desktop date duplication~~ | ~~Code simplification~~ |
| ~~6~~ | ~~`NextEventBanner.svelte`~~ | ~~Rename `label` → `bannerTitle`~~ | ~~Code clarity~~ |
| ~~7~~ | ~~`impressum/+page.svelte`~~ | ~~Inline style → CSS class on reset-all button~~ | ~~Code consistency~~ |
| ~~8~~ | ~~`impressum/+page.svelte`~~ | ~~Remove bare `<br />`, use margin instead~~ | ~~Semantic HTML~~ |
| ~~9~~ | ~~`impressum/+page.svelte`~~ | ~~Type `key: string` on `removeLocalStorageItem`~~ | ~~Type safety~~ |
| ~~10~~ | ~~`download/+page.svelte`~~ | ~~Single `<h1>`, demote sections to `<h2>`~~ | ~~Semantic HTML + SEO~~ |
| ~~11~~ | ~~`download/+page.svelte`~~ | ~~Fix `line-height` to use proper value~~ | ~~Visual — readability~~ |
| ~~12~~ | ~~`download/+page.svelte`~~ | ~~Fix typo "latest this years"~~ | ~~Copy~~ |