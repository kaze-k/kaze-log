const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bb24204c0f25a9bfe0ac130142ee8d7b","url":"./404.html"},{"revision":"ddac85a43b208c20f2aea8f7213951de","url":"./archives/2023/03/index.html"},{"revision":"36071b2a3381f5e57a5edf55721d2718","url":"./archives/2023/index.html"},{"revision":"fc14b8af87f3ee36c5d725389cdcb67e","url":"./archives/index.html"},{"revision":"45081ae9c2ac024d5223ea9662ab9f4f","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"3215b9a1f517d8454573fa723c40654d","url":"./categories/index.html"},{"revision":"0f688489961198c02351bbaf9e3081f6","url":"./categories/学习/index.html"},{"revision":"9b8f15a50f678075811b216c0f003134","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"9c9947305458e772d9372aeb62f4777b","url":"./index.html"},{"revision":"8802f80cfeebe079988e21f401ece84a","url":"./js/custom/title.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"12f787516d3f353c38cf5c93fcddf281","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"584554846801b77cf7e123d963c43d01","url":"./posts/33107/index.html"},{"revision":"439a603218ac115b0416ba3fbfb3f7ca","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"f1d49f46846d5008a9a13a6b3bc3d524","url":"./sitemap/sitemap.xml"},{"revision":"ccf8e62db3af5473ac9252b7218a0258","url":"./tags/index.html"},{"revision":"0e3e725d2d502f22b211ddbe3150f2f9","url":"./tags/Linux/index.html"},{"revision":"a12295b72965be4663b1b294244a2636","url":"./tags/数据结构/index.html"}], {
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