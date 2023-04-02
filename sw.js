const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2f07e22e580d84078a0c3a9f87ffe4df","url":"./404.html"},{"revision":"c536377d9a96f90205863ae0601add25","url":"./archives/2023/03/index.html"},{"revision":"0758771f37fbdcf8dcdd2780471ec609","url":"./archives/2023/index.html"},{"revision":"32a94cd41d1e2624b38c13c0e672f1af","url":"./archives/index.html"},{"revision":"ed0fc5a14bfa110eb301374089a59c58","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"a851f51a1b062409eef2f3b0b447159d","url":"./categories/index.html"},{"revision":"9a64afd8aaba51b9679815e1cd0974c5","url":"./categories/学习/index.html"},{"revision":"915bda7fe4e778f20ecdd7341e285262","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"3f492f22b16f562ae8855dd5f5062b8a","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"a5f6ad55140737be991114c4eb11dcbe","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"35954e471cf294de679cdb6b16b3949d","url":"./posts/33107/index.html"},{"revision":"c929b15ebca631809c0e9df4411ade34","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"84418d16e05a33b14104584b28fb3b8b","url":"./sitemap/sitemap.xml"},{"revision":"3c92a4a1863115a93404c84ef12c8c9d","url":"./tags/index.html"},{"revision":"847fdb46bb75985758550e5ddc227dce","url":"./tags/Linux/index.html"},{"revision":"c438fbcb309891ef6837f50b512251e0","url":"./tags/数据结构/index.html"}], {
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