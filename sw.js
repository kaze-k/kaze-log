const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e46c7ecf15a90e253ca4579af9dbd568","url":"./404.html"},{"revision":"0eed17093ffc73bb76e0d017e00b31af","url":"./archives/2023/03/index.html"},{"revision":"a08e8358be4658522b6be619d2fde1b4","url":"./archives/2023/index.html"},{"revision":"38f793c5f6617f0be9b6379b28e920b2","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"06e4be1062711bcdb1eb7068264ad9f7","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"79b0e539566bc389fd1bba58691307ca","url":"./categories/index.html"},{"revision":"6ca4f76946c9d2be2d1b347dc295ff02","url":"./categories/学习/index.html"},{"revision":"f1d5fd4cf8d369ca3fa38c40e109922d","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1fbad0872a2019d562dcbeb005b1fa42","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"5406b34c0a7543c5b56fbcbb1abe2359","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"c6d96f5ebe20ba896b4714ff9fc3962d","url":"./posts/33107/index.html"},{"revision":"f2dad045cc00e262c9f85d8ca4db01d8","url":"./posts/3603/index.html"},{"revision":"a6de9c4767d3d92cb643703edad25327","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"c7ad2f51fc48e703fe67546412fbd08a","url":"./sitemap/sitemap.xml"},{"revision":"3d47160ffc889ac371cc285e63806f23","url":"./tags/index.html"},{"revision":"b7b0002d5e363020b8ed7ce0eca84fd2","url":"./tags/Linux/index.html"},{"revision":"4d8e3d8d256b5af4ed9064effafde146","url":"./tags/数据结构/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// jsdelivr的CDN资源
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-libs',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
)

workbox.googleAnalytics.initialize();