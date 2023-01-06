import { expect, test } from '@playwright/test';

test('branding to have text content', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('#brand')).toBe('MC SCRPT');
});
