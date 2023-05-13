const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4949cd1f7eaed9d8a65a69b76b0b107b","url":"./404.html"},{"revision":"71f752a0b1a9896c42085226fbe70f1d","url":"./archives/2023/03/index.html"},{"revision":"a5153aa0a79c139a5cab76098d55f4e2","url":"./archives/2023/04/index.html"},{"revision":"8eb759fb4b28b9ed5d371af5f3e1ba4a","url":"./archives/2023/index.html"},{"revision":"472f7a0d4db7dd9d2847a8bf5e1b32f5","url":"./archives/index.html"},{"revision":"584f8421264505947564f79de37885be","url":"./bangumis/index.html"},{"revision":"76efe884e477fa6c1cedf6a30d8a7f40","url":"./bing.json"},{"revision":"e6c7edd9aa1884dcc49127f7157b4f66","url":"./categories/index.html"},{"revision":"3c4b076e22f5b27f594446c8d18c400a","url":"./categories/前端/index.html"},{"revision":"ed43633f05de6141d17ccf5873c02bdf","url":"./categories/学习笔记/index.html"},{"revision":"3a61e71421fba289bc2a29a5f343e336","url":"./categories/工具/index.html"},{"revision":"ddc4d9e25e3aed724565648c737c1e59","url":"./categories/系统/index.html"},{"revision":"07a1a8e7a5cac1fe2174bdbe06053343","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"ea710f1fa62f972cd21310c4b1043ff5","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"585c140be3bd899880bbc7bf5e07845b","url":"./posts/19711/index.html"},{"revision":"6c9a134dd366a1745e99c8bb2675dc37","url":"./posts/21725/index.html"},{"revision":"61eb8dd45f122e1a73c18aaefa5222d4","url":"./posts/33107/index.html"},{"revision":"7841acd7d3d68342eb73870958146ac2","url":"./posts/33510/index.html"},{"revision":"177955bb8bfb9462424712568faa265f","url":"./posts/33511/index.html"},{"revision":"9389ecca5419fed919371562ec5ad7c5","url":"./posts/3603/index.html"},{"revision":"51aebf1d59faaab57ce4ac90e9ffce79","url":"./posts/3a68f348/index.html"},{"revision":"a2e1ccfabfba88bc92ffe7a468823bbe","url":"./posts/50888/index.html"},{"revision":"e3a210c43015508e33860a4a77e1ac9f","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"47933e1611c00b2d6ef6fd8741c388b8","url":"./search.xml"},{"revision":"b73ecd3b3c3db959cf73f634e5010f92","url":"./sitemap/sitemap.xml"},{"revision":"a1c9da5233a25f6e89b9a9876929abf6","url":"./tags/Arch-Linux/index.html"},{"revision":"eb31a8513b3449070ac78dc2292fc1a3","url":"./tags/index.html"},{"revision":"77dd847f6a6dd310d2082a4a0778afd6","url":"./tags/Javascript/index.html"},{"revision":"82a93b76b3a288071b8b2040881107c5","url":"./tags/JavaScript/index.html"},{"revision":"b785e893df0938ba04cf7f6f289d25db","url":"./tags/Linux/index.html"},{"revision":"8465c964e167795ef200c7e52ea33f85","url":"./tags/Windows/index.html"},{"revision":"f1d63eb9c866ca0ec39812b47c8d424d","url":"./tags/双系统/index.html"},{"revision":"5434ae8ef0942f6a64fc5c6abde6d88a","url":"./tags/数据结构/index.html"}], {
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
