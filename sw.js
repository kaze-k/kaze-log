const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"24517b95486e378a6298a4e5d91bdc6d","url":"./404.html"},{"revision":"416afed6b8c8da3ed5bf06a5c39d956b","url":"./archives/2023/03/index.html"},{"revision":"859542c7baa944fe06338be2a2285e59","url":"./archives/2023/04/index.html"},{"revision":"ed9cf731d0aaee88dc1551cf045e1881","url":"./archives/2023/index.html"},{"revision":"5899b8e665d0a55f273449fafae53c9f","url":"./archives/index.html"},{"revision":"171d480e0b3e6c47f1dbdd55e89e6b53","url":"./bangumis/index.html"},{"revision":"ffade0ca8320a5808e888e7e8e7dbaca","url":"./bing.json"},{"revision":"b40751fa256e79cd9a188b70a716d3cc","url":"./categories/index.html"},{"revision":"d2b685a91a1eeab2db297a9c36c4d7ef","url":"./categories/前端/index.html"},{"revision":"9f22c9a217bcef7fab46ad2a18f40d90","url":"./categories/学习笔记/index.html"},{"revision":"e71f400101bcdbfead148d74073823f6","url":"./categories/工具/index.html"},{"revision":"b55a345d5fbddf67ae465df21ef5bf72","url":"./categories/系统/index.html"},{"revision":"a702f5d698f0152e1cc784dca3e2cc44","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"acb3c84ca02c66598da0313974d62784","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"588ede763ec3bd0b67128a515194bae7","url":"./posts/19711/index.html"},{"revision":"db250034943afb0423b50f6e4b435a89","url":"./posts/21725/index.html"},{"revision":"3baf773e285788ec7fa814a54127ad30","url":"./posts/33107/index.html"},{"revision":"f3bacdffd2cb36c985b0bda58b2086aa","url":"./posts/33510/index.html"},{"revision":"028c494adff48ae1fa0cca507b110937","url":"./posts/33511/index.html"},{"revision":"7420dfc3497874a8ebfd62028bb8bb0e","url":"./posts/3603/index.html"},{"revision":"d0a07ac0f0d1ab41b62fe0d1c529b46b","url":"./posts/3a68f348/index.html"},{"revision":"8ff2a6f2de80f7afb1ce5e7dafb18884","url":"./posts/50888/index.html"},{"revision":"03b68a90f2f5fe433082fca44b1015fd","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"877dd017c506b3fba0124ad4610216e2","url":"./sitemap/sitemap.xml"},{"revision":"757172f1e66f58c5681fabc032c08cd6","url":"./tags/Arch-Linux/index.html"},{"revision":"7580f4c0f082037601248bf214706cba","url":"./tags/index.html"},{"revision":"663ccee4efe7d42ecc189fbefb6e87a7","url":"./tags/Javascript/index.html"},{"revision":"d7e276b23df434d1348cf22697d025f5","url":"./tags/JavaScript/index.html"},{"revision":"62d4257eb51ad554ec90de18af56efd6","url":"./tags/Linux/index.html"},{"revision":"38aee057ed5c2f90f8e6efa786e0171b","url":"./tags/Windows/index.html"},{"revision":"849913021e6724a64ee66b846f61bf8c","url":"./tags/双系统/index.html"},{"revision":"f7cb5282126987aa6c5804383c5eac8f","url":"./tags/数据结构/index.html"}], {
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
