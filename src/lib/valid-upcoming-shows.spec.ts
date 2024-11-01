import { describe, expect, test } from "vitest";
import { validUpcomingShows } from "$lib/valid-upcoming-shows";
import type { EventShow } from "../app";

describe("Test Valid Upcoming Shows Utility Function", () => {
	test("validUpcomingShows should return true when there are valid upcoming shows", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const upcomingShow = {
			name: "Upcoming Show",
			date: new Date("2023-11-03T20:00:00.000Z"), // An upcoming show on November 3, 2023
			venue: "Venue Name",
			link: "https://example.com"
		};
		const pastShow = {
			name: "Past Show",
			date: new Date("2023-10-01T18:30:00.000Z"), // A past show on October 1, 2023
			venue: "Another Venue",
			link: "https://example.com"
		};
		const shows = [upcomingShow, pastShow];

		const result = validUpcomingShows(shows, currentDateTime);

		expect(result).toBe(true);
	});

	test("validUpcomingShows should return false when there are no valid upcoming shows", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const pastShow = {
			name: "Past Show",
			date: new Date("2023-10-01T18:30:00.000Z"), // A past show on October 1, 2023
			venue: "Venue Name",
			link: "https://example.com"
		};
		const shows = [pastShow];

		const result = validUpcomingShows(shows, currentDateTime);

		expect(result).toBe(false);
	});

	test("validUpcomingShows should return false when there are no shows in the array", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const shows = [] as EventShow[];

		const result = validUpcomingShows(shows, currentDateTime);

		expect(result).toBe(false);
	});
});
