const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a6228220673be50fefa617c8088efa19","url":"./404.html"},{"revision":"0ccb6317151cb182268cc28d7ff0cac3","url":"./archives/2023/03/index.html"},{"revision":"7024efbc7e5cb6b620054cf61410e352","url":"./archives/2023/index.html"},{"revision":"c943b222bbd9cbb2a87849f8b0bc47e6","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"96c36842de90cc8f03937813b36cf702","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"3711296a8ba9d47e9d46e6ae36173ea6","url":"./categories/index.html"},{"revision":"8a27a8400e867ac51d85fe994e5ac0e0","url":"./categories/学习/index.html"},{"revision":"8211d2640721d2b3557fd8ebcd8677c4","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"d47539e433de0e4209692495a4c380ed","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"50b36e8cc502ca57109302ba8ebf593c","url":"./posts/33107/index.html"},{"revision":"b19b8c8e84874c67d2b9cb0ee71dbe3d","url":"./posts/3603/index.html"},{"revision":"000c617ab4e8f887ddd296e6855f5fc0","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"4ae6bf0de0b442bcf1f12fbc6c03f232","url":"./tags/index.html"},{"revision":"e6bc7b4673e4551d10217ac5ca65847e","url":"./tags/Linux/index.html"},{"revision":"59a209c59661ade39ee9b5e61205333d","url":"./tags/数据结构/index.html"}], {
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