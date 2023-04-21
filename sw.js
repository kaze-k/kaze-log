const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"30467a17916cf0de5856b20cbf02eadd","url":"./404.html"},{"revision":"f53f2aa9c821f4be1802e1cefb19b532","url":"./archives/2023/03/index.html"},{"revision":"be8f26e3abb13f84b6d66f6529e069c6","url":"./archives/2023/04/index.html"},{"revision":"a79c6ae9b4f8ac81288f6e762ad4004d","url":"./archives/2023/index.html"},{"revision":"b5e2ae3114b30c6c302ba93b986ef3f5","url":"./archives/index.html"},{"revision":"7ca3b21332827d93b847666c6f5f3c0f","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"a44ec013f4e4c342093b0274ad27618d","url":"./categories/index.html"},{"revision":"9d8c7e08a23e13f39b700b3d7847c0c3","url":"./categories/学习笔记/index.html"},{"revision":"02a7d9e6ac6a932f003df49004cc4ae7","url":"./categories/工具/index.html"},{"revision":"738fae52ca14bd73771d6c7beca8b0c4","url":"./categories/系统/index.html"},{"revision":"16ebbcb854a5d82514b4410a44890881","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"2920e0dac0e79035a0e2d02dcae4d265","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4b72e975f91aaf1ded625508f3cc2a97","url":"./feed/atom.xml"},{"revision":"4757f16eeabed20380413b5430a1c6a6","url":"./feed/rss2.xml"},{"revision":"77b616bba5940165a53f3e6b71c175bf","url":"./index.html"},{"revision":"61ff77a88aebdd1b9d7962c355110190","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"3d1aedb399fa77ee85f04d25d38350d7","url":"./posts/19711/index.html"},{"revision":"5113668ad72f2674f88f32d6623e6dca","url":"./posts/21725/index.html"},{"revision":"63f8f9c5a2e0d3013624ca8eb17e76e8","url":"./posts/33107/index.html"},{"revision":"589379ce21c7d65148e9b82a401b5655","url":"./posts/33510/index.html"},{"revision":"2d52340b3adb4fb5a35cf6c0b13ce3df","url":"./posts/33511/index.html"},{"revision":"bdb31b74ba78b39eb2f8a50f0cedd755","url":"./posts/3603/index.html"},{"revision":"6fa31abdf967c3f03a05d553a5225d0e","url":"./posts/50888/index.html"},{"revision":"16297d91005ea375cd6a68e63053d9d1","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a8c9db9405c4291cd6679899bbf01f36","url":"./search.xml"},{"revision":"61fa287ac716ab559ff5b7086fccbf83","url":"./sitemap/sitemap.xml"},{"revision":"26ba3f7888c5ec8165d758be4b95fc25","url":"./tags/Arch-Linux/index.html"},{"revision":"94fc687d8bb08395d5de45d91f24fc92","url":"./tags/index.html"},{"revision":"6b424dee4af8b0241485801576e106af","url":"./tags/JavaScript/index.html"},{"revision":"d3924c614222d72655c429d87cbff344","url":"./tags/Linux/index.html"},{"revision":"5e8fd594f8f7ba23743d5b90d3f92f3f","url":"./tags/Windows/index.html"},{"revision":"d791de4e793d414b0bf37c16ef8398b2","url":"./tags/双系统/index.html"},{"revision":"beee402d2499540f859d1d05ba52830a","url":"./tags/数据结构/index.html"}], {
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
