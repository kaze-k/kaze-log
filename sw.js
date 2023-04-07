const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"decb6cbf7223986e9b8912177550f1cd","url":"./404.html"},{"revision":"89872501e0c5497641b876a025bd2af0","url":"./archives/2023/03/index.html"},{"revision":"b18a681dbff65730555a9ed0767b553d","url":"./archives/2023/04/index.html"},{"revision":"38f1bb0ffd7552586919ff6cf325b350","url":"./archives/2023/index.html"},{"revision":"8b5268e748eccbdb7772daeb7a10ffd2","url":"./archives/index.html"},{"revision":"d95e67ae95a661c2fa34ea01ae9407bf","url":"./bangumis/index.html"},{"revision":"26fecdfa6b156f722b3c707a09179fce","url":"./bing.json"},{"revision":"2a39ef1147c5315fe256a1cbb057215b","url":"./categories/index.html"},{"revision":"23b689789e02ea4df598270259f0637c","url":"./categories/学习笔记/index.html"},{"revision":"fe924e1797b8f1f4a702e5f9616db102","url":"./categories/工具/index.html"},{"revision":"e6df39450bac70af15bdeaa68d23e634","url":"./categories/系统/index.html"},{"revision":"52d9b896e52cc223a27f3b2ed93a38a1","url":"./cinema/index.html"},{"revision":"093d4f2fa33317c7d84a1688b9a101ac","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5050a977d6bd7c10b4e489f191e78c97","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"a5bc51db09a4ed770fd779a16d40898b","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"8433faf1ade65e4dd7765032572404c3","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"4b670e413cd42f443aa265b35dd712c1","url":"./posts/19711/index.html"},{"revision":"33322bb96b4b2fc4c2d24edab937d65b","url":"./posts/21725/index.html"},{"revision":"5f48816085c6d76e70f93d58bf3890a8","url":"./posts/33107/index.html"},{"revision":"84472d4bc615985472ac55a7e021dd6a","url":"./posts/33510/index.html"},{"revision":"2761d4d836f4edf2ceec94a8b51de0c1","url":"./posts/33511/index.html"},{"revision":"c5345a92361d42635e8c2271e1292ee1","url":"./posts/3603/index.html"},{"revision":"64e31945796d56ba35bea280dd5833fe","url":"./posts/50888/index.html"},{"revision":"9c83ab7c6e86a65272a3b824f43b6463","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"4c6bad2dbd28761a6dd2110aa3fe65e4","url":"./sitemap/sitemap.xml"},{"revision":"cc1cdbebeac11a61cfb31bfd3e5d80b7","url":"./tags/Arch-Linux/index.html"},{"revision":"c7e2aaac598f49cc80dbe01b44dabdda","url":"./tags/index.html"},{"revision":"43ca95dd2cf016c7fcb087143c3355ef","url":"./tags/JavaScript/index.html"},{"revision":"463c36e1806e821332d754881c50ea80","url":"./tags/Linux/index.html"},{"revision":"56eba803363eee6538e042baf626faa2","url":"./tags/Windows/index.html"},{"revision":"c1d7acf57f379d61fdf7766719879105","url":"./tags/双系统/index.html"},{"revision":"6511b2b78389f1f1fb09a5244705a855","url":"./tags/数据结构/index.html"}], {
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
