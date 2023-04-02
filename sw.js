const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"185070edef14bed80407ea6914f3f175","url":"./404.html"},{"revision":"2a8369e960a6ea627510f8e750971548","url":"./archives/2023/03/index.html"},{"revision":"3daf9fca8f34e76940ea38bee33766ab","url":"./archives/2023/index.html"},{"revision":"aa49f07c0ee6dc7f6ebc5fd16ceb90f6","url":"./archives/index.html"},{"revision":"396b357d9ad792e4527b548d72f60e33","url":"./bangumis/index.html"},{"revision":"ff8cef542a86f43a3dbaa9447a6494cc","url":"./bing.json"},{"revision":"883c3f82309273a6e214b820e7921ade","url":"./categories/index.html"},{"revision":"25895ae04ef8b340843f0cbd345fbb79","url":"./categories/学习/index.html"},{"revision":"1168e2edee1f1cc225b7a4f2870362d7","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58758591b9de0386ce6596b93fbb69c7","url":"./feed/atom.xml"},{"revision":"6c917bb1aad80c799fbe58fdaa37f720","url":"./feed/rss2.xml"},{"revision":"21e2d1adcdc39981028b96d3ae1f4e90","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"2a6e4f429304c20df0f0d8f35350e65d","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"53185aff30aefb609c8213e6acc6a581","url":"./posts/33107/index.html"},{"revision":"6c058127c01e74a87957c9d86183cc3d","url":"./posts/3603/index.html"},{"revision":"02375ea0bdb97eccc3643934fb839f54","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"c3c24488852c6bf2aae6c9d6c9115e5a","url":"./sitemap/sitemap.xml"},{"revision":"0e5d633651df0aae422cc94d3f43bae3","url":"./tags/index.html"},{"revision":"f82421d8107135a3daa4ebc94b03c9d8","url":"./tags/Linux/index.html"},{"revision":"ac8325e601e745e645d6a65d5ba918a2","url":"./tags/数据结构/index.html"}], {
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