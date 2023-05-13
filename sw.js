const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8e3a86f7b3f44141b4de3e5c77da5c6f","url":"./404.html"},{"revision":"aa2722e30119bb1c9fce20c638a67a31","url":"./archives/2023/03/index.html"},{"revision":"5b273b3f88ab272aa3a427dde41fcded","url":"./archives/2023/04/index.html"},{"revision":"169c666bb55f172b1d6e54fc070dc41e","url":"./archives/2023/index.html"},{"revision":"177c0926a8beabfdc8ec87546d2ae1ac","url":"./archives/index.html"},{"revision":"afb3bfc2fb5c79e5f64b755c33460fea","url":"./bangumis/index.html"},{"revision":"d136ce00282fd0f9aa9369790be782ef","url":"./bing.json"},{"revision":"9f656d1dc1bf7ffa6a4d95f71d040270","url":"./categories/index.html"},{"revision":"3aa71980998212dab5ec663bcebc6afa","url":"./categories/前端/index.html"},{"revision":"4fad29ff60310656f75644ba52280045","url":"./categories/学习笔记/index.html"},{"revision":"f44de60be5b5b1f7ded91944d2ba009c","url":"./categories/工具/index.html"},{"revision":"06a3b6ea2fffd639148cd51e81dda41c","url":"./categories/系统/index.html"},{"revision":"5313ef9413e8cae0b1a1f19fd90f3868","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"bfe6fc2cfe0e84209d1e89a5a876768f","url":"./feed/atom.xml"},{"revision":"37744cef281a79917c1d8f1ac8dbb608","url":"./feed/rss2.xml"},{"revision":"1a870f8b521161910aff7367bad5d1d7","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"081673b12b31648d7df8d0a0670b8b77","url":"./posts/19711/index.html"},{"revision":"e8ea51ee1d620575bfde6642107174d0","url":"./posts/21725/index.html"},{"revision":"e0856e11281f4ca7148161e08b14deda","url":"./posts/33107/index.html"},{"revision":"3c0bb07924e3e1ed9f2b93681948dfcf","url":"./posts/33510/index.html"},{"revision":"abb11c83d29ac4ec5802efe811d5b292","url":"./posts/33511/index.html"},{"revision":"eb0d7ddb0a4544b2fd3320c1808b56ae","url":"./posts/3603/index.html"},{"revision":"6a8e54f40cf76c9b021fdc36690512af","url":"./posts/3a68f348/index.html"},{"revision":"3b31fba836ed1ec7aeb9dde36c64757d","url":"./posts/50888/index.html"},{"revision":"3c7afe9bf6a0bca2e67fbe3abdeb0388","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"9e30cf5cc4ddf97cf6373d297600479a","url":"./search.xml"},{"revision":"2683a3783c0e540dbb4ff1f073111480","url":"./sitemap/sitemap.xml"},{"revision":"a1140dc6195e7883b79cd7210871487d","url":"./tags/Arch-Linux/index.html"},{"revision":"61f2e42e71e84cb6661eea9ea179af39","url":"./tags/index.html"},{"revision":"83fdaf5ec236e17190631984b87d2426","url":"./tags/Javascript/index.html"},{"revision":"14b4f0f7c969cf728caaf79e17599513","url":"./tags/JavaScript/index.html"},{"revision":"00ff8386972fbadaeef46201955a2c92","url":"./tags/Linux/index.html"},{"revision":"b81a33eaeac12953410c3d82a4994dba","url":"./tags/Windows/index.html"},{"revision":"b1d0ebf4701b2b7357424ed5424187e8","url":"./tags/双系统/index.html"},{"revision":"b213b6552c0aa9c3abf579b03e1249a5","url":"./tags/数据结构/index.html"}], {
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
