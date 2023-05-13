const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5e491097be932b8a4ecf58dbbb60e950","url":"./404.html"},{"revision":"ab16bff37ce38faf480a7d61e2e4311b","url":"./archives/2023/03/index.html"},{"revision":"57d1828f1458c1f554bd0ce1355444f9","url":"./archives/2023/04/index.html"},{"revision":"4aee1e29f9cb2bb714cca955904062b0","url":"./archives/2023/index.html"},{"revision":"c5453733a0af64993cdc20d02b23a0de","url":"./archives/index.html"},{"revision":"b3d2c01cb0b22ea8c64a2b57bdd9bec0","url":"./bangumis/index.html"},{"revision":"9520837d9a01c50f16e0c5f9e76ad14a","url":"./bing.json"},{"revision":"e2f22a9a0579aaad27d4fb0c69e34d18","url":"./categories/index.html"},{"revision":"57ab6585689c024e024bb28258b0a78d","url":"./categories/前端/index.html"},{"revision":"732b94126bb9b2cf503da3ac5dfb7928","url":"./categories/学习笔记/index.html"},{"revision":"cff6d3ff6800702936183ef6ec3dca14","url":"./categories/工具/index.html"},{"revision":"702c9b3a3b782480a8abcd3eddcf7843","url":"./categories/系统/index.html"},{"revision":"f5fc0f997b34ebb9373178ad472d8535","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"bfe6fc2cfe0e84209d1e89a5a876768f","url":"./feed/atom.xml"},{"revision":"37744cef281a79917c1d8f1ac8dbb608","url":"./feed/rss2.xml"},{"revision":"57db6fd779d97afaabe9b8b12c32fdbe","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"a1a21f0ecbdaa03753013c17ba816e16","url":"./posts/19711/index.html"},{"revision":"c1fb23266ad50b2f22258767b5ec5c6f","url":"./posts/21725/index.html"},{"revision":"696643b2d6f13dcfb2686a97de9bf414","url":"./posts/33107/index.html"},{"revision":"649f4c408d1e4f765249094d2f178607","url":"./posts/33510/index.html"},{"revision":"50e5d785f41abc97a2f040fee1957895","url":"./posts/33511/index.html"},{"revision":"3929582fbebbf964dfd641bc51ae56cc","url":"./posts/3603/index.html"},{"revision":"debbb8d4f97b84f7e078f85809dcb38a","url":"./posts/3a68f348/index.html"},{"revision":"661dabf0309cac34c68de180871f9ef9","url":"./posts/50888/index.html"},{"revision":"0e1bda423bc057116fc06f47293266ce","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"9e30cf5cc4ddf97cf6373d297600479a","url":"./search.xml"},{"revision":"2683a3783c0e540dbb4ff1f073111480","url":"./sitemap/sitemap.xml"},{"revision":"55a1a7d08bc6b64732d8e61880d4db41","url":"./tags/Arch-Linux/index.html"},{"revision":"fe4a2eb0c1b727af906a4d616cac7c09","url":"./tags/index.html"},{"revision":"b4a24e7a52c3591851902cd1f9f8a1d4","url":"./tags/Javascript/index.html"},{"revision":"73f4abaaa6c2765b5022bb0c879a7311","url":"./tags/JavaScript/index.html"},{"revision":"31518b501b16afe8412d183a9ac05e63","url":"./tags/Linux/index.html"},{"revision":"77f0da6c2eabdc1122c3abc45c13b102","url":"./tags/Windows/index.html"},{"revision":"d2fbe91ff5cd5eec78fed289c1848da6","url":"./tags/双系统/index.html"},{"revision":"76f911f023819edd66fce8ebc7b04bf7","url":"./tags/数据结构/index.html"}], {
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
