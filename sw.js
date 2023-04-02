const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9bc49d4ceb4b8f293e08a57f87294e26","url":"./404.html"},{"revision":"66f80764fcbcc7474fca2bb264402a3a","url":"./archives/2023/03/index.html"},{"revision":"e8100ff722c1d00a29846a10bcfa281f","url":"./archives/2023/index.html"},{"revision":"4848dceaff8e8e5aad2bd62053e5d833","url":"./archives/index.html"},{"revision":"e19005fc169aefa9221dca77b140ea09","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"cb381e3d4ca23d2731d06649af846bf7","url":"./categories/index.html"},{"revision":"05c050e95ef4f7bcf6c448e5d90f8122","url":"./categories/学习/index.html"},{"revision":"14810286dae13f091dab231ce767f119","url":"./categories/系统/index.html"},{"revision":"6a086a7cc4ef83a507beff612340e714","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"9f997f7035944d00357355c997e98077","url":"./index.html"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"1f3a4fdc85475bbb5da137f42ac64769","url":"./posts/33107/index.html"},{"revision":"141db90195311100cabbffbbf8f62e75","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"f1d49f46846d5008a9a13a6b3bc3d524","url":"./sitemap/sitemap.xml"},{"revision":"a91d704c9123f37e607f3bc2fa8e7563","url":"./tags/index.html"},{"revision":"5047c04eccd994fc39529239eca2174b","url":"./tags/Linux/index.html"},{"revision":"d921e3d58f5366caff5520e2c7cda506","url":"./tags/数据结构/index.html"}], {
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