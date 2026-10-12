/* ================================================================
 *  sw.js — Service Worker
 *  Strategi:
 *  - HTML & API: Network First (selalu fresh)
 *  - Gambar: Cache First (cepat, jarang berubah)
 *  - CSS/JS/Font: Stale While Revalidate (cepat + update di background)
 * ================================================================ */

const VERSION = "v1";
const STATIC_CACHE = `reroll-static-${VERSION}`;
const IMAGE_CACHE  = `reroll-images-${VERSION}`;
const FONT_CACHE   = `reroll-fonts-${VERSION}`;

/* Aset statis yang di-precache saat install */
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/style.css",
  "/config.js",
  "/configData.js",
  "/main.js"
];

/* ---------------- INSTALL ---------------- */
self.addEventListener("install", (event) => {
  console.log("[SW] Install");
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch((err) => console.warn("[SW] Precache gagal:", err))
  );
});

/* ---------------- ACTIVATE ---------------- */
self.addEventListener("activate", (event) => {
  console.log("[SW] Activate");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => !k.endsWith(VERSION))
          .map((k) => {
            console.log("[SW] Hapus cache lama:", k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ---------------- FETCH ---------------- */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET
  if (req.method !== "GET") return;

  // Skip chrome-extension, devtools, dll
  if (!url.protocol.startsWith("http")) return;

  // Skip request cross-origin yang bukan gambar/font
  const isImage = req.destination === "image" ||
                  /\.(png|jpg|jpeg|gif|webp|svg|avif|ico)$/i.test(url.pathname);
  const isFont  = req.destination === "font" ||
                  /\.(woff2?|ttf|otf|eot)$/i.test(url.pathname);
  const isCSS   = req.destination === "style" || /\.css$/i.test(url.pathname);
  const isJS    = req.destination === "script" || /\.js$/i.test(url.pathname);
  const isHTML  = req.destination === "document" ||
                  (req.headers.get("accept") || "").includes("text/html");

  /* ---------- HTML: Network First ---------- */
  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match("/index.html")))
    );
    return;
  }

  /* ---------- Gambar: Cache First ---------- */
  if (isImage) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;

          return fetch(req)
            .then((res) => {
              // Hanya cache response 200 OK
              if (res && res.status === 200) {
                cache.put(req, res.clone());
              }
              return res;
            })
            .catch(() => {
              // Kalau gagal dan tidak ada cache, kembalikan placeholder kosong
              return new Response("", { status: 404 });
            });
        })
      )
    );
    return;
  }

  /* ---------- Font: Cache First ---------- */
  if (isFont) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

  /* ---------- CSS/JS: Stale While Revalidate ---------- */
  if (isCSS || isJS) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          const fetchPromise = fetch(req)
            .then((res) => {
              if (res && res.status === 200) cache.put(req, res.clone());
              return res;
            })
            .catch(() => cached);

          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  /* ---------- Default: coba network, fallback cache ---------- */
  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});

/* ---------------- MESSAGE (untuk clear cache dari halaman) ---------------- */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data === "CLEAR_CACHE") {
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => {
      event.source.postMessage({ type: "CACHE_CLEARED" });
    });
  }
});