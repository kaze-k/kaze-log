const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fde939a9aefc9011cbac6ac4d2d3e7ed","url":"./404.html"},{"revision":"86e2e0a96072ec3bc770344c1a234247","url":"./archives/2023/03/index.html"},{"revision":"5ca47ac985a3962c68b6a30c781c4fd3","url":"./archives/2023/04/index.html"},{"revision":"cb07d367bb478a2d1deba0bccc6f6d12","url":"./archives/2023/index.html"},{"revision":"aafb60cf981e99bab2fef2d3cedada5c","url":"./archives/index.html"},{"revision":"26dee2a3f8d4d92a8652f21a6c993928","url":"./bangumis/index.html"},{"revision":"47a86d988eac1b6678d3d07896e461f8","url":"./bing.json"},{"revision":"59e97da25af9375cddd231ea6a1f90f9","url":"./categories/index.html"},{"revision":"728807ea1b283877dfc757ec9c5c228e","url":"./categories/前端/index.html"},{"revision":"d952a3d0d11ee12f35395d27125a7132","url":"./categories/学习笔记/index.html"},{"revision":"668a94a874b8e8d8b6f5d141b8082f7b","url":"./categories/工具/index.html"},{"revision":"a28fee1ad7dd7141c08d6d32937163bf","url":"./categories/系统/index.html"},{"revision":"84c78d661973c9c3a2fde4d42bdffdd2","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"033285da7a4706d64fbb298d05b8c322","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"de91eaca07028e1537a6899dd3dff3d9","url":"./posts/19711/index.html"},{"revision":"62327ab9df233e0cd760e42f63ad79d4","url":"./posts/21725/index.html"},{"revision":"ebf3f122dc063258d585ece6c2cb24b4","url":"./posts/33107/index.html"},{"revision":"a4cc126f0649a451f4a61ff0b9cf72e4","url":"./posts/33510/index.html"},{"revision":"e81d5f0697eef0562a27a47db89cdccb","url":"./posts/33511/index.html"},{"revision":"b4c11360ba79302ca762f64f1596ffb3","url":"./posts/3603/index.html"},{"revision":"49d902ce617aa5f8fac3d2bdce005364","url":"./posts/3a68f348/index.html"},{"revision":"354567904582c83d942a8cfe8a2d71d3","url":"./posts/50888/index.html"},{"revision":"8eb9952c990c3915a039333c81abf0e2","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"dfefcaadda713581d0e7baa18edeb17f","url":"./sitemap/sitemap.xml"},{"revision":"f49b2a0b99d3160f701df79c185b720b","url":"./tags/Arch-Linux/index.html"},{"revision":"3381d6e0b2e22c96649fd5fbcba63c6c","url":"./tags/index.html"},{"revision":"4103db2290a4449b00123f2a7f414ced","url":"./tags/Javascript/index.html"},{"revision":"a5112252af09a34e81548d927170de84","url":"./tags/JavaScript/index.html"},{"revision":"8e3d83bacd9667fada659648861262b4","url":"./tags/Linux/index.html"},{"revision":"910b284e147171c1636c5e0fc413ea72","url":"./tags/Windows/index.html"},{"revision":"7db5223e6925b43b1df2aa9ca24c476f","url":"./tags/双系统/index.html"},{"revision":"2e12f91d456107f405f854f6312e5072","url":"./tags/数据结构/index.html"}], {
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
