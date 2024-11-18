'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "22b2b9a3c19a7468c131427dca298882",
"version.json": "8674771178649357167227969ba0cb63",
"index.html": "d4db512a1407933959221a976e2a18fb",
"/": "d4db512a1407933959221a976e2a18fb",
"main.dart.js": "6eba15642f2ebba3379e273f29c1ca10",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
"assets/AssetManifest.json": "fc0473fc5d7518d75cc4e44934ff4896",
"assets/NOTICES": "760130c00b76110475c9ed603691a694",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "2b4f90037e86864c2ad077aa377d8e40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf2cff6a887439e713425d98e2433c9f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d95a9ec5581769ac4c765dae548f471d",
"assets/fonts/MaterialIcons-Regular.otf": "629597421ff9f82234bd0d7a822b10b3",
"assets/assets/clients/toyota.svg": "6d43f79951f6a9e49e156f25a2d92263",
"assets/assets/clients/embrace.svg": "9371be8445c07749c46fc5a108019a49",
"assets/assets/clients/newyorktims.svg": "a222967f3994c665962e32cc481e9ff4",
"assets/assets/clients/v1sports.svg": "85b9c1135756e59bb02779d4608fbb87",
"assets/assets/clients/flutter.svg": "03058ac821f7f38187358e04a4fc906b",
"assets/assets/clients/american_airlines.svg": "d69a503f3a126375b2b97c13330ffcfb",
"assets/assets/clients/hamilton.svg": "00fe49cf84e90a582e40ef3d80c6ce99",
"assets/assets/clients/betterment.svg": "b8f4d0dce9d0267239fee86a600f30ce",
"assets/assets/clients/google.svg": "a3d3d7f6672f8b0523dcc193cab01ce5",
"assets/assets/clients/dowjones.svg": "1c2a8a583e80be5989dbf06959f5c402",
"assets/assets/social_network/medium.svg": "d0086310e4978ef70cff10bdadde0e7e",
"assets/assets/social_network/github.svg": "77abe649b6bac304ee9a18cec54c092b",
"assets/assets/social_network/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/social_network/linkedin.svg": "60e1cc62d1c53a9ef1b89d2eb129a940",
"assets/assets/products/asap_2_.png": "d381fe20fbf5c978c08ea1e86ab15d5d",
"assets/assets/products/jayani_1_.png": "aacd7ae7462ad49de7876af8b7e228c2",
"assets/assets/products/dash_2.png": "bd25d1b71d1839622bfa1b6e2242a8f6",
"assets/assets/products/dash_1.png": "57a11f85e8631bbe531d213f25956e02",
"assets/assets/products/jayani_2_.png": "9b37535af6722f47031f44e33f7ec995",
"assets/assets/products/asap_1_.png": "11824aac032416246482917b90eec4b3",
"assets/assets/rive/party.riv": "83aaa478760c98c90a40c0fda28a0674",
"assets/assets/rive/ticket.riv": "7bd1f236c8caa6136e8e75b81f459a14",
"assets/assets/rive/email.riv": "41c3bbd528783ecb89853575864c0e89",
"assets/assets/rive/flutterdash.riv": "784c04a6cc21e9d56b9c65233c94de2f",
"assets/assets/rive/send.riv": "14393d611fe078de7f67a187d02e5816",
"assets/assets/logos/formas_image.svg": "ec8d7666e5f85d0332fbb5a718e35e59",
"assets/assets/logos/logo_wave.svg": "014fca6e049a479910567e37754667c3",
"assets/assets/logos/tech_text.svg": "eb80d6ce04fdbbab27de402628e60274",
"assets/assets/logos/formas2.png": "9571bac43f9cf66caa998a4bb94fcfea",
"assets/assets/logos/second_logo.svg": "0fada3787e98e7f1d2fde0db5d9aaf3e",
"assets/assets/logos/wave_text.svg": "7fb93275381df8e1f4da2b4711ff7645",
"assets/assets/icons/design_lottie.json": "ee5ae217f048a1639382c6cbd69e1a8e",
"assets/assets/icons/web_service.jpg": "9ab189cee8e26ed8d65a03b5a2edf9d5",
"assets/assets/icons/flutter_service.svg": "28de2b710fdbd62432fee3018bd6991c",
"assets/assets/icons/performance_service.svg": "5c12a8f78124b3d3dddfd881610415fc",
"assets/assets/icons/growth_lottie.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/icons/support_service.webp": "84e74dfa6da37ee56a2bf2c3db63fc8c",
"assets/assets/icons/flutterfire.json": "b82355b0051e7a7551acf792c18edf46",
"assets/assets/icons/design_service.svg": "040df1ae74ebd76c095b92c5315037aa",
"assets/assets/icons/mobile_service.jpg": "5c8a17b07dca93f5aec55e93e7c5f62e",
"assets/assets/icons/consultoria_service.jpg": "3f59cb82e8414e3374656eb9cb671f0d",
"assets/assets/techs/js.svg": "c9a3d55bad8ef262d7e46629ad1456ba",
"assets/assets/techs/angular.svg": "98996c78a902e056146e271cd894299f",
"assets/assets/techs/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/techs/ts.svg": "cc1cd8a286b7d1d367a20421b5e0888f",
"assets/assets/techs/kotlin.svg": "ee8ba09a2ab2caa778b3b2d529a9ac8b",
"assets/assets/techs/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/techs/css.svg": "8f7247295a43d53a6cb70a10f463b4de",
"assets/assets/techs/react.svg": "f0340143227cc3546b667fd9c4d1e1d8",
"assets/assets/techs/swift.svg": "758442c43c4e8fd7517ceee47fc49f77",
"assets/assets/techs/html.svg": "6f3d69949ef38223d94a5a78a0ecd6ca",
"assets/assets/members/mijoto.jpeg": "89b720a59fa66000701ba9483448d768",
"assets/assets/members/panama.jpeg": "50470e0e89cd2f1102599f65c45c7766",
"assets/assets/members/jhadir.jpeg": "ef081033d38520948719ac1c7d3f751e",
"assets/assets/members/hiller.jpeg": "9f92b94f7997ca6f5df9afbd57c1c733",
"assets/assets/members/isabel.jpeg": "c90fcd7a65c624cf448e354b723d5830",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
