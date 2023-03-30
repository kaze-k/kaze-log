const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4921ec98fd2b5bee2e63b57a2308490b","url":"./404.html"},{"revision":"3e5b95bc31d61edcdada366ef3b9d964","url":"./archives/2023/03/index.html"},{"revision":"fad8f71ca347063159b6cd07f53c1ae0","url":"./archives/2023/index.html"},{"revision":"f53fce74adede0eb5a75b721c0eb1da4","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"d313144bd51e835b7b155306fb5d973d","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"033ae40db3f02c48a6e0d32e3ebf71a1","url":"./categories/index.html"},{"revision":"ca29af94d1b1d384fc69120eb827da23","url":"./categories/学习/index.html"},{"revision":"ead28c4b11a737723c69df6f1705e6dd","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"4dedf86ea14a3a55b78300b1b7a1cac5","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"bed28bd319a8912008c398a3cd2d14c5","url":"./posts/33107/index.html"},{"revision":"24f246dcdd375146af77939a5e32d9cb","url":"./posts/3603/index.html"},{"revision":"000c617ab4e8f887ddd296e6855f5fc0","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"36902f66735873b6da65f03c3b67ab92","url":"./tags/index.html"},{"revision":"13b1e63b012a87550fd1228a6ede42c4","url":"./tags/Linux/index.html"},{"revision":"23d58347555d84393a3089a5541524ff","url":"./tags/数据结构/index.html"}], {
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