const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"25243df35ebd982eead9527515df788c","url":"./404.html"},{"revision":"f12d4c0467624d01ed086de256717b17","url":"./archives/2023/03/index.html"},{"revision":"9bc75c395c027c2ebc10d2a56c09fad2","url":"./archives/2023/04/index.html"},{"revision":"8bc3a2993d6a97c6514a51d1e2d7809c","url":"./archives/2023/index.html"},{"revision":"66110509d332399fb093cd39d28a1b3f","url":"./archives/index.html"},{"revision":"3075e1cb37c9cf03b283e1495cac4ae0","url":"./bangumis/index.html"},{"revision":"bed507058670c5bd55070e9eddeecf2e","url":"./bing.json"},{"revision":"4ace6ca614c7d114ae1e9d4985cb6a7a","url":"./categories/index.html"},{"revision":"4629ec180722d2de890a49ec7f9e98df","url":"./categories/前端/index.html"},{"revision":"17560328ac9a41fff17fb468e6bcd4f4","url":"./categories/学习笔记/index.html"},{"revision":"e049f9a6e044c87b97c886a6acda4d3c","url":"./categories/工具/index.html"},{"revision":"f73a5c2d6709d723dddc1e32c780b7a9","url":"./categories/系统/index.html"},{"revision":"f57eac72da427308dad17bc6665721f1","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6e246ec8c387580054d2ec6a019e0fba","url":"./feed/atom.xml"},{"revision":"023b7570e553768d10f31e59fcfb8a11","url":"./feed/rss2.xml"},{"revision":"1b5e94ac14050e2ea2e6b59f2a00bde9","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d5c29aed8f2ba0eafaa99001972a4059","url":"./posts/19711/index.html"},{"revision":"2d126f84e6e721b9f013e01c9fd7a9d0","url":"./posts/21725/index.html"},{"revision":"61934efbd6339bddd49cfb5d1843e0fb","url":"./posts/33107/index.html"},{"revision":"8891675e7a535617f934f2256e9062fe","url":"./posts/33510/index.html"},{"revision":"e6a9b52cde70e07f43c9f604d6a2da03","url":"./posts/33511/index.html"},{"revision":"353c14aa74a92d594398908d50494e90","url":"./posts/3603/index.html"},{"revision":"8bdb61a4e65c5c6d3757e0be129b7994","url":"./posts/3a68f348/index.html"},{"revision":"4c94bf867dfd9b754903bb3b2c4e2e1a","url":"./posts/50888/index.html"},{"revision":"0d966d551301b7b3c7d209b33d4c3b76","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"39a03668b4cfee2b9f077972271be704","url":"./search.xml"},{"revision":"6b0f69f86e446d758567fb745c42f084","url":"./sitemap/sitemap.xml"},{"revision":"7e33f5741acd1ad76792882d4122cfe7","url":"./tags/Arch-Linux/index.html"},{"revision":"aafd75f3f7be5905852719540f2492a6","url":"./tags/index.html"},{"revision":"4f94eb0e2b1a36cc5ddfff31acda0c39","url":"./tags/Javascript/index.html"},{"revision":"9cc724a298f0f6cbf9c4f4846e374646","url":"./tags/JavaScript/index.html"},{"revision":"63fb589fdb1e353d8a323d98406624af","url":"./tags/Linux/index.html"},{"revision":"c77fcffc2762a5d0a001042ed192d432","url":"./tags/Windows/index.html"},{"revision":"6a9c8540dd51d20be369d4261b84527d","url":"./tags/双系统/index.html"},{"revision":"09b20674b77a37b6a6bf83ee1679483f","url":"./tags/数据结构/index.html"}], {
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
