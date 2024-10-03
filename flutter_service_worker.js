'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "b0a3891602e41b2bd9e8b5e3ee3f3020",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "628ff77d7285489bfc1466cdadafa6bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec19701c060ae5933bf19b0accc2fa71",
".git/logs/refs/heads/main": "2c491f162a6e46ff5a9dcf79017531fa",
".git/logs/refs/remotes/origin/main": "512a4947c956638fdcf5ce2e38b47832",
".git/objects/09/599b80acd23fd7af6213ec422ca94b4f99b66f": "edb862a4e375b35fbcda95be576481b4",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/8ba6b74b95fae3629984f5b4c444f8d9802e57": "b45ffdeb858a2947b61813941c340f6d",
".git/objects/1c/ba033297690c042ae6d4f157131ed874a31c9b": "87f5f95f20adb9a623914169c9eade4d",
".git/objects/1f/2cfde95e4b3b6c55c134e0e1ee82d07ec45de0": "7c29a0c1522dbb9dd70a5c147fb04a78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3ae64dcee9bd31fa62f90f3987c7cd80769d16": "970a3763409bf06e466d39ee98a0c1a2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/dd5ad3cbcc057d8165a3ebe16cf02db99a6b42": "986e78a59a4b16378483739dd9a9335b",
".git/objects/2e/54ea0c8e38fb01b668de8befbe0aef85286141": "3406e5e0398c8e0776b636016f37d0ae",
".git/objects/2e/d31735b947ea6371c479b3cab256338a3b3765": "09118515b9de2e3d19140951ccfde8c7",
".git/objects/40/800e178b4c98e2151c5ff2bebc43cc9ada0c9a": "74cbe7e0c2cd20e5a239e1f5b7039c79",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e9c6615f10b54d0e992df3f31e55143c7b7235": "f28c193e6a4203eb44aeceef6c12e8c2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/3343805df50f4ce40c042ed638f03c821641ef": "9eb13370d8f6ffb2024c106189818c1c",
".git/objects/59/6d4ead5e0b552538180c75702c412e07bca789": "e2c853ba5e39e9397f9c072d80262482",
".git/objects/5f/1163b75be99a7b55db86855b7df7f2fb0d3c11": "1c8b99792faa69d08c304c99e04f56b8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6c/5101b91f37da3d5c7b8988d8ced310baed5803": "5aa53cbbb9311b5eda281f113877c184",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/685921b24250a61c4464c9ea8bae8c28ca37af": "dd3e899ccf908e1c0e8e34e6a755fe75",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/16cf013a1c69f0c3ed1ad4a88e00c46546b554": "df3e2d7c94838e77767ea12da55ad9a7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/a675d0756cf8db1b780d829d3adce21c1cff82": "84e6b3e9c5c7179bef5549bda6e53aa1",
".git/objects/8e/15c1dabecb13209974efe2741e37fd43529fb8": "d628f529a886bcb64f5de80f56e6c450",
".git/objects/8e/c676ff2ffd307a6b7b0253204f8755d40ef44a": "1aa75e888ec95f4a934af168d8fcc211",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/af/4c849bcb82756a83b71ba5d0c3bff2b5bace7f": "65f70d509c252f76622b73a506720d71",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/efec61e224ee7e7bd9a0a80f71223a505ad65c": "6715afbc8dcd615dcf9a7fc35faada0b",
".git/objects/c9/ad7bc08e2794dab8d57eee3552877754cbdb04": "042b35eb964266beac24bd78b1aec64b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/cd28ec666e478fc95bd411a9241d8cf6999846": "0c81bc0fa1f53098f24eed376a1fb85d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/95fff045a6abb31e9384834d4173df78e2fd4a": "38c279aa1743044907d65d43d4174fd3",
".git/objects/ec/558d4386bf8705bed0fcae8dfe05332b6ab2e2": "b18e117524aecf1928de97f3250fabe1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/ec4405494fcf07a1ebd5abeb700a008cbf5973": "0d2aa4b16e91e28f80cd9c5bdc2080dc",
".git/objects/f7/ac09f7570df13b483f84040115dc2df7e9f35b": "fb27ff8c0577f550b842bbb53ac21f85",
".git/refs/heads/main": "2767765667d5299fec953e8d8a329088",
".git/refs/remotes/origin/main": "2767765667d5299fec953e8d8a329088",
"assets/AssetManifest.bin": "f45d1cae89ee87610d649ab6142c6e86",
"assets/AssetManifest.bin.json": "c41249f669d5956e2e2f0b64513b5e53",
"assets/AssetManifest.json": "0a7162fb49d68e79544411abbeaa8a6b",
"assets/assets/logo.jpg": "18a558c8c70e32d0e0cf4275400da157",
"assets/assets/logo.png": "76cade6eb0e2782fd954e87009745672",
"assets/assets/logoComplet.png": "8ebbda0c54468a28825aecc4ce4e4291",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c55185046f85399fa2620fcdeeb0d1d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "76cade6eb0e2782fd954e87009745672",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "85b7d9379ea663f17652793925ae5b8d",
"icons/Icon-192.png": "76cade6eb0e2782fd954e87009745672",
"icons/Icon-512.png": "d25eed2a6c261f8932e425c74bacf922",
"icons/Icon-maskable-192.png": "76cade6eb0e2782fd954e87009745672",
"icons/Icon-maskable-512.png": "d25eed2a6c261f8932e425c74bacf922",
"index.html": "b220e05b65d3252f31beaed202992b0c",
"/": "b220e05b65d3252f31beaed202992b0c",
"main.dart.js": "facbd1b165cdb510b8d1059b20ac49ef",
"manifest.json": "a698b3094ec35ba8d3df439e1031c926",
"README.md": "a1d32edcda1ba9f97206d3d0f6f49ec4",
"version.json": "db2650ccdb6e1d039b9d5be8c2487c7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
