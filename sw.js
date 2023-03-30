const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"20d701d0f8a720216d1ffa648b18b7ae","url":"./404.html"},{"revision":"4fa275f6f66131f5beef2e0fc87d8b22","url":"./archives/2023/03/index.html"},{"revision":"466789e07eb5ea31599160d5ca427321","url":"./archives/2023/index.html"},{"revision":"c7ccc62ba8074ea948f65ed459be8cbb","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"6be9998b19946b5e8064d0a540c89108","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"f88e90d34d7c6049ea88b1eb0573d82c","url":"./categories/index.html"},{"revision":"f6b59cd0261a1cfd99290bde5f4aa3b7","url":"./categories/学习/index.html"},{"revision":"39f3c07961f689b68506242a6436de84","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"bc1e0561cc3d9f8fa94345afc36ad1f0","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"bdfda7f1b6f5f0f827c3c90a719804f8","url":"./posts/33107/index.html"},{"revision":"fc6b2f6cfc8120c44902401d80e6b520","url":"./posts/3603/index.html"},{"revision":"c287ab9b6a0745c82c7266dcf2b30342","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"37328ee3e820556a1f29113dccaa7300","url":"./tags/index.html"},{"revision":"f10a62298d88d166178f4a2b3cb6cf8b","url":"./tags/Linux/index.html"},{"revision":"f58a1b7ecc6b51da302fe04d51757d8c","url":"./tags/数据结构/index.html"}], {
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