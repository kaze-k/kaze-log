const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"cbf67f1f54dd6999a957db21b4f533f5","url":"./404.html"},{"revision":"e4ab79ae2dda4234b758d14c8ba2930c","url":"./archives/2023/03/index.html"},{"revision":"43f5a00944c9fd1badd6dc6395ba9bce","url":"./archives/2023/index.html"},{"revision":"7028d149193e426f1a5b7f9b58de8136","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"262de595299d644c1854ed278443f1f7","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"d13f811ac90c31e1f510ec83d0ae19d2","url":"./categories/index.html"},{"revision":"bb4f17ac8aba476d4c9806dce0bef08f","url":"./categories/学习/index.html"},{"revision":"53fc1846962cf5ee5440dcc6bf81edc4","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"9281c9bc9696b1f558ecf4ecd2a7fdf4","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"8642e1b3543d962e31980ca94ff0c4c1","url":"./posts/33107/index.html"},{"revision":"359db9f955033a78e3fb4d38248bc87e","url":"./posts/3603/index.html"},{"revision":"000c617ab4e8f887ddd296e6855f5fc0","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"76a7c18d1a3fc9e5c13ad5c7398ab08d","url":"./tags/index.html"},{"revision":"7fa92a7931fff336ad34bdd7a17debf8","url":"./tags/Linux/index.html"},{"revision":"b264178aa09cd87b8934af80fd62f5d5","url":"./tags/数据结构/index.html"}], {
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