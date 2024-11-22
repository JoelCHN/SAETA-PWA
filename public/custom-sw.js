self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  if (requestUrl.pathname.startsWith("/cities_routes")) {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match("/offline/cities_routes.html")
      )
    );
  } else if (requestUrl.pathname.startsWith("/places")) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/offline/places.html"))
    );
  } else {
    // Fallback genérico
    event.respondWith(
      fetch(event.request).catch(() => caches.match("/offline.html"))
    );
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "/offline/cities_routes.html",
        "/offline/places.html",
        "/offline.html",
      ]);
    })
  );
});
