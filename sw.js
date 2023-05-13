const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c0a52fbbd101a9d8ed7fd6901ee6c4bc","url":"./404.html"},{"revision":"1d22fa0107c1a0c6250ade23b30168de","url":"./archives/2023/03/index.html"},{"revision":"d6cbbb7f67c44676de72274deedb1b99","url":"./archives/2023/04/index.html"},{"revision":"869e6a2ec12b39af17f47c5b79a57fc7","url":"./archives/2023/index.html"},{"revision":"431189456cec70770bb01c66f7bd8449","url":"./archives/index.html"},{"revision":"94745277b16e3f0e6a778eab42162df5","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"37cc45dff532ec58466278031b3e54b5","url":"./categories/index.html"},{"revision":"2f0e1e4e62ba7d51a6cac44be69badb9","url":"./categories/前端/index.html"},{"revision":"9dd1dfceb8d4e2bc9e1eabbbae7cec21","url":"./categories/学习笔记/index.html"},{"revision":"0fb1f44f0e97b692d6b2e7f98c6af13d","url":"./categories/工具/index.html"},{"revision":"a899f43966986525ac0669c53436e708","url":"./categories/系统/index.html"},{"revision":"1da6afbf81264769b8e0c3554b2209ca","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"751e98efb130c3d19095ffb26da66118","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"85386768fd03b21a1109749b917905e4","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./manifest.json"},{"revision":"e27738d547a0d95334353f133b192ea3","url":"./posts/19711/index.html"},{"revision":"4c7b6343086868a55cdebcbdeec4c6b3","url":"./posts/21725/index.html"},{"revision":"927973b3569a63c4a32940b1b397c09c","url":"./posts/33107/index.html"},{"revision":"19af8a40539d96f73296b30ef3a9ee0e","url":"./posts/33510/index.html"},{"revision":"4908ec3594ca4612161c8a165ff926b4","url":"./posts/33511/index.html"},{"revision":"f6d41dfb12ef5c76e4103f5186682bb9","url":"./posts/3603/index.html"},{"revision":"3c09bbda730ec85d422c8649458e0e95","url":"./posts/3a68f348/index.html"},{"revision":"be90ca3439b2587768b1def5897a6196","url":"./posts/50888/index.html"},{"revision":"21e972b4286510e5d8e0ca9f4312dc78","url":"./posts/61844/index.html"},{"revision":"47933e1611c00b2d6ef6fd8741c388b8","url":"./search.xml"},{"revision":"e8ad067bad06923d7c3adead19749b6c","url":"./sitemap/sitemap.xml"},{"revision":"f6044b563fb653ae4019a52beec5c85f","url":"./tags/Arch-Linux/index.html"},{"revision":"6e7d02aca8401958fc8d4d6fc733a634","url":"./tags/index.html"},{"revision":"f832913a331d6e5a8371e4914129c9ee","url":"./tags/Javascript/index.html"},{"revision":"570537fa6c1929395978b3a23d8a5e2b","url":"./tags/JavaScript/index.html"},{"revision":"d5ae9737d612a36a879a47f5139caafb","url":"./tags/Linux/index.html"},{"revision":"59399cf1712a44c9d54b2c9a4350f353","url":"./tags/Windows/index.html"},{"revision":"73e047b550c8ae3de267ac8b7bcbe538","url":"./tags/双系统/index.html"},{"revision":"dfc8f95dcd8ddd70781e854da6ce89bf","url":"./tags/数据结构/index.html"}], {
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
