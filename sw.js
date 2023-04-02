const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"cf8181774d6c4c63435f1288ac43e2ee","url":"./404.html"},{"revision":"a9012a52b9dc7c3699410f5b0028bbf3","url":"./archives/2023/03/index.html"},{"revision":"615c861edf0338e6f749b1103d9d38b2","url":"./archives/2023/index.html"},{"revision":"93e8f953a5e96592eaafc0074738b1aa","url":"./archives/index.html"},{"revision":"6a9e8090a6ce473281cdab24319ceaa5","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"1dfe15eb3a9bd2ff914472575b6677a3","url":"./categories/index.html"},{"revision":"5d8db7f2aab60683f2a74542a5811b26","url":"./categories/学习/index.html"},{"revision":"5a122f1c630bdcb1727d07f800c577b7","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"a040ee19c49e419457b76ca4b1dc58cd","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"c3b9538cb25e4cf1a772176c44b1260b","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"335424811d8d5a8b632bef395ca4215b","url":"./posts/33107/index.html"},{"revision":"b94c7adbebf54e1eb7006547a8d974b4","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"c3c24488852c6bf2aae6c9d6c9115e5a","url":"./sitemap/sitemap.xml"},{"revision":"22f05da06b343cbdc1fdcee82399f447","url":"./tags/index.html"},{"revision":"ec1c7f62761c1bde4601a679e00fd730","url":"./tags/Linux/index.html"},{"revision":"5bc640b306b9389efe4963fd6e7212a4","url":"./tags/数据结构/index.html"}], {
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