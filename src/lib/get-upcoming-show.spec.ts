import { describe, expect, test } from "vitest";
import { getUpcomingShow } from "$lib/get-upcoming-show";

describe("Test Get Upcoming Show Utility Function", () => {
	test("getUpcomingShow should return an array of upcoming shows", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const upcomingShow1 = {
			name: "Upcoming Show 1",
			date: new Date("2023-11-03T20:00:00.000Z"), // An upcoming show on November 3, 2023
			venue: "Venue Name 1",
			link: "https://example.com"
		};
		const pastShow = {
			name: "Past Show",
			date: new Date("2023-10-01T18:30:00.000Z"), // A past show on October 1, 2023
			venue: "Another Venue",
			link: "https://example.com"
		};
		const upcomingShow2 = {
			name: "Upcoming Show 2",
			date: new Date("2023-11-05T19:00:00.000Z"), // Another upcoming show on November 5, 2023
			venue: "Venue Name 2",
			link: "https://example.com"
		};
		const shows = [upcomingShow1, pastShow, upcomingShow2];

		const upcomingShows = getUpcomingShow(shows, currentDateTime);

		expect(upcomingShows).toEqual([upcomingShow1, upcomingShow2]);
	});

	test("getUpcomingShow should return an empty array when there are no upcoming shows", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const pastShow = {
			name: "Past Show",
			date: new Date("2023-10-01T18:30:00.000Z"), // A past show on October 1, 2023
			venue: "Venue Name",
			link: "https://example.com"
		};
		const shows = [pastShow];

		const upcomingShows = getUpcomingShow(shows, currentDateTime);

		expect(upcomingShows).toEqual([]);
	});

	test("getUpcomingShow should return all shows when none are in the past", () => {
		const currentDateTime = new Date("2023-11-02T12:00:00.000Z"); // Current date and time
		const upcomingShow1 = {
			name: "Upcoming Show 1",
			date: new Date("2023-11-03T20:00:00.000Z"),
			venue: "Venue Name 1",
			link: "https://example.com"
		};
		const upcomingShow2 = {
			name: "Upcoming Show 2",
			date: new Date("2023-11-05T19:00:00.000Z"),
			venue: "Venue Name 2",
			link: "https://example.com"
		};
		const shows = [upcomingShow1, upcomingShow2];

		const upcomingShows = getUpcomingShow(shows, currentDateTime);

		expect(upcomingShows).toEqual([upcomingShow1, upcomingShow2]);
	});
});
