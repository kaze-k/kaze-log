const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"67825631ef69488c0d12c0a81f8f8193","url":"./404.html"},{"revision":"5cdc4b49b5074eeb18574b12bcc2b5d2","url":"./archives/2023/03/index.html"},{"revision":"5accad03f29d5d444266541105862903","url":"./archives/2023/index.html"},{"revision":"ba92780b8910e01f71e4d8f4724e1f73","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"7da5ccec77b8388b26bcd23f409b1120","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"ea06bbdffb931f9460725752d3d651eb","url":"./categories/index.html"},{"revision":"6d2fba2ba90ee46ef62419f7c9880509","url":"./categories/学习/index.html"},{"revision":"180aa07ef9be9128fbbf8b77d051babd","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"8aa80b084971956dd20c45d9dfe9651f","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"32071982a2a8e087782883998aca5d7d","url":"./posts/33107/index.html"},{"revision":"e3dd012fde8838674a393a61fcee3edc","url":"./posts/3603/index.html"},{"revision":"000c617ab4e8f887ddd296e6855f5fc0","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"d952550ab8946966f3d9dd23a2af50f8","url":"./tags/index.html"},{"revision":"7117d2b1b214137b79b27e9f44167f66","url":"./tags/Linux/index.html"},{"revision":"4704cc64bcbeacb739be7f52fc5b43b0","url":"./tags/数据结构/index.html"}], {
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