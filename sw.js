const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"addbcbbefb50d2d54b6debe3d8943f1e","url":"./404.html"},{"revision":"3c4ae91b68c731cb95f4912d327e8feb","url":"./archives/2023/03/index.html"},{"revision":"556eaa87e588b4f4ecbd5ae7193189e9","url":"./archives/2023/index.html"},{"revision":"9d434bf6231472f66837b4cc1ff23fc7","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"fdb731eb55a1bdf500ea551b16c070c0","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"b75a938f965da6073b3720267e639551","url":"./categories/index.html"},{"revision":"ac5a79ddd2fd9c8cb97f0146e8e74869","url":"./categories/学习/index.html"},{"revision":"40d903107308087821e47b9482d89dc2","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"65be79bb16c4ae8d2ab76c9eb0c4fa06","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"8fc2585d590faf3540dfd9ead3218d50","url":"./posts/33107/index.html"},{"revision":"8024fb12d002a8f8b0e223a1d4f96305","url":"./posts/3603/index.html"},{"revision":"b1d482bb6b7a5bc6aacb9c95bc1050bf","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"89269a9fb81fc14a6d48e23a573905e7","url":"./tags/index.html"},{"revision":"0866f78e14b7d55c903a44a6bc205c70","url":"./tags/Linux/index.html"},{"revision":"2fe23b1a43cb5956d9ec3b267666dbf0","url":"./tags/数据结构/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// jsdelivr的CDN资源
// workbox.routing.registerRoute(
//   /^https:\/\/cdn\.jsdelivr\.net/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'static-libs',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         maxEntries: 1000,
//         maxAgeSeconds: 60 * 60 * 24 * 30,
//       }),
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// )

workbox.googleAnalytics.initialize();