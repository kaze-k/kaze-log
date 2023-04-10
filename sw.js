const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fdffc7e0b1293cb15d8f6c66bb8a66fa","url":"./404.html"},{"revision":"ec1e271c7e784f42874b9709bcab2bfb","url":"./archives/2023/03/index.html"},{"revision":"e9c106fc05671c9d296f154c6b48262d","url":"./archives/2023/04/index.html"},{"revision":"0128674dbbfac00f750378df5abf3690","url":"./archives/2023/index.html"},{"revision":"9570ad380b15be65d7cb8f66c519db14","url":"./archives/index.html"},{"revision":"ab1556dd32c789ecbc54a0b785aac0e5","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"4fb8e76d51b5425f9bb15b238eb4c54b","url":"./categories/index.html"},{"revision":"3fbcc29f8ce0ea7f96e378c9b0346599","url":"./categories/学习笔记/index.html"},{"revision":"7509b27a23ea646f8681a8b1ed37822b","url":"./categories/工具/index.html"},{"revision":"4e8a3e5fd3ed8747e0e4e820c54f8bc8","url":"./categories/系统/index.html"},{"revision":"4820cbccfea7ecbb62e6df4d3af652fb","url":"./cinema/index.html"},{"revision":"617274aaddf00809c556c8e5132ec0d8","url":"./css/custom/weather.css"},{"revision":"ca050f8b6e32421222659712942b68be","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"e29cb202ca9fa15f10e75c2fa569598a","url":"./index.html"},{"revision":"1b8532b09255e11105417087abe1c333","url":"./js/custom/animation.js"},{"revision":"779fe091f456b25679960d384f7fb6c1","url":"./js/custom/title.js"},{"revision":"2b13f231dfc6c5dfe122bd723af23b2d","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"522076250469e758df12eb537c06aed5","url":"./posts/19711/index.html"},{"revision":"925f129f183ff58d2be83d3d36897b99","url":"./posts/21725/index.html"},{"revision":"e0ebfc098872354cfd7b2eeb2b5c75df","url":"./posts/33107/index.html"},{"revision":"3f289312fb8ee7534d1ca0bdbb5e3b7c","url":"./posts/33510/index.html"},{"revision":"a23603c9186a7ca38e94587598c3e041","url":"./posts/33511/index.html"},{"revision":"3c44f20226ebd83ec74e844f031efc57","url":"./posts/3603/index.html"},{"revision":"a475e3b83eaee1305da45fea44f8b8cd","url":"./posts/50888/index.html"},{"revision":"520e694efaee2e1b06e5896b6480e234","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"a64224c41e823868c0b0cfd5660dbb74","url":"./sitemap/sitemap.xml"},{"revision":"d6c7898e18efad491da2a2f5cc92ec41","url":"./tags/Arch-Linux/index.html"},{"revision":"5d2fb78d8ada4624aa99089294cfc93d","url":"./tags/index.html"},{"revision":"2d85d6c30391dc8bc161ee5a99c6e7d1","url":"./tags/JavaScript/index.html"},{"revision":"ba3405b639f96f277e8d50cb2a5574e2","url":"./tags/Linux/index.html"},{"revision":"4ac4d33e7c1850378e062e0cb69f332a","url":"./tags/Windows/index.html"},{"revision":"026aa58029bb68787a1c67761c13d934","url":"./tags/双系统/index.html"},{"revision":"9f1ee92737ecd5f92057b702481dc07b","url":"./tags/数据结构/index.html"}], {
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
