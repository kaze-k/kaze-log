const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4cd6c6ccab2ce571d3fe2853a0fddda5","url":"./404.html"},{"revision":"239c5dfdbbc73b3547e90264977e1cae","url":"./archives/2023/03/index.html"},{"revision":"59fe28a89b041187e436e20406e7678d","url":"./archives/2023/index.html"},{"revision":"1be74cab4e605b38ce376328be559d1a","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"456d68e02934dceaec5a23bd8b21991f","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"c37446ae6a873cd0b50f737c183da6d2","url":"./categories/index.html"},{"revision":"c0b8bebf18701d4e94d580b62472840c","url":"./categories/学习/index.html"},{"revision":"d3e0e6869634cf5909b87a20b9574bb2","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"511e744ba932c5d7f4c7d860f076c3ca","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"c287ab9b6a0745c82c7266dcf2b30342","url":"./manifest.json"},{"revision":"a1d246d8e2673c25fa703a49b3fde0e0","url":"./posts/33107/index.html"},{"revision":"e6259114851d3349a08caffd482e6cd1","url":"./posts/3603/index.html"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"b3a6a6d4b32150ea33d7c5e3d43f1670","url":"./tags/index.html"},{"revision":"9176273f1692ddfae21d125d79d9a731","url":"./tags/Linux/index.html"},{"revision":"4b5baf732d03f3c9c720edf49eb29a27","url":"./tags/数据结构/index.html"}], {
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