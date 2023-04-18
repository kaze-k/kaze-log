const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"af287360b34402d0e4fc40e16d50e5dd","url":"./404.html"},{"revision":"c2a46dd87a35a9b8f069f45d082fb3b6","url":"./archives/2023/03/index.html"},{"revision":"019e94dc05b0bdceefc35f1d2ffc5ec8","url":"./archives/2023/04/index.html"},{"revision":"6242bc0aab5a58f4d5de0734380e5170","url":"./archives/2023/index.html"},{"revision":"bda7c762021c893497bd9170c06ad3b7","url":"./archives/index.html"},{"revision":"caf5a8509aff75cf1e716856934e591d","url":"./bangumis/index.html"},{"revision":"cf13ad8acf7cebc97cd1b9c688880cf6","url":"./bing.json"},{"revision":"5f65e1c11f2ecb86645b90fb8ac3274f","url":"./categories/index.html"},{"revision":"c90524ae7abe88523d357e5b222bd635","url":"./categories/学习笔记/index.html"},{"revision":"e58ebaee9c5ce5e2522892e6cc1b4d20","url":"./categories/工具/index.html"},{"revision":"2ee5280021ed1b8cadd8b9917b8bb62b","url":"./categories/系统/index.html"},{"revision":"2b3b28bce38937dc8afcb153ab60e1bc","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"1f3d31f5a294c3612887dca26f809d23","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cd5d065e8bd75404009fb62ac182e6a8","url":"./feed/atom.xml"},{"revision":"4d6d81f11ef80d800f98a6db2df45ea3","url":"./feed/rss2.xml"},{"revision":"b1d2a4d6bcda52dffbb06c465586bad9","url":"./index.html"},{"revision":"4441dae678653d9d702bd8cb88a99fc4","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"bbff9670c090738f9714c35ca705f123","url":"./posts/19711/index.html"},{"revision":"7002e89ee503d69727a2d0a506bea359","url":"./posts/21725/index.html"},{"revision":"39c3309cc524690c2ffd9cfae539b739","url":"./posts/33107/index.html"},{"revision":"e4895defa4669b22110f6caff2eed461","url":"./posts/33510/index.html"},{"revision":"10235329b237bc18b5bc6e915dd2b915","url":"./posts/33511/index.html"},{"revision":"425bad4ce3a513ca4f800b97f4fe4de4","url":"./posts/3603/index.html"},{"revision":"1c7a44fd9e19b924791f7ef46db7040d","url":"./posts/50888/index.html"},{"revision":"2d279c2a0d0866a0e77c1f3a712c956a","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"cfd89fd19957432e06f4b413cb11da86","url":"./search.xml"},{"revision":"d454e0aacf6de3df495ea1f0cf292e07","url":"./sitemap/sitemap.xml"},{"revision":"e41c64ac132cadc7f2a00800d4329c63","url":"./tags/Arch-Linux/index.html"},{"revision":"84ecfd784ad6d9421f4591b496c3515a","url":"./tags/index.html"},{"revision":"431dd249b18ebf1ff048529346b8ffd2","url":"./tags/JavaScript/index.html"},{"revision":"4e0790af6cee154f86880d21d15a492b","url":"./tags/Linux/index.html"},{"revision":"0e422af049893282fa9ec17b88e69118","url":"./tags/Windows/index.html"},{"revision":"1b54c19fe39816a9ef670d90a888a57c","url":"./tags/双系统/index.html"},{"revision":"811f4fcdfb2f2556ead7b033c94d9969","url":"./tags/数据结构/index.html"}], {
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
