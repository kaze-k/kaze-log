const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0ff3dace4988d09d20d256d99415c49e","url":"./404.html"},{"revision":"5b5bb84fa1e2049d25a32bacfbf3fc55","url":"./archives/2023/03/index.html"},{"revision":"86ae3b408b1f2f7c1aefcece26ca5b21","url":"./archives/2023/index.html"},{"revision":"18783f452fe24c5c9863535b71115877","url":"./archives/index.html"},{"revision":"3e8adb17a7d630c364f17c4fc878480c","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"1feea06d202a28f8ae01d9ec854c2b1b","url":"./categories/index.html"},{"revision":"dc82c65d71b111d624e7b47d9a74322a","url":"./categories/学习/index.html"},{"revision":"eebbbcd1ab87c1f3605f7d3c35b32612","url":"./categories/系统/index.html"},{"revision":"a99c67548d3d92f713f9202a1dcc9f99","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"173447c535044b751a56433d2c78e99b","url":"./index.html"},{"revision":"2b35f6dbcdaf56298e5f0512804b3c3d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"64cbe524aa82da8da8f5bde32327bec3","url":"./posts/33107/index.html"},{"revision":"402b08f79efa7ada1b65342d1ce0c48c","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"8425a46f54668b23be8f48462e167e5c","url":"./sitemap/sitemap.xml"},{"revision":"8f4217e64b7a7d5401e9455abd56c4c6","url":"./tags/index.html"},{"revision":"60ebcd42dee3226e62038be22394414a","url":"./tags/Linux/index.html"},{"revision":"2c2ad67a6b1e6ad3538008222023e95c","url":"./tags/数据结构/index.html"}], {
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