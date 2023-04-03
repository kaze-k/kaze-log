const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8d0002196cb0f304247746cae2a6d7df","url":"./404.html"},{"revision":"39f03f26ded9ff29f40995740c156eb4","url":"./archives/2023/03/index.html"},{"revision":"be6cb67e8b740a9e647b4f2f92df16a5","url":"./archives/2023/index.html"},{"revision":"0bf1d1302388385ab6743804f97ea9ba","url":"./archives/index.html"},{"revision":"7e995f5c0b91cb2ae9036e90d0a6060c","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"603987f758bdf1fb4c557341607f3e03","url":"./categories/index.html"},{"revision":"39e1bba45843f6b635d29bc3b1c84291","url":"./categories/学习/index.html"},{"revision":"73878c391cb8d308ac7366518d7a87fe","url":"./categories/系统/index.html"},{"revision":"a5227d96cc2a7160c820b64d437b3a7c","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"c0f0783e09ca9f63647ad7f55c1a0472","url":"./index.html"},{"revision":"2b35f6dbcdaf56298e5f0512804b3c3d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/33107/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"cc994e1a54f4e4f96769457352881f4f","url":"./sitemap/sitemap.xml"},{"revision":"8298ab1b6bbcc0dd71292369d0a361bb","url":"./tags/index.html"},{"revision":"58c964014904cf98f55f68b3bd09147c","url":"./tags/Linux/index.html"},{"revision":"704b671eeafd66e7b0f933d3a5df1dc1","url":"./tags/数据结构/index.html"}], {
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