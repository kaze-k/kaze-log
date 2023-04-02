const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2f8013f7272c2e585538fee9bd729e16","url":"./404.html"},{"revision":"2b5dbc2ad0d075a78bf0dacd26bfad41","url":"./archives/2023/03/index.html"},{"revision":"326e36072aff63a6cb65e61334b2525f","url":"./archives/2023/index.html"},{"revision":"c7afa833099467d4f07c7f6ba9e8b1ac","url":"./archives/index.html"},{"revision":"a35d9314c6b2a809367986e4bb004a7e","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"7c840deb9ef6148ea47e838b800f2526","url":"./categories/index.html"},{"revision":"05d26c2bca47dca776eeb89f2d2dda62","url":"./categories/学习/index.html"},{"revision":"6947a75cb825d446b3775147f4ce2ff7","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"17d95788e4df78440da20acd32e2b168","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"be1d303d5afb3854ccc33a819094310f","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"5280c37bd38fa1fee75d65a221b5bcf6","url":"./posts/33107/index.html"},{"revision":"aa90095f1baf3d79e1ec816bfa23e3d9","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"c3c24488852c6bf2aae6c9d6c9115e5a","url":"./sitemap/sitemap.xml"},{"revision":"5781ed1c4b2125ac1e1ef90f3628ef2b","url":"./tags/index.html"},{"revision":"968c8083ece3064565f305933dcdb90f","url":"./tags/Linux/index.html"},{"revision":"f1f3a8ee2688de34634d65be544b5bbe","url":"./tags/数据结构/index.html"}], {
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