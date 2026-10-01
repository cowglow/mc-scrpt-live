import { afterEach, describe, expect, test } from "vitest";
import formattedEventDate from "$lib/formatted-event-date";
import { getShowYear } from "$lib/show-year";

const originalTZ = process.env.TZ;

// Simulate a visitor's timezone. Node re-reads process.env.TZ at runtime.
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

describe("formattedEventDate shows German dates regardless of visitor timezone", () => {
	const now = new Date("2026-10-01T12:00:00.000Z");

	test("show just after midnight does not drop back a day (New York visitor)", () => {
		useVisitorTimezone("America/New_York");
		// 00:30 on 18 Oct in Germany (CEST, UTC+2) — still 17 Oct in New York
		const show = new Date("2026-10-17T22:30:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("18 Oct");
	});

	test("late-evening show does not move forward a day (Tokyo visitor)", () => {
		useVisitorTimezone("Asia/Tokyo");
		// 22:00 on 17 Oct in Germany — already 18 Oct in Tokyo
		const show = new Date("2026-10-17T20:00:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("17 Oct");
	});

	test("handles winter time (CET, UTC+1) (Tokyo visitor)", () => {
		useVisitorTimezone("Asia/Tokyo");
		// 23:00 on 25 Dec in Germany — already 26 Dec in Tokyo
		const show = new Date("2026-12-25T22:00:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("25 Dec");
	});

	test("uses the German calendar year (UTC visitor)", () => {
		useVisitorTimezone("UTC");
		// 00:30 on 1 Jan 2027 in Germany — still 2026 in UTC
		const show = new Date("2026-12-31T23:30:00.000Z");
		expect(formattedEventDate(show, now, "en-GB")).toBe("01 Jan 2027");
		expect(getShowYear(show)).toBe(2027);
	});
});
