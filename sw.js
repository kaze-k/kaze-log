const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"695608363dbe9ed16d80e500cfe1e48e","url":"./404.html"},{"revision":"c39bd6d495542f21a40d08bd8398abac","url":"./archives/2023/03/index.html"},{"revision":"e9f9a6845591f65777bba7cd32b40dfe","url":"./archives/2023/index.html"},{"revision":"f23e536c6c56dacb025a67b9996acbdd","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"816113e96db7474b30621c727b4d579e","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"a7ef9a10552068a0151a76f2e7dfce08","url":"./categories/index.html"},{"revision":"bd9386384335a248ebcf36efc96939ff","url":"./categories/学习/index.html"},{"revision":"3d371938a6b4a4cb8c7d7f62e62f95ef","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"4e18e27491f1b05e0a5fb8b9267bafd8","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"8d1e8ce4643888d3cbf66c4012063a4f","url":"./posts/33107/index.html"},{"revision":"db8aa3381c5f0a818805308fcd0c6ea8","url":"./posts/3603/index.html"},{"revision":"000c617ab4e8f887ddd296e6855f5fc0","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"1488520c47e7693a592afc5adfdf8bfb","url":"./tags/index.html"},{"revision":"d810a0d755e8bc3b7bfc2c6852e96e10","url":"./tags/Linux/index.html"},{"revision":"7d4c7a7717213901bdcfc2cd6d15f754","url":"./tags/数据结构/index.html"}], {
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