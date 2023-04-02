const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"24d3fb83a884fadf5d7e71232cb84a05","url":"./404.html"},{"revision":"557be8d5bf0cb11bdc1dd6b2d0fe5cfd","url":"./archives/2023/03/index.html"},{"revision":"3d187c43e065728d5a92ad547fd1188c","url":"./archives/2023/index.html"},{"revision":"f27fdfc7ae7b240f592bf756db478718","url":"./archives/index.html"},{"revision":"56346cf4d0d6ecaeea9bda619ac982c0","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"289e8ff930ab25f92c6206e7a6433196","url":"./categories/index.html"},{"revision":"53b5c10ecbf886fd1be8b6375dd15957","url":"./categories/学习/index.html"},{"revision":"cf2b919e031ba1753ecfeb16348b0dd6","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"3cbc91dea87d24568241d3b7778a624c","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"63a593bf279377e5a9b81a39cc66469d","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"a4f372fbcf3671e35063aeb99830ccf0","url":"./posts/33107/index.html"},{"revision":"e5d40fa85b6570824570017115b3a1b5","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"c3c24488852c6bf2aae6c9d6c9115e5a","url":"./sitemap/sitemap.xml"},{"revision":"d808305df93a80f7c0b3a0d8edf3d188","url":"./tags/index.html"},{"revision":"ef596eab2c95a74f878c35a91a7b1235","url":"./tags/Linux/index.html"},{"revision":"97ba11dad65640d56a9ceb6ec3751e51","url":"./tags/数据结构/index.html"}], {
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