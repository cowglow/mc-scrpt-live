import { describe, test, expect, vi, beforeEach } from "vitest";
import { dataLoader } from "./data-loader";

describe("Test dataLoader Utility Function", () => {
	const url = "https://jsonplaceholder.typicode.com/todos/1";
	const storageKey = "testData";
	const expirationTime = 5000;

	beforeEach(() => {
		localStorage.clear();
		vi.restoreAllMocks();
	});

	test("should fetch data from URL and cache it", async () => {
		const mockData = { id: 1, title: "test" };
		global.fetch = vi.fn().mockResolvedValue({
			json: () => Promise.resolve(mockData)
		});

		const data = await dataLoader(url, storageKey, expirationTime);

		expect(data).toEqual(mockData);
		expect(localStorage.getItem(storageKey)).toBe(JSON.stringify(mockData));
		expect(localStorage.getItem(`${storageKey}_LAST_UPDATE`)).toBeDefined();
		expect(fetch).toHaveBeenCalledWith(url, { cache: "force-cache" });
	});

	test("should return cached data if not expired", async () => {
		const cachedData = { test: "data" };
		localStorage.setItem(storageKey, JSON.stringify(cachedData));
		localStorage.setItem(`${storageKey}_LAST_UPDATE`, (Date.now() - 1000).toString());
		global.fetch = vi.fn();

		const data = await dataLoader(url, storageKey, expirationTime);

		expect(data).toEqual(cachedData);
		expect(fetch).not.toHaveBeenCalled();
	});

	test("should fetch fresh data if cache is expired", async () => {
		const freshData = { id: 1, title: "fresh" };
		localStorage.setItem(storageKey, JSON.stringify({ test: "old data" }));
		localStorage.setItem(`${storageKey}_LAST_UPDATE`, (Date.now() - 2 * expirationTime).toString());
		global.fetch = vi.fn().mockResolvedValue({
			json: () => Promise.resolve(freshData)
		});

		const data = await dataLoader(url, storageKey, expirationTime);

		expect(data).toEqual(freshData);
		expect(localStorage.getItem(storageKey)).toBe(JSON.stringify(freshData));
	});

	test("should return undefined and log on fetch error", async () => {
		global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));
		const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

		const data = await dataLoader(url, storageKey, expirationTime);

		expect(data).toBeUndefined();
		expect(consoleSpy).toHaveBeenCalled();
	});
});
