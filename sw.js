const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fccaebf5a45bbd2c2ee28efd1f33babb","url":"./404.html"},{"revision":"b89154d40b21d8a9587d5fccc6a260f6","url":"./archives/2023/03/index.html"},{"revision":"ae1216fac601391cbd338095499b6ae0","url":"./archives/2023/index.html"},{"revision":"c596e20e20a3960b04288f1eb4e0c70d","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"111531e1ced7eb90803be6dba3c057b1","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"bd06c67de82b2ad254cbea6dbb0f6b91","url":"./categories/index.html"},{"revision":"209e2427de8ff13a62d0e9c9897508e6","url":"./categories/学习/index.html"},{"revision":"045472f80f7a06d7b475a6ce9d499c61","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"0177c3d43ad6591b09737ca3f10bbe12","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"baae4dee81ec1e435ff9f5a6b73d1df5","url":"./posts/33107/index.html"},{"revision":"d7e8ae052a043d7d96f9689d039dc8ea","url":"./posts/3603/index.html"},{"revision":"b1d482bb6b7a5bc6aacb9c95bc1050bf","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"16cd213ed1f29ce695ba717cf1aee18c","url":"./tags/index.html"},{"revision":"b7c24f2d9f70f2a313a065957d36211a","url":"./tags/Linux/index.html"},{"revision":"c932c24e06b4e90a6e7eb63494e7cb7f","url":"./tags/数据结构/index.html"}], {
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