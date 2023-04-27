const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5b7410d45eba2b6ef779e21ec0488654","url":"./404.html"},{"revision":"64fca8307dd3c87a76053a9bf02e7f16","url":"./archives/2023/03/index.html"},{"revision":"93ffed7ea13ad0b18e7871e45e3877c7","url":"./archives/2023/04/index.html"},{"revision":"9f887322911979c62bdbf5c69cbcdd3b","url":"./archives/2023/index.html"},{"revision":"9e61bec2643cc7506ebb5ac1af2d0be5","url":"./archives/index.html"},{"revision":"72b1c2938d743dcca01ea54eba923df2","url":"./bangumis/index.html"},{"revision":"e690ecbaf564392632405d7b82c52c69","url":"./bing.json"},{"revision":"36ee044d6a7c382ed67ee789ee443301","url":"./categories/index.html"},{"revision":"551cc98daf51850573f2076a6f636d39","url":"./categories/前端/index.html"},{"revision":"400dd5cdc9833ff82cbbe145a2fce2be","url":"./categories/学习笔记/index.html"},{"revision":"b9117b75839da103bb7da404daf4e254","url":"./categories/工具/index.html"},{"revision":"558f257bbe172d7f042de3b3ae76e22e","url":"./categories/系统/index.html"},{"revision":"adb81377e75198338ed194ae68c5c01d","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"416fc7776e06c935196911cbe5bad88c","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f931e702d6b2ac7454c93d25af98d477","url":"./feed/atom.xml"},{"revision":"2a0f44afc43d15d3dba53230db84ce87","url":"./feed/rss2.xml"},{"revision":"53de6ada6dc9ce8271e4e27efff623bb","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"bfc5816aac7c5107cb1ca55dff4367f2","url":"./posts/19711/index.html"},{"revision":"414565da00556640d043302fd76206c1","url":"./posts/21725/index.html"},{"revision":"db1d4c859c4db01bb3c113810bce2aa6","url":"./posts/33107/index.html"},{"revision":"95628c1fc1a25e40a3cf7d8c2e898d09","url":"./posts/33510/index.html"},{"revision":"c8b84df048899e78c47a0a78632ddf92","url":"./posts/33511/index.html"},{"revision":"f0e93d5f057979d439a67fd4ece601cd","url":"./posts/3603/index.html"},{"revision":"b5d211f0d583438f226c83d9a941a5fa","url":"./posts/3a68f348/index.html"},{"revision":"69ca57025fa4f566bc825d74e0a05dc1","url":"./posts/50888/index.html"},{"revision":"70a5ee48d029195e9c1a01abb437ec41","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"6fb8e4dc00af39d1e0b1f831f70cb475","url":"./search.xml"},{"revision":"a7694c90efe06bf3b6a51ad70e2d78a4","url":"./sitemap/sitemap.xml"},{"revision":"cd4c4783b18f6cc1669b43ab119d6f13","url":"./tags/Arch-Linux/index.html"},{"revision":"78936d0beb924ad5d1eb532fe8a327d3","url":"./tags/index.html"},{"revision":"3ed2af85b14cbfa9bfb1e2309670f1e1","url":"./tags/Javascript/index.html"},{"revision":"cd2b7f2ce380355ad6150dbce63f3c76","url":"./tags/JavaScript/index.html"},{"revision":"608ba600e54e79fb676be8b20cc3ed95","url":"./tags/Linux/index.html"},{"revision":"237770248631e8f80e2143c89ad7d87b","url":"./tags/Windows/index.html"},{"revision":"b337d1fadf6cd033441f921bfb11a8de","url":"./tags/双系统/index.html"},{"revision":"07e3322c9227caab6642d61e58e4fff9","url":"./tags/数据结构/index.html"}], {
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
