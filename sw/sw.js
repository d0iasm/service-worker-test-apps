/*
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
*/

//self.addEventListener('fetch', function(event) {
	//console.log('Fetch event in SW', event.request);
  //event.respondWith(new Response('Hello SW in Fetch event!'));
/*
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
					console.log('Found response from cache');
          return response;
        }
        return fetch(event.request);
      }
    )
  );
*/
//});
