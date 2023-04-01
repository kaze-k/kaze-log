const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f1b849ae289d5506686bbd2ddd68605c","url":"./404.html"},{"revision":"5e90ecca87997ab8857657dc64db3c66","url":"./archives/2023/03/index.html"},{"revision":"a2d818cb18df6230515e63a39bbc4b01","url":"./archives/2023/index.html"},{"revision":"ee024f40d4e6a4ab106ce771337a3f70","url":"./archives/index.html"},{"revision":"bde6674882639764e07b3f5cf6cfbeab","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"c630e58104fd8e9bf5c6235212b5a070","url":"./categories/index.html"},{"revision":"a9aac072f53c29c09edeb3e394820fbc","url":"./categories/学习/index.html"},{"revision":"8af1a333f55a43ec71a51cdb7e01b60b","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"22e23d2ca5d99224dfb4e338b9842513","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"457cdbe8c2b8168951d9a22c16f353e0","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"692fe746651a02d978231a18951f9ec6","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"5fad8f41a75a61692ca1073bde3b25d7","url":"./posts/33107/index.html"},{"revision":"eb85d6331e4f9ec2838eeb0775849a11","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"60dec32b667f46c32fefa66876bef6e6","url":"./sitemap/sitemap.xml"},{"revision":"78f007e89f18bb4694d9e3900afbd22d","url":"./tags/index.html"},{"revision":"66559b95e2ff1c396cc493e762375624","url":"./tags/Linux/index.html"},{"revision":"58bda887b44d49fcf2253d0f5c658153","url":"./tags/数据结构/index.html"}], {
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