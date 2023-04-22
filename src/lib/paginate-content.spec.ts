import { paginateContent } from './paginate-content';
import { expect, test, describe } from 'vitest';
import previousShows from '../data/previous-shows.json';
import previousShowsTrimmed from '../data/previous-shows-trimmed.json';

describe('Test paginateContent Utility Function', () => {
	test('returns the correct pagination object for the first page', () => {
		const currentPage = 1;
		const maxPages = 5;
		const expected = {
			currentPage,
			previousPage: false,
			nextPage: true,
			shows: previousShowsTrimmed
		};
		const result = paginateContent([previousShows, currentPage, maxPages]);
		expect(result).toEqual(expected);
	});
	/*
    test('returns the correct pagination object for the second page', () => {
        const currentPage = 2;
        const maxPages = 5;
        const expected = {
            currentPage,
            previousPage: true,
            nextPage: true,
            shows: [
                { id: 6, name: 'Show 6' },
                { id: 7, name: 'Show 7' },
                { id: 8, name: 'Show 8' },
                { id: 9, name: 'Show 9' },
                { id: 10, name: 'Show 10' }
            ]
        };
        const result = paginateContent([previousShows, currentPage, maxPages]);
        expect(result).toEqual(expected);
    });

    test('returns the correct pagination object for the last page', () => {
        const currentPage = 2;
        const maxPages = 3;
        const expected = {
            currentPage,
            previousPage: true,
            nextPage: false,
            shows: [
                { id: 4, name: 'Show 4' },
                { id: 5, name: 'Show 5' },
                { id: 6, name: 'Show 6' }
            ]
        };
        const result = paginateContent([previousShows, currentPage, maxPages]);
        expect(result).toEqual(expected);
    });
    */
});
