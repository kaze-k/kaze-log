const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"6d0b7b69b04abe63d3047baea0a66f5a","url":"./404.html"},{"revision":"f12d8cfe7935c6e3fd1dbf1d328a664d","url":"./archives/2023/03/index.html"},{"revision":"556b015f7c9ff3d65154c9196c68b28f","url":"./archives/2023/04/index.html"},{"revision":"37ce1b6a3eac111994d08b0f9319c9ef","url":"./archives/2023/index.html"},{"revision":"e1946125a517fbf3b3a20260fa62c46d","url":"./archives/index.html"},{"revision":"f6317a89da772bec8734a96adac238fd","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"ea2fef2200097f419e945a81523315bc","url":"./categories/index.html"},{"revision":"661542735b3406770caeaa64377a6fbc","url":"./categories/前端/index.html"},{"revision":"998304cf8c634111d48403ea90f0d7e3","url":"./categories/学习笔记/index.html"},{"revision":"57c9afc7dd9dd9148893c16d051a4164","url":"./categories/工具/index.html"},{"revision":"5bed2bc3873fe49e9beb412cd33ba724","url":"./categories/系统/index.html"},{"revision":"7b0ee7a1902a26b18b89c13d71363390","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"53f9fccb79dd29f7425abff4dc64cf8b","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"cbea7237c6ae856b0e0925777d955999","url":"./posts/19711/index.html"},{"revision":"87632432910b9414e7cdbdb5e0bfe653","url":"./posts/21725/index.html"},{"revision":"cbda01c3486230e5ca53f94f1acadaf4","url":"./posts/33107/index.html"},{"revision":"be1b781fe02d0ed507c26f47c5bdcc06","url":"./posts/33510/index.html"},{"revision":"49a65fd2e7107f5efae36c6d4ab61fb2","url":"./posts/33511/index.html"},{"revision":"53183723c843a7c01e6ed9b4936de21b","url":"./posts/3603/index.html"},{"revision":"f16518034608b25edfb64da2a055baf1","url":"./posts/3a68f348/index.html"},{"revision":"25c74e98383c5b3dc1c65e2d03e010fa","url":"./posts/50888/index.html"},{"revision":"7d26df3a751d89ce87f099ae479b82e3","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"47933e1611c00b2d6ef6fd8741c388b8","url":"./search.xml"},{"revision":"dfefcaadda713581d0e7baa18edeb17f","url":"./sitemap/sitemap.xml"},{"revision":"a098b2c12c7cf76bd387d3d0c88d883c","url":"./tags/Arch-Linux/index.html"},{"revision":"3059bcb3de6c01db0639d0522cbef00f","url":"./tags/index.html"},{"revision":"2fa3029d08f4fc37053e2d8246973f96","url":"./tags/Javascript/index.html"},{"revision":"f14f0a6490887e714d8fe17f26b52391","url":"./tags/JavaScript/index.html"},{"revision":"20f42eecb28d29643e0d2af31ae44660","url":"./tags/Linux/index.html"},{"revision":"36b15358a1166404f6bf37895b3b0b74","url":"./tags/Windows/index.html"},{"revision":"9aba587900e462e803cb366f8ffea46c","url":"./tags/双系统/index.html"},{"revision":"d90b564a0a412868796f993b0fb76928","url":"./tags/数据结构/index.html"}], {
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
