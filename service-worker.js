const CACHE_NAME = "porteurs-manteau-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];


/* INSTALLATION */

self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});


/* ACTIVATION */

self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys().then(function(names) {

            return Promise.all(

                names.map(function(name) {

                    if (name !== CACHE_NAME) {

                        return caches.delete(name);

                    }

                })

            );

        })

    );

    self.clients.claim();

});


/* RÉCUPÉRATION DES FICHIERS */

self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)
            .then(function(response) {

                if (response) {

                    return response;

                }

                return fetch(event.request);

            })

    );

});