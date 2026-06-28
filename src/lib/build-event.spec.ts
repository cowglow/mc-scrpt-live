import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { buildEvent } from "$lib/build-event";
import type { EventShow } from "../app";

const show: EventShow = {
	name: "Monsters Of Jungle",
	date: new Date("2025-06-28T21:00:00.000Z"),
	venue: "KV",
	link: "https://venue.com/events/123"
};

describe("buildEvent", () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date("2025-01-01T00:00:00.000Z"));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	test("produces a valid VEVENT block", () => {
		expect(buildEvent(show)).toEqual(
			"BEGIN:VEVENT\r\n" +
				"UID:20250628T210000Z@mc.scrpt.live\r\n" +
				"DTSTAMP:20250101T000000Z\r\n" +
				"DTSTART:20250628T210000Z\r\n" +
				"DTEND:20250629T000000Z\r\n" +
				`SUMMARY:MC SCRPT @ ${show.name}\r\n` +
				`LOCATION:${show.venue}\r\n` +
				`URL:${show.link}\r\n` +
				"END:VEVENT"
		);
	});

	test("omits URL line when link is empty", () => {
		const result = buildEvent({ ...show, link: "" });
		expect(result).not.toContain("URL:");
		expect(result).toContain("END:VEVENT");
	});
});
