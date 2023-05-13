const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1fabd483d07664a6eb369fe46aa8699c","url":"./404.html"},{"revision":"f933a957ca1d7ae2aedec18827a9b142","url":"./archives/2023/03/index.html"},{"revision":"a955d56e77dcc6d0bf95219465a9e4a4","url":"./archives/2023/04/index.html"},{"revision":"cb9ff3bbcdf2a81f0c1b76ac9dc89ec2","url":"./archives/2023/05/index.html"},{"revision":"62a497204cd4eedaf036923bddf74841","url":"./archives/2023/index.html"},{"revision":"06590ae5d9b7cf001eef4d78539a5f59","url":"./archives/index.html"},{"revision":"191e1d66481920e1d460cf00f9fd32f1","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"b74ec40d7d57d89a28970287c2708893","url":"./categories/index.html"},{"revision":"6fa421616e953d16ad3065b6ed7ae75b","url":"./categories/前端/index.html"},{"revision":"ddc13c990b462731d4e5356b28419f06","url":"./categories/学习笔记/index.html"},{"revision":"8c7a0b43f86ee5d2c1016f295bd7d153","url":"./categories/工具/index.html"},{"revision":"a53ecb358e291c9f13afb04a4c8a9842","url":"./categories/系统/index.html"},{"revision":"09d8db025f410dbf78a07bb154b02411","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aed58b54eb1a020917ede69eed7f16ec","url":"./feed/atom.xml"},{"revision":"727adf539d62e3b1b2969f6fd171f6d0","url":"./feed/rss2.xml"},{"revision":"a1b7b718edafe78613d4a43ca7b6c3c4","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"c617220830121d438c6436d8c6302bbb","url":"./posts/19711/index.html"},{"revision":"9c9166bd10329cfcbd196e697c7b6ac2","url":"./posts/21725/index.html"},{"revision":"2ee5e9922ee8c1357a3d39bc7158947f","url":"./posts/33107/index.html"},{"revision":"524ddd4d7c856a197c60e3132a7a6aab","url":"./posts/33510/index.html"},{"revision":"2adae8cf967b2644645d95d7e762c239","url":"./posts/33511/index.html"},{"revision":"e12fdf7aae7795a83a1b817699be4a27","url":"./posts/3603/index.html"},{"revision":"67d95794304df4536f93e53eb2f81273","url":"./posts/3a68f348/index.html"},{"revision":"efd7b37997b7d5fc6f7f0802552026dc","url":"./posts/50888/index.html"},{"revision":"d8c70d02660263f9bb7556151a45cb74","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"2b7d80dc2a1bc163f23802e600b16573","url":"./sitemap/sitemap.xml"},{"revision":"54a3c899b48295d5d46cfa68a39f04f6","url":"./tags/Arch-Linux/index.html"},{"revision":"2f1e5b68b5b6abe28895c50f894a3ef1","url":"./tags/index.html"},{"revision":"459e17c8e51b754264f454508e63c5ec","url":"./tags/Javascript/index.html"},{"revision":"bc6e74b21d5f8adb15cca2cb935d7865","url":"./tags/JavaScript/index.html"},{"revision":"efe3379eb5a98058dceb09b0ea279e34","url":"./tags/Linux/index.html"},{"revision":"b6cd341eef783b26f48f56a35215471b","url":"./tags/Windows/index.html"},{"revision":"4ce7a1df986eaee9756ed2f7a1d7b60d","url":"./tags/双系统/index.html"},{"revision":"4e998f845fdde9099e6ce970d59281a8","url":"./tags/数据结构/index.html"}], {
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
