// Dummy Service Worker to replace Netlify's problematic one
console.log('Custom Service Worker loaded - blocking Netlify SW');

self.addEventListener('install', function(event) {
  console.log('Custom SW installed');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Custom SW activated');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Don't handle any fetch events
self.addEventListener('fetch', function(event) {
  // Let the browser handle all fetch events normally
  return;
});