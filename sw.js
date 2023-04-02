const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"703734c4e17c931e8566b3095f58fc41","url":"./404.html"},{"revision":"d9629342f3adcb9a7e3360d163771875","url":"./archives/2023/03/index.html"},{"revision":"c08bb08e3803bece2c87383416e86264","url":"./archives/2023/index.html"},{"revision":"4e37392ca3e35bd64b303bd9b0ee1592","url":"./archives/index.html"},{"revision":"b0c76d93440e2de9a5c305aeb542777e","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"86b7f3afd8e1b617964b77d103b7a55b","url":"./categories/index.html"},{"revision":"fd11b782e96b389b32ee49048d1bbc25","url":"./categories/学习/index.html"},{"revision":"9e4871a48a652de4c4934410c39c929d","url":"./categories/系统/index.html"},{"revision":"1a6df1c8c4a16058a1791f730627997d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"7fc4532db383f8a5a37a2efd06bc059a","url":"./index.html"},{"revision":"3a21f7cfb6ad81356d25649756318c85","url":"./js/custom/title.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"12f787516d3f353c38cf5c93fcddf281","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"b565f1e3d9a3067cae3ea1a110ab8e84","url":"./posts/33107/index.html"},{"revision":"8b286d7719c5667ba47ad1a510104251","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"f1d49f46846d5008a9a13a6b3bc3d524","url":"./sitemap/sitemap.xml"},{"revision":"334588218ebe7d8f46f96cf08491306c","url":"./tags/index.html"},{"revision":"53ca8e71fb31130061687d722cfbef1a","url":"./tags/Linux/index.html"},{"revision":"a9c67efdbed5c6568b23081b9f656568","url":"./tags/数据结构/index.html"}], {
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