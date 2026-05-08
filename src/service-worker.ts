/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

declare const self: ServiceWorkerGlobalScope;

// Cache name changes on every build — old caches are wiped automatically on deploy
const CACHE = `mc-scrpt-${version}`;

// Hashed immutable assets from the build + static files
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(ASSETS))
			.then(() => self.skipWaiting()) // activate without waiting for old tabs to close
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				// Delete every cache that isn't the current version
				Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
			)
			.then(() => self.clients.claim()) // take control of all open tabs immediately
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);
	if (url.origin !== self.location.origin) return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);

			// Hashed filenames never change content — safe to serve from cache without a network round-trip
			if (url.pathname.startsWith('/_app/immutable/')) {
				const cached = await cache.match(event.request);
				if (cached) return cached;
			}

			// Everything else (HTML, JSON, fonts, images): network-first so fresh content
			// lands on every load when online. Falls back to cache when offline.
			try {
				const response = await fetch(event.request);
				if (response.status === 200) {
					cache.put(event.request, response.clone());
				}
				return response;
			} catch {
				const cached = await cache.match(event.request);
				if (cached) return cached;
				return new Response('Offline — no cached version available.', { status: 503 });
			}
		})()
	);
});