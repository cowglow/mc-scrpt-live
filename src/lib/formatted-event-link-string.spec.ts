import { describe, expect, test } from "vitest";
import { formattedEventLinkString } from "./formatted-event-link-string";

describe("Test Formatted Event Link String Utility Function", () => {
	test("formattedEventLinkString() return formatted Facebook Event URL string", () => {
		const facebookEventLink = "https://www.facebook.com/events/165397407258255/";
		const formattedEventLink = "facebook.com/events/165397407258255/";
		expect(formattedEventLinkString(facebookEventLink)).toBe(formattedEventLink);
	});

	test("formattedEventLinkString() return formatted Z-Bau Event URL string", () => {
		const zBauEventLink = "https://z-bau.com/programm/2023-02-18/galerie-kv/monsters-of-jungle/";
		const formattedEventLink = "z-bau.com/programm/2023-02-18/galerie-kv/monsters-of-jungle/";
		expect(formattedEventLinkString(zBauEventLink)).toBe(formattedEventLink);
	});
});
