const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"29d83f38dfeaca8e7de73d967377468c","url":"./404.html"},{"revision":"5a370723d8d74d982f01b99493bafba7","url":"./archives/2023/03/index.html"},{"revision":"5829db18d312685e4e67ff46b6f2a3b2","url":"./archives/2023/index.html"},{"revision":"27f408df4892ea6042984217550caa5f","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"2a69b2da74f28d09420b0153ff570a0b","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"ba3d246c41644a0ab33694c0572b97ce","url":"./categories/index.html"},{"revision":"ba7271b0892828bf5bd8638ad7ac295b","url":"./categories/学习/index.html"},{"revision":"31c25500643a547e04f256f6523dc00b","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"e9c47400d5d6ea9d4e5bd60af88541e0","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"b4b57bc55df4984a2047d1e01da50e39","url":"./posts/33107/index.html"},{"revision":"3d5387ae38764d4d1405c96291b0fafd","url":"./posts/3603/index.html"},{"revision":"b1d482bb6b7a5bc6aacb9c95bc1050bf","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"e2678466e76101a291862516fedc536f","url":"./tags/index.html"},{"revision":"4d3de2421e4c20138780eef7e496625a","url":"./tags/Linux/index.html"},{"revision":"6b1d15b57b47caba08cd79cc49bc850a","url":"./tags/数据结构/index.html"}], {
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