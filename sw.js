const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"dcd057c35534c96c7e7299174e03718f","url":"./404.html"},{"revision":"f001b291d5b2c3540400889d523edaa2","url":"./archives/2023/03/index.html"},{"revision":"3b7065bf9b62db76a8d05f8edd8e6837","url":"./archives/2023/04/index.html"},{"revision":"6e09e6dc2c6e71f0cb4823268c867ed1","url":"./archives/2023/index.html"},{"revision":"2026b7f632b329914c849f28e78fbc0e","url":"./archives/index.html"},{"revision":"e41e03117805ec3c0f2636efc9a3678c","url":"./bangumis/index.html"},{"revision":"38e5e3bffdbed7f88c677c3233a90402","url":"./bing.json"},{"revision":"1f599ced07b58c5a342f3c1142e49a9d","url":"./categories/index.html"},{"revision":"0a08543ca65f56640c5ae6023d107431","url":"./categories/前端/index.html"},{"revision":"14da6db1d39b67a5b78c46ecdd991a7e","url":"./categories/学习笔记/index.html"},{"revision":"b2dc73b0456b7efe1dd487d5ae512ad4","url":"./categories/工具/index.html"},{"revision":"afddff91c9ce3330140a6d1ac85ac355","url":"./categories/系统/index.html"},{"revision":"ad3972cc02b6007c9451a5f1fb2df76f","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3f9c624c0829931055981e941b50c49c","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d811b0f2183af3feba479c3200180058","url":"./feed/atom.xml"},{"revision":"1eb5acab2a9772a03ff8e19fe891fb2d","url":"./feed/rss2.xml"},{"revision":"b050d315413bff1a1ead507714ac8735","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"435d25bd207427ecf5c190df636bc832","url":"./posts/19711/index.html"},{"revision":"b7b6dc315c431991338ce5e0f8e9f28f","url":"./posts/21725/index.html"},{"revision":"bf3f3d268d8a90e239de76f50ba8d64f","url":"./posts/33107/index.html"},{"revision":"f4f5fdf4eff9841689a2ecc25d2bb892","url":"./posts/33510/index.html"},{"revision":"bb89f57e4c72d3f8890294e5b0b9896e","url":"./posts/33511/index.html"},{"revision":"238c2e98bded0df584035a3be6b32729","url":"./posts/3603/index.html"},{"revision":"2ba1136a62f39097feed7dc5cce3465b","url":"./posts/3a68f348/index.html"},{"revision":"399d4226e3ae93de4ba86d974817d5d8","url":"./posts/50888/index.html"},{"revision":"e1ff700294a968283d6188f0d1cc9770","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"415f03143a9e13573d317bfe257b9ad2","url":"./search.xml"},{"revision":"1c9dc6e185aee6407975f978a02d2fda","url":"./sitemap/sitemap.xml"},{"revision":"62d960fc715d811a4c3369dd467be383","url":"./tags/Arch-Linux/index.html"},{"revision":"779e7ac8572f8c6e019bb773ac3b3252","url":"./tags/index.html"},{"revision":"8f21ef0d498700eb04cef2883c31af46","url":"./tags/Javascript/index.html"},{"revision":"047c66321796561c2e765a0e97a620b3","url":"./tags/JavaScript/index.html"},{"revision":"46e81f9e8fc2a4aaf106b17f1a4da6a3","url":"./tags/Linux/index.html"},{"revision":"e8f80f8d86758649c8179e49f1a63ae3","url":"./tags/Windows/index.html"},{"revision":"fb0167c93165ade72b56348b25994ea1","url":"./tags/双系统/index.html"},{"revision":"94c11658948f886347ef4132ab343d7c","url":"./tags/数据结构/index.html"}], {
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
