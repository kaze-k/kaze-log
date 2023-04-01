const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"270f5a03d3a1e9811863946cab8cb00f","url":"./404.html"},{"revision":"a273f771cba253304fa97c9c0b67617d","url":"./archives/2023/03/index.html"},{"revision":"5d067699509260be148c63dec9e290f5","url":"./archives/2023/index.html"},{"revision":"e5dce096a03d5aceb344d490832b2563","url":"./archives/index.html"},{"revision":"ed413fb0a9924bba67d824f1f6fa4738","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"9c3800c29741e1b1a62b3503a00b4d9b","url":"./categories/index.html"},{"revision":"a9cad3da4c4f9a34fee17b7ba2f2b312","url":"./categories/学习/index.html"},{"revision":"d8c0be7c90f8c012e22b1516495dabd6","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"6e770c8f1728bb8a14f068e9f34bc636","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"3fba0ab0fa6a52d3004a011907618c41","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"2bf849306673d9f12a06b1a5ae7a3975","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"635a72a67aa8e5faff891fc9284822d5","url":"./posts/33107/index.html"},{"revision":"bc3902456c104a76781062e68cec1ea7","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"60dec32b667f46c32fefa66876bef6e6","url":"./sitemap/sitemap.xml"},{"revision":"a77245bcc3faa9372b541666610a913e","url":"./tags/index.html"},{"revision":"f77e4e938dbe927c90ff394357c9965a","url":"./tags/Linux/index.html"},{"revision":"0e5f6943ed930c50fbf58704c95ca888","url":"./tags/数据结构/index.html"}], {
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