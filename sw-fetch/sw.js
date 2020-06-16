self.addEventListener("fetch", (e) => {
  console.log("call fetch event handler.");
  //e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('Hello offline page');
    })
  //);
});
