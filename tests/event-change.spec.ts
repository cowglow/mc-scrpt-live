import { test, expect } from '@playwright/test';

test('event change', async ({ page }) => {
	await page.goto('http://localhost:3000');
	await expect(page).toHaveTitle('mc.scrpt.live');
});
