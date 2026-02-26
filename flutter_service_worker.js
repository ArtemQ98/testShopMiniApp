'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e2a36a93b15fdd76010751be19556bd7",
"version.json": "f9b227e53088f9e81e31bd2abced4873",
"index.html": "abad1e7bca104cc20bf017c8da72abde",
"/": "abad1e7bca104cc20bf017c8da72abde",
"main.dart.js": "ad591176cc6128124418775d4b4d40eb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81a09439fd617b50d65390cd92f2c0fc",
".git/config": "04ac7e9ff2765f1b2ae87f04ef5be690",
".git/objects/66/e1274eb0b06bbdfcdb4f729c6f4c189621bb8c": "bc4339fb1839244a3cacd331116e4de8",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/03/ba1ad4e36aa83c54c132dc0a0cb37861eb29f6": "b95b88abab0b946ec9de1c3e43250ed0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/9231fbc07878ad480d68fea996e274b14ab30a": "c44b8ca0c62f73f23d5c11743aa69549",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/32/f341771f03584c369ac86b1d429960ce75077b": "bba05542e087026c989bf51447ab1238",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/eece5b7e6d609e570e538ed885e522e5fcc2b6": "01313e1dccd8fc8da9e386033d3d7d78",
".git/objects/58/caccb8ffa4090beb05e60dbf5d0d00d2705ed6": "241c38af29c74aaa2ca42a40f27b73f9",
".git/objects/58/633715f98a1afddcecb909aaa17f2f9db6e53a": "5604de044f03190ea5617d5869d5a5eb",
".git/objects/5f/70cb82aaa0d023352a84929705305c802d6478": "8abe8a7dd8b6c3fb582c4cdacf856e0c",
".git/objects/9c/30f2aff4c481071e251fee3427826f507b1d37": "1cddc453b5a7fa451c51f2a8a7a2efbf",
".git/objects/b2/401f56011367f47a7aeb7de9a1a56aa3c5c24f": "bcccf96e63743f5de4f45149f0428f49",
".git/objects/b2/440375eba6caa5235d6c8d79c37b105479a8e1": "47ee365a3021bb7c4dfc60ec2854c3cd",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0b79192ffeaf05ac4c481899cddc5372d48119": "1e8f3a64eb5e589b88914c409ea67137",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/0f9b7cf048cd96a958eea5c9834fd9121adf11": "e0b86ad876aaace6e1aef664102c89b6",
".git/objects/f3/69337062a45bec47d3ff7dfdd4b049c2f2a9db": "9201d29f4c46b5c04d72fdd7ff3ece5c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/461c2faeff6fc1ec02703bf791f35721f7f9fb": "bd8fb7c3d9915fe48a3a3c95bdd79e6c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/62f33821997cd93235f23777b6fcd6dcf20082": "92bb9363f15db3d721f2ab140465c7f8",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/73/57f4c54a49ea0587ada7832755902810640ac4": "bcb02f59c9bb78184dbed5ff1169d7ee",
".git/objects/80/3a52f1bfd597a697332dcf1e4f0c2790176af1": "1fdfbcbf496d9adecf1c4441b49be76c",
".git/objects/8f/9e7322486ef748844d0cf3b53efb4fe13f4795": "8081afdaaac5a6cca425e19b0c0b6e57",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/dac023186b66ff4631459719ea0f43a4a9a4d0": "c32108b86b78c2c5c12b908ec8344575",
".git/objects/4d/dd0565cd5ed581bf0a930892b0f2e772fdacff": "f51a8ca777f7f029332cccf6c0d83fc6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/2f/c69a57b70497e292af427367865ed7005bfeb3": "d0abf85bf5393bd15bd629a763ddc664",
".git/objects/88/69f3166daa6da1d4290aeaff5b74004a868ab9": "a205f1bd3976dbcea99214e2c0f6c625",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/0b19bc593cc5b472fc87aa25d0bfe4b3f441c5": "48f95381324b533ef699516206b9d380",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/27cc391b94902a111c8d2ac8be574450f878d8": "d5310a67b2be6cd12e8011c0b64a3cfd",
".git/objects/53/7a42ee1cfd58059a1eb94e68e6882736b6d966": "cba3df737cdbff4539d7ecc5af44d6d2",
".git/objects/30/9a21e05ef162927898e70f7db26f35841a7712": "e0620efb0cc6e468ec14a9e06012a4ef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/1394cb67ec78166dcb29f417e6034454a85e11": "db151ca3cd9126684e7a3878126e95a7",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3bb521a87f3fa160745535ab82e6f0d4edeedb": "fc0733b8835c0d491eb15d64914270d3",
".git/objects/a6/41139e0f1eecb7566c565e895a5dfcd16f35c7": "b874b65abdae82d76f19017516288bad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/cd/e3fe6d0e340dec67c5b6ee756f22baa111a24a": "7f9ed04378eaa34a05b428c35e84cf95",
".git/objects/e8/92be10eea2b0c07ecbb7c84d3701857afb6621": "f0ba80aae9ce1d4dc712a9e04531a741",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/68e131072f2bd4200ade6068b1135480780eb9": "414fff6bde133cb898e1f76bdf7b5902",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/54a34c5a2293277ea21dfd90b57d7c07128d67": "6b010adcf91065434ad09a8dea6ddce8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/42447226755930cb209b930c167d98d80e389f": "e24436e1086dd0c75d7c5f754764b7ff",
".git/objects/1b/c133aadf8b2d8876e09c3bd09163139dcf5445": "06e1c9d47e77ebaeb9a78ca295f99d73",
".git/objects/48/681c0beaabd9821569f393a2b4ed7e629c96e8": "ec83eb5199b1640da4092b116ebf2efc",
".git/objects/1e/80f83a4fab4e555933b0751d673d2718678709": "7b55fca2c94b7da843ee7501f7f6bdc8",
".git/objects/84/30e7b23438c89d57633192f92be4de7c870be8": "c1181196e3773d5b2f8911d06e4608e4",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/8d/41cd13a6e170551d6f5d019c61c577484cf21a": "190679b4371910d6175be83eab4178ca",
".git/objects/15/87a7d0db02407a246fddeb7f6ab273c82c3960": "31732b164422d60406235376d3bd6b32",
".git/objects/85/269821c195786e6c6f333760b220f1bbed886b": "94c03c1dc76499a16faa26f88293dba4",
".git/objects/71/ab4424bb2e549878b2ebb4ed69ed15d73fafd9": "5d7accf4f36654385caa855e6d44ea8d",
".git/objects/49/942a9894ad54123c1d7197859a04ca8961cb92": "925299bae48a50cc527e05a23a682381",
".git/objects/7f/1187074ee95b3cdf77428f77af4210cf6225a0": "18041355ed4e3dfa8a084f717778beb5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d18af55ed7d97f6078c20fd59785e74f96925e": "383bef497c1c344a6a65931fc0b710e5",
".git/objects/14/84c936020eefd8bd2f838f676981ab9001318b": "27e481fd2092decde05f46441706b0ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b52d339dc57498a636da9e97820d1016",
".git/logs/refs/heads/main": "ef6d11d4b42e02126f21510663b2e412",
".git/logs/refs/remotes/origin/main": "8bd668cbb65ba629e8a2be4008c31a78",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0557ccb7dc1f3d45a8386353d856a0e3",
".git/refs/remotes/origin/main": "0557ccb7dc1f3d45a8386353d856a0e3",
".git/index": "870ff824cf00bf305dd32e244e7934e6",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "5c65c4b0c73328224c871f5ebe7fded1",
"assets/NOTICES": "2e1db3ce36489457d0f8cdf906dbc17d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ca6fb6ffd5e6c0426aad90197505c199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c4c985f4576ba21e30580ae177852e1d",
"assets/fonts/MaterialIcons-Regular.otf": "8be36ab350a8780b35d23d1321e7c71c",
"assets/assets/background.png": "f9fd28f476bb41d24a78717519d13a16",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
