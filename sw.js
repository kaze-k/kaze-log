const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3eddb31f331c6bc9b88106cb66387303","url":"./404.html"},{"revision":"84e466dfabbb2a42030fd13f9650009f","url":"./archives/2023/03/index.html"},{"revision":"8db488b72739d189846d6c5a9ff97dbd","url":"./archives/2023/index.html"},{"revision":"30de0fd070dd6ddd679e647503041d2f","url":"./archives/index.html"},{"revision":"99f8f3151b35f8b49151151e8ae8031d","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"995f1d51f02596fe1e5cbd7012ea2147","url":"./categories/index.html"},{"revision":"aa17c252dcef94bfec82b6593b039703","url":"./categories/学习/index.html"},{"revision":"f4ea7b6970399b7623640fa19176111f","url":"./categories/系统/index.html"},{"revision":"e6e9ce3eda0c5cade2f66d8f45390333","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d833418330a1e99e7c0f8c93e2fe4fb5","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"289e0b0fa716cb36ee1e076dc77bb169","url":"./index.html"},{"revision":"5643b4af2c5a66aa15ac760f2e9762e4","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"f684e84815a666aee866a03602489d51","url":"./posts/33107/index.html"},{"revision":"3d2f6139f1181cb642cfd89f61968c60","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"58ee026f8a067afe86be0f13a9c15c42","url":"./sitemap/sitemap.xml"},{"revision":"cda8b44e83fad40dc26629f04bab246c","url":"./tags/index.html"},{"revision":"a182427b404ce6a986a39aae6fff95d9","url":"./tags/Linux/index.html"},{"revision":"33e1f8e5da46d4c279bee99597620397","url":"./tags/数据结构/index.html"}], {
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
  }),
);

workbox.googleAnalytics.initialize();
