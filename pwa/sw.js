self.addEventListener('fetch', function(event) {
  console.log('Fetch event in SW', event.request);
  event.respondWith(new Response('Hello SW in Fetch event!'));
});
