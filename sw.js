const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"abd63eb4a6915621bf659de2dc681d8d","url":"./404.html"},{"revision":"d38c724bd35d9580dc8a60406765a18b","url":"./404/index.html"},{"revision":"0951895fe35ddf579af31749898f5f2c","url":"./archives/2023/03/index.html"},{"revision":"d66c130e1a242400f9dda1ad66d51b5d","url":"./archives/2023/04/index.html"},{"revision":"5151bf657cff56f6f6f2c52700577fa1","url":"./archives/2023/index.html"},{"revision":"c4df768225f3de5c12c1b1ece136a9d7","url":"./archives/index.html"},{"revision":"6640c272dacafa723768cf2e7cf281ba","url":"./bangumis/index.html"},{"revision":"17e551a9f09d1185739e7e5e850c3ae0","url":"./bing.json"},{"revision":"4218b3c87fb89b517c6fc1b20cfdbecf","url":"./categories/index.html"},{"revision":"8baeba74b5d08598f9f3c7507e2b6451","url":"./categories/学习笔记/index.html"},{"revision":"a99e309620d0c87bb94d157031d26848","url":"./categories/工具/index.html"},{"revision":"4c26539424bbc881e1a62df6410ae7d8","url":"./categories/系统/index.html"},{"revision":"0cccc35ec9429ce87fc42d8c2869210b","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"8c0298c4ce07269227d3e65fbcbd1543","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cd5d065e8bd75404009fb62ac182e6a8","url":"./feed/atom.xml"},{"revision":"4d6d81f11ef80d800f98a6db2df45ea3","url":"./feed/rss2.xml"},{"revision":"8b59940a7ce0562338beba9ee020e935","url":"./index.html"},{"revision":"4441dae678653d9d702bd8cb88a99fc4","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"7757830a720e7346044ec3a2dabeccec","url":"./posts/19711/index.html"},{"revision":"2846c9d3462828ba4c39da74fab99118","url":"./posts/21725/index.html"},{"revision":"06a336c8403cdd34c3fbe0b3bcaa257c","url":"./posts/33107/index.html"},{"revision":"125a053b95523eb8a2d245fd5fcac1a7","url":"./posts/33510/index.html"},{"revision":"2a0dd87d33fdb93f7d88173006a3c4c0","url":"./posts/33511/index.html"},{"revision":"f4532a0e887dd035a8aa83a56f2c9a47","url":"./posts/3603/index.html"},{"revision":"1cd25b362fed3233ef63f7f22cff6431","url":"./posts/50888/index.html"},{"revision":"35387e1a5cc42d0f875dbbd8342794d5","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"545226df7329888a51390702010f8664","url":"./search.xml"},{"revision":"565314163cc311495613355ac2c87006","url":"./sitemap/sitemap.xml"},{"revision":"bd37a2bdb429d0675dbe5a1972e66efd","url":"./tags/Arch-Linux/index.html"},{"revision":"a34d717bd5872dc50c8feb9b3edaad5f","url":"./tags/index.html"},{"revision":"b87058ce129f0592430217fce05c84fd","url":"./tags/JavaScript/index.html"},{"revision":"3edb00e8eb552358a9e11295095be179","url":"./tags/Linux/index.html"},{"revision":"627261138705f67196213ef4980093e2","url":"./tags/Windows/index.html"},{"revision":"b36f3343cf2e80beb96033219d2bf159","url":"./tags/双系统/index.html"},{"revision":"2a21297404409b8ee4b2d46cab4c1ef1","url":"./tags/数据结构/index.html"}], {
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
