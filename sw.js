const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ace7ef8523acb0b879944b71147491a5","url":"./404.html"},{"revision":"c8c60db3dee7f31c836ca1bfa99fce37","url":"./archives/2023/03/index.html"},{"revision":"e8cc83582f3f31e01d6d322880a2e5f4","url":"./archives/2023/index.html"},{"revision":"c36f59c7beec9cc10cff67ea746701cd","url":"./archives/index.html"},{"revision":"eadefb602cac1001f727b0e2bb3dea78","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"88fcfbbcda649349e421076301bf18ce","url":"./categories/index.html"},{"revision":"b37a4c3aa665a9daaa7c1bb40151a1ab","url":"./categories/学习/index.html"},{"revision":"ba890f415fd961843dc7c56c228ecf0d","url":"./categories/系统/index.html"},{"revision":"f7381b0ae9f540eca6947c8438224825","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"e5728f7c08f3c487468218be2a9e577e","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"5bdc801220a39f9a34565a626e4ce1f2","url":"./posts/33107/index.html"},{"revision":"9be7b989831c933fcf9d7452f405589c","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"4b4c9e431ab297b57a9f2f9006ea9bef","url":"./sitemap/sitemap.xml"},{"revision":"e305c889d9f3f3f8c38864f0bd14d81e","url":"./tags/index.html"},{"revision":"4a76824a5e6b9c03b361a63849d37b12","url":"./tags/Linux/index.html"},{"revision":"0782a2e81ed88361c0f1fd3d8764ecbe","url":"./tags/数据结构/index.html"}], {
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