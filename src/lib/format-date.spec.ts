import { describe, expect, test } from "vitest";
import { formatDate } from "$lib/format-date";

describe("Test Format Date Utility Function", () => {
	test("formatDate() returns iCalendar-formatted datetime string", () => {
		const date = new Date("2025-06-28T15:00:00.000Z");
		expect(formatDate(date)).toBe("20250628T150000Z");
	});
});
