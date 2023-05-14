const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"37c1a049021834d7aab6ffbb8d52f094","url":"./404.html"},{"revision":"6380767951a1cb468138ad9ff1d43085","url":"./archives/2023/03/index.html"},{"revision":"ecea4f49181dadad7943aee8ed96e211","url":"./archives/2023/04/index.html"},{"revision":"9fc6788f830d30ee743b9e534109ab32","url":"./archives/2023/05/index.html"},{"revision":"1e4b99422c09f5a9f1bbfc7cd0273b38","url":"./archives/2023/index.html"},{"revision":"64d6853cb534fb986879313d3aa7e578","url":"./archives/index.html"},{"revision":"58691c33f9388129fd4bf77428ee3ab8","url":"./bangumis/index.html"},{"revision":"76efe884e477fa6c1cedf6a30d8a7f40","url":"./bing.json"},{"revision":"79ba9b7afd39e426ab87d0c2b8ada2d4","url":"./categories/index.html"},{"revision":"b88823277c4b15806932cb33edb1c1c2","url":"./categories/前端/index.html"},{"revision":"bebfce9fd556b19d4a6b1aaa9b874f35","url":"./categories/学习笔记/index.html"},{"revision":"54746fe229394f523717212a7a6c4d34","url":"./categories/工具/index.html"},{"revision":"eee86d2ef2589af76e189f6eaeb0595b","url":"./categories/系统/index.html"},{"revision":"c42b884856ab79e270ed6c0436afc1b7","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aed58b54eb1a020917ede69eed7f16ec","url":"./feed/atom.xml"},{"revision":"727adf539d62e3b1b2969f6fd171f6d0","url":"./feed/rss2.xml"},{"revision":"5b52d8e76badfa881acf317d42de4005","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"14315eb91a698067adc3fda895a54a81","url":"./posts/19711/index.html"},{"revision":"114e4d91c569c3b64dbc6a242a05e0eb","url":"./posts/21725/index.html"},{"revision":"fa76ee3fa4e04c8b6ab94e45f6e8634a","url":"./posts/33107/index.html"},{"revision":"87ba9abb50126aac8e6b8f39b493f885","url":"./posts/33510/index.html"},{"revision":"a8b7b44f577d9b1d5c5184747c8b5664","url":"./posts/33511/index.html"},{"revision":"42026c55e31433517af5ee5ddbcfa653","url":"./posts/3603/index.html"},{"revision":"6a2e4654238ac0fc07c5ad215fc5f04c","url":"./posts/3a68f348/index.html"},{"revision":"c21e48d0de12aa858404c65f2f006996","url":"./posts/50888/index.html"},{"revision":"7de7e734260ef71cac00e481677bb355","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"47933e1611c00b2d6ef6fd8741c388b8","url":"./search.xml"},{"revision":"cd8ca94a5dd4ab5fd4260073cf9ac17d","url":"./sitemap/sitemap.xml"},{"revision":"1cfbdec535ada64dca5ae1972e483980","url":"./tags/Arch-Linux/index.html"},{"revision":"d793bdff5a1c7851a9fc53953da06567","url":"./tags/index.html"},{"revision":"0ed72234899cce35e021ad2112fb07b4","url":"./tags/Javascript/index.html"},{"revision":"8cba52ccff5d10e506345469d253b487","url":"./tags/JavaScript/index.html"},{"revision":"61cc7c2d6158cdc4f7aede3d02ff71ec","url":"./tags/Linux/index.html"},{"revision":"85f16209d2bf8b97af328d68c9591396","url":"./tags/Windows/index.html"},{"revision":"3638e294fca4d44bf7d224296d91bbe3","url":"./tags/双系统/index.html"},{"revision":"c398d94c6f20c73eab3f24edd83b67d7","url":"./tags/数据结构/index.html"}], {
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
