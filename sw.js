const CACHE_NAME = 'mlw-cache-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/js/main.js',
  '/js/utils.js',
  '/js/story.js',
  '/js/games.js',
  '/js/audio.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).catch(err => console.warn('SW cache addAll failed', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Prefer cache for same-origin requests (static assets, images)
  if (req.method === 'GET' && url.origin === location.origin) {
    if (req.destination === '' || req.destination === 'document') {
      // navigation requests - network first
      event.respondWith(
        fetch(req).then(r => { caches.open(CACHE_NAME).then(c => c.put(req, r.clone())); return r; }).catch(()=> caches.match(req))
      );
      return;
    }

    // static resources - cache-first
    event.respondWith(
      caches.match(req).then(res => res || fetch(req).then(r => { caches.open(CACHE_NAME).then(c => c.put(req, r.clone())); return r; }))
    );
  }
});