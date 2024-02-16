import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests',
	reporter: 'html',
	use: {
		baseURL: 'http://localhost:3000'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	],
	webServer: {
		command: 'yarn build && yarn preview',
		port: 4173
	}
};

export default config;
