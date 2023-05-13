const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"41c9c922b13554cd2d1c2cb8ced8513b","url":"./404.html"},{"revision":"341e1144715337fa2a309f482751334d","url":"./archives/2023/03/index.html"},{"revision":"95117fd016eff68bc811ac711fb18ce2","url":"./archives/2023/04/index.html"},{"revision":"d65ee1d20527a5fe219964f583e555fd","url":"./archives/2023/index.html"},{"revision":"03c18c30b332311b8a6f5013ce90bd59","url":"./archives/index.html"},{"revision":"91a324f7415b44baea33188b1ddb6928","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"9fe5c57d97429926249ece20407eb3c7","url":"./categories/index.html"},{"revision":"8405a4fe6d30fe5adde23246aebe6eab","url":"./categories/前端/index.html"},{"revision":"e741708de6de48259a18a870185daeca","url":"./categories/学习笔记/index.html"},{"revision":"292dd06f24fb1075d7e66f8bf92524e9","url":"./categories/工具/index.html"},{"revision":"32163724546a3bd7b8183323729407d4","url":"./categories/系统/index.html"},{"revision":"d17bd5a0aa097a183dcba7797d1be8f8","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"b62f86daa76ce2b527ab2422d1e98f00","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./manifest.json"},{"revision":"b58d8fbca1c0eae5fa3cd5f16b5f5f34","url":"./posts/19711/index.html"},{"revision":"3e7af9013cd902c837322036e209229f","url":"./posts/21725/index.html"},{"revision":"f394383ee97115ff6e598851e0d20016","url":"./posts/33107/index.html"},{"revision":"69469c8926fecf88d0cb44c14b55f9a6","url":"./posts/33510/index.html"},{"revision":"86045e345e94ef18c75256dfe76be7ae","url":"./posts/33511/index.html"},{"revision":"e09cde8060cd7f3fa3545d425c17dbc2","url":"./posts/3603/index.html"},{"revision":"5eded2cf6fe93f71133ac1503cc6e604","url":"./posts/3a68f348/index.html"},{"revision":"d8176354b235fdcdf774f0b12f91cd49","url":"./posts/50888/index.html"},{"revision":"ab3e49beb24ca0b4de46794dbff12b01","url":"./posts/61844/index.html"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"e8ad067bad06923d7c3adead19749b6c","url":"./sitemap/sitemap.xml"},{"revision":"90a116477f8adc3c4f233a61df27784f","url":"./tags/Arch-Linux/index.html"},{"revision":"6181d277d2e93d95b9339e3b0f19b7b2","url":"./tags/index.html"},{"revision":"bd258cec4fa00a04091008813360b770","url":"./tags/Javascript/index.html"},{"revision":"d563d5b7328f18a09e2b8f381cb0ffbb","url":"./tags/JavaScript/index.html"},{"revision":"3cbfbefa05917ddcdd0ac004b9dd19b1","url":"./tags/Linux/index.html"},{"revision":"74e7111597c21ffd9e5e1858f8645d70","url":"./tags/Windows/index.html"},{"revision":"e4dfa23dff88c4cfb190cf6e16d0d23a","url":"./tags/双系统/index.html"},{"revision":"7a481dac51716ca8122b8560febacc9b","url":"./tags/数据结构/index.html"}], {
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
