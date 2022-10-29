let CACHE_NAME = 'react_budget_calculator_webapp_cache';
const urlsToCache = ['/index.html'];

self.addEventListener('install', function (event) {
	self.skipWaiting();
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
