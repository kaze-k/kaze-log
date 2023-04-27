const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"24d1387421f50e73f7b7adebded6add4","url":"./404.html"},{"revision":"1b113489a1a81d817c267e18b8222470","url":"./archives/2023/03/index.html"},{"revision":"7276e81c842eaf44ee920e5c51bfbcef","url":"./archives/2023/04/index.html"},{"revision":"5e7216317cb2a3e257ac2b072524adea","url":"./archives/2023/index.html"},{"revision":"dba5c2d91948582994a0aa5a5921e4b1","url":"./archives/index.html"},{"revision":"f09beb3e547042fadecc9faa4e5ae734","url":"./bangumis/index.html"},{"revision":"f50d4afe5729deb2a45679b28b6ccff5","url":"./bing.json"},{"revision":"67617b0d02b679596e88a496fc3ee1eb","url":"./categories/index.html"},{"revision":"a3b1b7a3e54e13bfc37c7b6755ae489a","url":"./categories/前端/index.html"},{"revision":"7a20400f8b0aa6a683292374dafaf50a","url":"./categories/学习笔记/index.html"},{"revision":"69c659a22481d2b1908091f038e368d5","url":"./categories/工具/index.html"},{"revision":"65a6e69dd492ac55e2d97b57308f0a2d","url":"./categories/系统/index.html"},{"revision":"67c399e6ddf0f0ff15d8affd6dc750b5","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"6e2cd1062a9eaf0f9294ced0b5394740","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d811b0f2183af3feba479c3200180058","url":"./feed/atom.xml"},{"revision":"1eb5acab2a9772a03ff8e19fe891fb2d","url":"./feed/rss2.xml"},{"revision":"c84daee58a588757be4dce62f165ff17","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"544832e286f554cca26427bd63256568","url":"./posts/19711/index.html"},{"revision":"f913966b329437daf8324c33d319e20a","url":"./posts/21725/index.html"},{"revision":"8afc1b77c5c85da6c5d450653536a8ec","url":"./posts/33107/index.html"},{"revision":"be12fd1b6121ef2cc8cc0f1ffab42bf0","url":"./posts/33510/index.html"},{"revision":"5d02e8ed3ac4b552763904c4affd6545","url":"./posts/33511/index.html"},{"revision":"16440691c5ac6b090fc1722f4870bc48","url":"./posts/3603/index.html"},{"revision":"f17c54742b5ea40eda12a2e51983755f","url":"./posts/3a68f348/index.html"},{"revision":"d10cefe7bcebcbe978e096db32ba2a40","url":"./posts/50888/index.html"},{"revision":"e5a349bc1d09849d863bd96ce8e67740","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"e56880c796f779f0763f8fe79914407f","url":"./search.xml"},{"revision":"fd8d863a3c8719b972a2ededb63e70a6","url":"./sitemap/sitemap.xml"},{"revision":"9121231f4b7c8c83508d22d86e1d81a8","url":"./tags/Arch-Linux/index.html"},{"revision":"894665cdae1e70b0fe87b5ea0e2ae62d","url":"./tags/index.html"},{"revision":"5be939bf2247895ea6af5298867e8a96","url":"./tags/Javascript/index.html"},{"revision":"95e1bf9b6a1bd39302d0c253b19d0b0c","url":"./tags/JavaScript/index.html"},{"revision":"3d6bc4b95c23d40e767f52ee0cbc6f9a","url":"./tags/Linux/index.html"},{"revision":"4fc05e5e93eac08f5739b3ef7caa833a","url":"./tags/Windows/index.html"},{"revision":"f6cc115873814ffccddee868395c9b96","url":"./tags/双系统/index.html"},{"revision":"40e090f6d32718c2e20aff442a575788","url":"./tags/数据结构/index.html"}], {
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
