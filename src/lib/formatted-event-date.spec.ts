import { afterEach, describe, expect, test } from "vitest";
import formattedEventDate from "$lib/formatted-event-date";
import { getShowYear } from "$lib/show-year";

// Simulate visitors in different timezones. Node re-reads process.env.TZ at runtime.
const VISITOR_TIMEZONES = [
	"Europe/Berlin",
	"UTC",
	"America/Los_Angeles",
	"America/New_York",
	"Asia/Tokyo",
	"Pacific/Auckland"
];

const originalTZ = process.env.TZ;

function useVisitorTimezone(timeZone: string) {
	process.env.TZ = timeZone;
	// Guard: make sure the simulated timezone actually applies, so the test can't pass vacuously
	const probe = new Date("2026-01-15T12:00:00.000Z");
	const localHour = probe.getHours();
	const expectedHour = Number(
		probe.toLocaleString("en-US", { timeZone, hour: "numeric", hourCycle: "h23" })
	);
	expect(localHour).toBe(expectedHour);
}

afterEach(() => {
	process.env.TZ = originalTZ;
});

describe.each(VISITOR_TIMEZONES)("visitor in %s", (timeZone) => {
	const now = new Date("2026-10-01T12:00:00.000Z");

	test("shows the date in German time for a show just after midnight", () => {
		useVisitorTimezone(timeZone);
		// 00:30 on 18 Oct in Germany (CEST, UTC+2) — still 17 Oct in UTC and the Americas
		const show = new Date("2026-10-17T22:30:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("18 Oct");
	});

	test("shows the date in German time for a late-evening show", () => {
		useVisitorTimezone(timeZone);
		// 22:00 on 17 Oct in Germany — already 18 Oct in Tokyo and Auckland
		const show = new Date("2026-10-17T20:00:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("17 Oct");
	});

	test("handles winter time (CET, UTC+1)", () => {
		useVisitorTimezone(timeZone);
		// 23:00 on 25 Dec in Germany
		const show = new Date("2026-12-25T22:00:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("25 Dec");
	});

	test("adds the year using the German calendar year", () => {
		useVisitorTimezone(timeZone);
		// 00:30 on 1 Jan 2027 in Germany — still 2026 in UTC
		const show = new Date("2026-12-31T23:30:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("01 Jan 2027");
		expect(getShowYear(show)).toBe(2027);
	});
});
