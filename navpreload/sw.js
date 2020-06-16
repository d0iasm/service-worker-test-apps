addEventListener('activate', event => {
  event.waitUntil(async function() {
    // Feature-detect
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  }());
});

addEventListener('fetch', event => {
  event.respondWith((async () => {
    try {
      return await event.preloadResponse;
    } catch (e) {
      return new Response("Hello Offline page");
    }
  })());
});
