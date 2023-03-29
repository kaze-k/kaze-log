const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"58b65e0a3597b57b36b76110b6814492","url":"./404.html"},{"revision":"87f9206a2f5ec67d356220ffc41dd68a","url":"./archives/2023/03/index.html"},{"revision":"e2775928639f24ee768af5a1ef627326","url":"./archives/2023/index.html"},{"revision":"4498faf3a88bbc8f26c96ed5713b229a","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"127317345a30755c087e83f7a5c5d68f","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"d2cbbf7486cd0ba62fd3cdb7d5dc2c81","url":"./categories/index.html"},{"revision":"9de33c651b20545432286aae0ed5a326","url":"./categories/学习/index.html"},{"revision":"8ce61127aeb26ac0dd0989359d9068be","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"ae74b910c062b51c3c885f5407660766","url":"./feed/rss2.xml"},{"revision":"6ecc8bdc415b7f9b20a3f60dda9968aa","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"2855b452456e26674ce5786a869663c0","url":"./posts/33107/index.html"},{"revision":"c78565bdb1d3737a2200267695284b8e","url":"./posts/3603/index.html"},{"revision":"2b842149868c6405c8f3101fc96ca015","url":"./pwa/manifest.json"},{"revision":"c3762491a9b44f2673967a890820d71b","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"c52542f1652b8db4b4ce07f93d7ae4e9","url":"./tags/index.html"},{"revision":"e64aabd685e09c5ad5e2baef3f294959","url":"./tags/Linux/index.html"},{"revision":"b6deb20741d3369303cfc18d35b66e3e","url":"./tags/数据结构/index.html"}], {
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