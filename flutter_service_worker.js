'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "157a4ffd9f073b4d649b8ab590aae1f5",
"assets/AssetManifest.bin.json": "99c26c07bf11e50406dae1e34e105cfd",
"assets/AssetManifest.json": "d98d52bc86a44aefc4ed4abc51090d4e",
"assets/assets/images/%25D8%25A3%25D8%25B3%25D8%25AF.jpg": "4b6ba73fe3f2d6b777a8c9a218afd75b",
"assets/assets/images/%25D8%25A3%25D9%2583%25D9%2584.jpg": "98da53cac4093e9653d8152d10df9741",
"assets/assets/images/%25D8%25A8%25D8%25A7%25D9%2584%25D9%2588%25D9%2586.jpg": "e3e34cebde0a9bff14172b1e8a20df2a",
"assets/assets/images/%25D8%25A8%25D8%25B7%25D8%25B1%25D9%258A%25D9%2582.jpg": "db2d9914be768c2704aa3f5192d691c0",
"assets/assets/images/%25D8%25A8%25D9%258A%25D8%25AA%25D8%25B2%25D8%25A7.jpg": "7c940ff2ed4f139e9b931d44146fd7a5",
"assets/assets/images/%25D8%25AC%25D8%25A8%25D9%2584.jpg": "fde86fd34160ad89c0f08206d75a5a92",
"assets/assets/images/%25D8%25AD%25D8%25AF%25D9%258A%25D9%2582%25D8%25A9.jpg": "e253cb1a458608ac8b277d8cc568de16",
"assets/assets/images/%25D8%25AE%25D8%25A8%25D8%25B2.jpg": "7801a19e7654d2ede71213327ac659cc",
"assets/assets/images/%25D8%25AF%25D8%25B1%25D8%25A7%25D8%25AC%25D8%25A9.jpg": "811737e9ee4548511057691367601cca",
"assets/assets/images/%25D8%25B2%25D9%2587%25D8%25B1%25D8%25A9.jpg": "581fe8baa8b7448877f024acfb6f0dc9",
"assets/assets/images/%25D8%25B3%25D9%2588%25D9%2582.jpg": "744c572e3ffa7261e1875d218e1151d1",
"assets/assets/images/%25D8%25B4%25D8%25B1%25D8%25B7%25D9%258A.jpg": "e23e57c8d8098e0a75980ee3cc6540f9",
"assets/assets/images/%25D8%25B6%25D9%2581%25D8%25AF%25D8%25B9.jpg": "abb090350091eeebd344fd037de7e90e",
"assets/assets/images/%25D8%25B7%25D8%25A8%25D9%258A%25D8%25A8.jpg": "88f9558a780024594883040f1288dae4",
"assets/assets/images/%25D8%25B7%25D9%258A%25D8%25B1.jpg": "802b702b765c1694958775d1a90b1dd3",
"assets/assets/images/%25D9%2581%25D9%258A%25D9%2584.jpg": "456f29a76c05fba77d70bc117b4fd985",
"assets/assets/images/%25D9%2582%25D8%25A7%25D8%25B1%25D8%25A8.jpg": "17c61dd3212fd6915d4f7a5099b6e143",
"assets/assets/images/%25D9%2582%25D9%2584%25D8%25B9%25D8%25A9.jpg": "5c2505357522abc0caee309d70649a99",
"assets/assets/images/%25D9%2582%25D9%2584%25D9%2585.jpg": "0be1e56e8ebe5fa4b59bb3e92479e2a3",
"assets/assets/images/%25D9%2583%25D8%25AA%25D8%25A8.jpg": "651efb746120067b3587c8e2fd1e0ec3",
"assets/assets/images/%25D9%2583%25D8%25B1%25D8%25B3%25D9%258A.jpg": "64d47e086ab994e6730d8fe7a4864dcf",
"assets/assets/images/%25D9%2585%25D8%25AF%25D8%25B1%25D8%25B3%25D8%25A9.jpg": "0737d222d28668dcb142ddec3bbfe9ed",
"assets/assets/images/%25D9%2585%25D8%25B2%25D8%25B1%25D8%25B9%25D8%25A9.jpg": "72e387a7b2eefc45f8688f548b178cac",
"assets/assets/images/%25D9%2585%25D8%25B3%25D8%25AA%25D8%25B4%25D9%2581%25D9%2589.jpg": "eaa935dbea51a06f2a9701235d9b7e6f",
"assets/assets/images/%25D9%2585%25D8%25B4%25D9%2589.jpg": "3170f8e2fb5dceb0ba8cbcc635c8756b",
"assets/assets/images/%25D9%2585%25D8%25B7%25D8%25B9%25D9%2585.jpg": "6003c057cba3698654cea22b7d0c0d18",
"assets/assets/images/%25D9%2585%25D9%2583%25D8%25AA%25D8%25A8%25D8%25A9.jpg": "665355a124c03991ca018867757df99d",
"assets/assets/images/%25D9%2585%25D9%2583%25D8%25AA%25D8%25A8.jpg": "d6da89b6fa262cd521c685632e5a5e77",
"assets/assets/images/%25D9%2585%25D9%2585%25D8%25B1%25D8%25B6%25D8%25A9.jpg": "9090ca334aac3c85b311716accad3089",
"assets/assets/images/%25D9%2585%25D9%2587%25D9%2586%25D8%25AF%25D8%25B3.jpg": "e36951a5e69ead77d6006ee6e3418c6c",
"assets/assets/images/%25D9%2585%25D9%2588%25D8%25B2.jpg": "cd5705e9efa28098add6e361c6fc6172",
"assets/assets/images/%25D9%2586%25D8%25A7%25D9%2585.jpg": "bbe2ed90ff7edad6acf38290b091985d",
"assets/assets/images/%25D9%2586%25D8%25AC%25D8%25A7%25D8%25B1.jpg": "986f5bc48929bcccaa48aaf202de3019",
"assets/assets/images/%25D9%2588%25D8%25B1%25D8%25AF.jpg": "4618198782acfbd4b467545e58b73e3a",
"assets/assets/images/%25D9%258A%25D8%25AC%25D9%2584%25D8%25B3.jpg": "f5bb4cef35082545ce506e9740ae2390",
"assets/assets/images/%25D9%258A%25D8%25B1%25D8%25B3%25D9%2585.jpg": "da400470f41b9f23060a5c3e2256514e",
"assets/assets/images/%25D9%258A%25D8%25B3%25D8%25A8%25D8%25AD.jpg": "42d7b25d45392cd990fadf30df66ac58",
"assets/assets/images/%25D9%258A%25D8%25B4%25D8%25B1%25D8%25A8.jpg": "ac0ea1ba2b162e9c286f81a255ca6421",
"assets/assets/images/%25D9%258A%25D8%25B9%25D9%2585%25D9%2584.jpg": "1dd2c1ec86d8b9aba521e92ddd23ee4a",
"assets/assets/images/%25D9%258A%25D9%2581%25D8%25AA%25D8%25AD.jpg": "8e2f25a3d692632024595ce09234171f",
"assets/assets/images/%25D9%258A%25D9%2582%25D8%25B1%25D8%25A3.jpg": "d31fbc22d23b3240e06b4c1abcc482b7",
"assets/assets/images/%25D9%258A%25D9%2583%25D8%25AA%25D8%25A8.jpg": "3477602c2cc41d209ee5f6eb320e1094",
"assets/assets/images/%25D9%258A%25D9%2586%25D8%25A7%25D9%2585.jpg": "d609a196727a72061eac8fd27956ad68",
"assets/assets/images/1.jpg": "10b08c991b0cce06db44eef3e881213b",
"assets/assets/images/10.jpg": "7e17a186f998fc7325a1ca16d59367a6",
"assets/assets/images/2.jpg": "27b4b38ac70ce59727fa99cb889c13c0",
"assets/assets/images/3.jpg": "26d659172717d97575025dacc2462438",
"assets/assets/images/4.jpg": "39c99e5e2a3c6e9ea198c8cc2d824c3a",
"assets/assets/images/5.jpg": "2edb1ad26c35c0bc054bdd11cfe0d847",
"assets/assets/images/6.jpg": "1b2615a7de6d0e48b6ce63eef813b0f9",
"assets/assets/images/7.jpg": "dc2c1f1dcc6c8308c60183858908396f",
"assets/assets/images/8.jpg": "34900a11bb1d91820fbc239ef32682b1",
"assets/assets/images/9.jpg": "b4904f67026519e0214b2018fd1b3a93",
"assets/assets/images/logo.png": "29d7ed420d7f44d8d76e3ef689d48f2c",
"assets/assets/svg/%25D8%25A7.svg": "fc804ebcd805728eb0da5405204a780a",
"assets/assets/svg/%25D8%25A8.svg": "18c2b88b4bfe02fa7eb4c6d6270c7116",
"assets/assets/svg/%25D8%25AA.svg": "c9e381975151393fe0ab48711efa3f5b",
"assets/assets/svg/%25D8%25AB.svg": "45942ebbd4bdefd6be6529f32531e193",
"assets/assets/svg/%25D8%25AC.svg": "3da27af4f7760ac91867bd9c7fba96b7",
"assets/assets/svg/%25D8%25AD.svg": "f846810b8e8931b59578385ec807bca3",
"assets/assets/svg/%25D8%25AE.svg": "4cd67a8e508fc26f9d8fa1c9fa6c30f9",
"assets/assets/svg/%25D8%25AF.svg": "1a28abc94a1c9cd381b32f5f3f015b24",
"assets/assets/svg/%25D8%25B0.svg": "47ecd989110aaff5418eeb3ffef06fa0",
"assets/assets/svg/%25D8%25B1.svg": "11ad5c73838936be75d2b28353f8881b",
"assets/assets/svg/%25D8%25B2.svg": "ac5cdf797fcd3751870e50cbe6e1e9a2",
"assets/assets/svg/%25D8%25B3.svg": "bfd314d9e7cee99842e38f220eef2b14",
"assets/assets/svg/%25D8%25B4.svg": "b1cafd5c10d895f6362db665d61a1256",
"assets/assets/svg/%25D8%25B5.svg": "6aa6e369edbff54d89e83c9e6a9622d3",
"assets/assets/svg/%25D8%25B6.svg": "5497ac21ff2f0b10bdcb398e3ffeb8b3",
"assets/assets/svg/%25D8%25B7.svg": "9a3cfd70f29b582d08b2b4bc8708affb",
"assets/assets/svg/%25D8%25B8.svg": "059718467c95a675b8fa40a071c5ee5c",
"assets/assets/svg/%25D8%25B9.svg": "538e637482453272a9d35b09bbc26fcb",
"assets/assets/svg/%25D8%25BA.svg": "07307fb1e4056302132a688a1a206703",
"assets/assets/svg/%25D9%2581.svg": "083cb5583056185e26ad9be95bc01f5d",
"assets/assets/svg/%25D9%2582.svg": "b6dcb1a36dd1bbcc6a63e1641de8879f",
"assets/assets/svg/%25D9%2583.svg": "f2d86f59eef739202f828e874a93cb0c",
"assets/assets/svg/%25D9%2584.svg": "184dc60946d36b3835cdfc98697cf551",
"assets/assets/svg/%25D9%2585.svg": "5bea03f06de30291030cba6fe3755ff2",
"assets/assets/svg/%25D9%2586.svg": "63df9085d3eca58f9fa10ba1be9b7c31",
"assets/assets/svg/%25D9%2587.svg": "48bb18c4b41fb962f6b0778252ef644f",
"assets/assets/svg/%25D9%2588.svg": "81661b830485354b2a14a0473c7f4522",
"assets/assets/svg/%25D9%258A.svg": "43d83304e1fdae03c95ce03c74385e22",
"assets/assets/svg/ghain.svg": "1e31423db36e555b8e0f32e9408be923",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0d61ab30267bf30759c6e1470cf2d0b0",
"assets/NOTICES": "8dc5ed4788aae21da7a0e4a52ff5f544",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a636ec6da61157435fcb059077981a52",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "065146d56263012612da2493928430ba",
"/": "065146d56263012612da2493928430ba",
"main.dart.js": "2eba78904cb3876bc59d4a19bc30d29a",
"manifest.json": "defbf112f1e3724ce0de41608ee527b9",
"version.json": "6cd6653da91d5aabd54f2d01e14d394b"};
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
