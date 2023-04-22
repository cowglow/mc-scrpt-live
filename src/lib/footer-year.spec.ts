import { describe, expect, test } from 'vitest';
import { footerYear } from './footer-year';

describe('Test Footer Year Utility Function', () => {
	test('footerYear() returns the current year', () => {
		const currentYear = new Date().getFullYear();
		const result = footerYear();
		expect(result).toBe(currentYear);
	});
});
