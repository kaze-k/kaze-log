const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2a10bd8168b0c134037c266eaf242058","url":"./404.html"},{"revision":"79ea66500c15f4aacdca7c60160dd1a3","url":"./archives/2023/03/index.html"},{"revision":"98b6e6480d943f1469a35d0731711cb0","url":"./archives/2023/index.html"},{"revision":"334f7c212956eb409f8dbac369774e23","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"d2e8673b0c32a2884be7a9a1d3bf259e","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"34a6350984066ec99e28c0d0d2ca01a7","url":"./categories/index.html"},{"revision":"928486334cb92312433bafe330c49e83","url":"./categories/学习/index.html"},{"revision":"bf5273dc05a338267ad795c0607658ff","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"82c20cdc6e98818036c27d20d7a2a195","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"44440e8f56bb59ac52a59d238bd90114","url":"./posts/33107/index.html"},{"revision":"1af0976607c3ac41a9347c1144368d4c","url":"./posts/3603/index.html"},{"revision":"77d78fa7adf6d9a00e01bd1daff95a73","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"7b348d4f708c80627b0ee1afa15c873e","url":"./tags/index.html"},{"revision":"7ed111992bcbeda17257942cf27e4ced","url":"./tags/Linux/index.html"},{"revision":"73edea73bddf41b2615cdf04fc7251e9","url":"./tags/数据结构/index.html"}], {
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