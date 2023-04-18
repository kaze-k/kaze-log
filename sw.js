const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0c156ce126d017ffe372291c7423bae9","url":"./404.html"},{"revision":"d395063b08202cd3286cb3d3d0c65d90","url":"./archives/2023/03/index.html"},{"revision":"468c3e448b8c6a39dbf60ebeb0cc5560","url":"./archives/2023/04/index.html"},{"revision":"707e4fe166a54cd148f6217855375e46","url":"./archives/2023/index.html"},{"revision":"c47a56fe952580f1c622575cf37840b4","url":"./archives/index.html"},{"revision":"fd14e16fbf20921cdc6d20c59ccaf7a1","url":"./bangumis/index.html"},{"revision":"4767fe0e36ea533eaeed459408d68724","url":"./bing.json"},{"revision":"fb5e2514ee0f1414ed07868f761e89ce","url":"./categories/index.html"},{"revision":"adc286cbded5aa1db7e47e375c8877cf","url":"./categories/学习笔记/index.html"},{"revision":"d56ce16b3862b47be7ed7da9c0596cee","url":"./categories/工具/index.html"},{"revision":"a33ce7377614c187bfa7d5e2174f22f0","url":"./categories/系统/index.html"},{"revision":"8d10b3ce213c96d2922dc38c89694c15","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"8c0298c4ce07269227d3e65fbcbd1543","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8bcd74fadc4f98b6b69176362fba2610","url":"./feed/atom.xml"},{"revision":"2093128b2d6ca05b9d5d6ffeb9374951","url":"./feed/rss2.xml"},{"revision":"1f4f1f4cf7caca6e510c359ddae76918","url":"./index.html"},{"revision":"b571003a23763a4ec10ae4d1986db387","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"0aa8f85bf2167831c06e445192ee0502","url":"./posts/19711/index.html"},{"revision":"ae7d0c3f6df14a09887ce377c6b48cb4","url":"./posts/21725/index.html"},{"revision":"cab0a5d6339ae5c9918ead9811d4be55","url":"./posts/33107/index.html"},{"revision":"35c4abbca094dbb7d63a637700b55d29","url":"./posts/33510/index.html"},{"revision":"4664e23e9d48bc749c0a41a5fb0cfa6e","url":"./posts/33511/index.html"},{"revision":"98c08ec75798222020b10c9aaaa35451","url":"./posts/3603/index.html"},{"revision":"ba49b97d39eb7bf82bf80cdd9eb66a08","url":"./posts/50888/index.html"},{"revision":"32501e38899376699b2397dcf3930095","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"39015fb47bed9a572b2654a093b2f613","url":"./search.xml"},{"revision":"7bc93c3251ab5c9aceab225d9677bd9e","url":"./sitemap/sitemap.xml"},{"revision":"e125fdc552a9b6df281ff8524c5d088c","url":"./tags/Arch-Linux/index.html"},{"revision":"7b41df0c59829ed2195a7de301eb33b4","url":"./tags/index.html"},{"revision":"d26c13f8dfd9978c323e9aaba648b5ab","url":"./tags/JavaScript/index.html"},{"revision":"d4aa28c3af12fdce83460d9523c0c547","url":"./tags/Linux/index.html"},{"revision":"dffc5c9f59680d199ca706f4cd0339e5","url":"./tags/Windows/index.html"},{"revision":"23f190dd1015c774c5bfa7ebaf16a712","url":"./tags/双系统/index.html"},{"revision":"baef7a355cdd81b73ab8bf11d99bcc7f","url":"./tags/数据结构/index.html"}], {
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
