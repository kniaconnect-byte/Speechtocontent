const CACHE_NAME = 'knia-planner-v3';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './logo-full.jpg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for the app shell, network passthrough for everything else
// (Firebase Auth/Firestore requests always go to the network, never cached).
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('googleapis.com') || url.includes('firebaseio.com') || url.includes('gstatic.com')) {
    return; // let Firebase/auth requests pass straight through
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => cached))
  );
});
