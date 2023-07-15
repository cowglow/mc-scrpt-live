import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: true,
		port: 3000,
		watch: {
			usePolling: true
		}
	}
};

export default config;
