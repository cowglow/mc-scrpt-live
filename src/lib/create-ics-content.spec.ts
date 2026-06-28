import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { createICSContent } from "$lib/create-ics-content";
import type { EventShow } from "../app";

const show: EventShow = {
	name: "Monsters Of Jungle",
	date: new Date("2025-06-28T21:00:00.000Z"),
	venue: "KV",
	link: "https://venue.com/events/123"
};

describe("createICSContent", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date("2025-01-01T00:00:00.000Z"));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	test("wraps a single event in a VCALENDAR", () => {
		expect(createICSContent([show])).toBe(
			"BEGIN:VCALENDAR\r\n" +
				"VERSION:2.0\r\n" +
				"PRODID:-//mc.scrpt.live//EN\r\n" +
				"CALSCALE:GREGORIAN\r\n" +
				"METHOD:PUBLISH\r\n" +
				"BEGIN:VEVENT\r\n" +
				"UID:20250628T210000Z@mc.scrpt.live\r\n" +
				"DTSTAMP:20250101T000000Z\r\n" +
				"DTSTART:20250628T210000Z\r\n" +
				"DTEND:20250629T000000Z\r\n" +
				"SUMMARY:MC SCRPT @ Monsters Of Jungle\r\n" +
				"LOCATION:KV\r\n" +
				"URL:https://venue.com/events/123\r\n" +
				"END:VEVENT\r\n" +
				"END:VCALENDAR"
		);
	});

	test("includes one VEVENT block per show", () => {
		const show2: EventShow = {
			...show,
			name: "Another Show",
			date: new Date("2025-07-15T20:00:00.000Z")
		};
		const result = createICSContent([show, show2]);
		expect(result.split("BEGIN:VEVENT")).toHaveLength(3);
	});

	test("produces valid calendar envelope with empty array", () => {
		expect(createICSContent([])).toBe(
			"BEGIN:VCALENDAR\r\n" +
				"VERSION:2.0\r\n" +
				"PRODID:-//mc.scrpt.live//EN\r\n" +
				"CALSCALE:GREGORIAN\r\n" +
				"METHOD:PUBLISH\r\n" +
				"END:VCALENDAR"
		);
	});
});
