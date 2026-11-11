// LOTO AZARAKOR : service worker (hors ligne). Changez le numéro de version ci-dessous à chaque mise à jour de l'application.
const VERSION = 'azarakor3-v1';
const FONTS = 'fonts-azarakor';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png',
              'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('azarakor3-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Réponse immédiate depuis la mémoire, puis mise à jour en arrière-plan quand il y a du réseau
async function staleWhileRevalidate(cacheName, request, matchOpts) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request, matchOpts);
  const net = fetch(request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return hit || (await net) || new Response('', { status: 504, statusText: 'Hors ligne' });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      e.respondWith(caches.open(VERSION).then(async c => (await c.match('index.html')) || fetch(req)));
      return;
    }
    e.respondWith(staleWhileRevalidate(VERSION, req, { ignoreSearch: true }));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(staleWhileRevalidate(FONTS, req));   // polices : gardées après le premier chargement avec internet
  }
});
