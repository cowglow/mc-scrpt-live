import { describe, expect, test } from "vitest";
import { getTimeDifference } from "./get-time-difference";

describe("Test Get Time Difference Utility Function", () => {
	test("calculates time difference between hardcoded dates", () => {
		const futureDate = new Date("2023-04-10T12:00:00Z"); // April 10th, 2023 at noon UTC
		const currentDate = new Date("2023-04-10T11:43:20Z"); // April 10th, 2023 at 11:43:20 UTC
		const timeDiff = getTimeDifference(futureDate, currentDate);
		expect(timeDiff).toMatchObject({ days: 0, hours: 0, minutes: 16, seconds: 40 });
	});

	test("calculates time difference between other hardcoded dates", () => {
		const futureDate = new Date("2023-05-01T16:26:40Z"); // May 1st, 2023 at 16:26:40 UTC
		const currentDate = new Date("2023-04-08T12:00:00Z"); // April 8th, 2023 at noon UTC
		const timeDiff = getTimeDifference(futureDate, currentDate);
		expect(timeDiff).toMatchObject({ days: 23, hours: 4, minutes: 26, seconds: 40 });
	});
});
