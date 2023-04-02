const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b29c4d9d9437db9c3576d52cdd79c37a","url":"./404.html"},{"revision":"5ea9d8592b3da34a9a839df67493734e","url":"./archives/2023/03/index.html"},{"revision":"615552d97e003a7a5356adfaafc196ed","url":"./archives/2023/index.html"},{"revision":"7ba370d63670b9d8c85fe0f7e7709594","url":"./archives/index.html"},{"revision":"4f83bbd04559ba84dfbf7ac40ea4b880","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"3524ca0e12f0bfb37c595536aa60434c","url":"./categories/index.html"},{"revision":"f707716bae9e6c5f88297cf90cfd95c4","url":"./categories/学习/index.html"},{"revision":"472f49ef1dc74e767bc99d9d2f1e08e3","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"635e5b4d17db6189b8e69a8ee3ff9a7a","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"12f787516d3f353c38cf5c93fcddf281","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"30ef261b59e64623d9dbd00ac39092a3","url":"./posts/33107/index.html"},{"revision":"e9a57c797fbd10f367f56b7bcedbd6d5","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"c3c24488852c6bf2aae6c9d6c9115e5a","url":"./sitemap/sitemap.xml"},{"revision":"9f9f820a680e1871a7adf3f6e4eef864","url":"./tags/index.html"},{"revision":"e1e0aa4c4e9a934275826c6643883e9a","url":"./tags/Linux/index.html"},{"revision":"1c3b3925ada7fe0329a42d256988b75e","url":"./tags/数据结构/index.html"}], {
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