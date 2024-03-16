const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b9a50561ccecad5c3b2bad3824ff0e0d","url":"./404.html"},{"revision":"2978b6d20408967ecc68c181f794c757","url":"./archives/2023/03/index.html"},{"revision":"5ffd51d647b2a0f0f52cda18054d45e3","url":"./archives/2023/04/index.html"},{"revision":"27e44ecc0bf1129f594aa3ac83f64e9b","url":"./archives/2023/index.html"},{"revision":"5277ad25db1fa037b5890449184cc1ba","url":"./archives/2024/02/index.html"},{"revision":"b669a1d57bc577f12ac18b6ab83e9afd","url":"./archives/2024/index.html"},{"revision":"2a51f1623a1a4d89958fdce7247edde3","url":"./archives/index.html"},{"revision":"406360928f28e07ecde7911855e2ec9f","url":"./bangumis/index.html"},{"revision":"cc6ed5e10d48dc92e0106e18a8aec7fc","url":"./bing.json"},{"revision":"35e4045c3ac2f4fbc6901860c3defb03","url":"./categories/index.html"},{"revision":"b788f4556961b0b5067f1c4b30c6cbd2","url":"./categories/前端/index.html"},{"revision":"6002d25a9005c9d9c60aedc72be488b5","url":"./categories/学习笔记/index.html"},{"revision":"a6ef455c3b8b42eefffe40b4712c0edd","url":"./categories/工具/index.html"},{"revision":"78bfbbf2e3de01f0de47a5320e1424e2","url":"./categories/系统/index.html"},{"revision":"38e6c63fa26b655f1d564995688ac723","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"bc5d2fd19c4799714f4376a6ea0d27fd","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e94f1c2faaddf2171a85df47e6d23d6b","url":"./feed/atom.xml"},{"revision":"8d3937e79ad2d93c9f40b02bfa6d9cfd","url":"./feed/rss2.xml"},{"revision":"c0ecee47ed15434b2f2eaeb906aa52c0","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"a2d91495f5ddd2928ff0524c93eb6cb8","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"6ab581a95b1e9d2bf780b63a799094fa","url":"./js/main.js"},{"revision":"04678c982fb4ec46f38c276a1db4feb0","url":"./js/request.js"},{"revision":"6d0970ad70eea0591bb5d4b036fd2a29","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"71b1e9ed8919e3dab4cba6414b86bf08","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"cf15d3be56e824da5cb079f0011dc96d","url":"./js/utils.js"},{"revision":"eb98a097f2c41234f347fee8c88469b4","url":"./posts/19711/index.html"},{"revision":"d011db3d44405501dba8c0bb8f79e000","url":"./posts/21725/index.html"},{"revision":"382dce02709649caf35d780564731a30","url":"./posts/33107/index.html"},{"revision":"53c21b4a7b6b0ccc85f41763dc0c0119","url":"./posts/33510/index.html"},{"revision":"6aa2bd230d3defffc29eda8d11fced48","url":"./posts/33511/index.html"},{"revision":"e9338452d96e79ac8bbc1b980be2ccc7","url":"./posts/3603/index.html"},{"revision":"d8b8fbbb7df68a576ad13ca2c4745526","url":"./posts/3a68f348/index.html"},{"revision":"4abf31f49e1b893a03e29c7455e6b29a","url":"./posts/50888/index.html"},{"revision":"9658c0377956347d4e715826ca547d83","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"17fbceef5c5481d0e07667a9152953e7","url":"./search.xml"},{"revision":"b8a3b40c16bcd9a2ff6f2d2fd9baa0f6","url":"./sitemap/sitemap.xml"},{"revision":"632a7dc48c802bbbc6afb93c54af2eef","url":"./tags/Arch-Linux/index.html"},{"revision":"d6c7c593e9af06ce914d07d47e3da3ca","url":"./tags/index.html"},{"revision":"62d4cad97aca418637387173c372e7fa","url":"./tags/JavaScript/index.html"},{"revision":"e03a906c67c39980cf524bb48e41935c","url":"./tags/Linux/index.html"},{"revision":"6a79244b1fd82a90cf334a330d2f8fa8","url":"./tags/Windows/index.html"},{"revision":"eaffca8fde63e189de46eedf28d06546","url":"./tags/双系统/index.html"},{"revision":"7172ce59603c8ed9d2689c1f1fc16ab1","url":"./tags/数据结构/index.html"}], {
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
