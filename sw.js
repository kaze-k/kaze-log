const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7d16b22ed736931642f0ad0082cf7945","url":"./404.html"},{"revision":"ba2db69199caf1751e7aeb42ea57336f","url":"./archives/2023/03/index.html"},{"revision":"82c57c468001db2e7f3a0a9b1b695a1b","url":"./archives/2023/04/index.html"},{"revision":"3b03508b7684d8d03ef03ce40a60723d","url":"./archives/2023/index.html"},{"revision":"6c914275ca0b08b9d9fd153870bfebcf","url":"./archives/index.html"},{"revision":"e7fdaf1814dde9ec4c482aaa12c678aa","url":"./bangumis/index.html"},{"revision":"e5ad1d60d1b0c7c7348a080d6220bfa1","url":"./bing.json"},{"revision":"66b73ec45bc78f594ffc27ab2af3d80f","url":"./categories/index.html"},{"revision":"eda4c0333d3f4cc2e10e8b8522ac94ba","url":"./categories/前端/index.html"},{"revision":"362b8d66bd4750c5d224802a5aff367f","url":"./categories/学习笔记/index.html"},{"revision":"0978048d136ef0047e0c23f943b75ce8","url":"./categories/工具/index.html"},{"revision":"4562e1efa81f2c7b4da154db8c511dac","url":"./categories/系统/index.html"},{"revision":"5734da7c26bc69f30d204c111cee4f65","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"9206ca07b86aa6713733960ba9559767","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f35b56605b8707855762ab6bde679324","url":"./feed/atom.xml"},{"revision":"150a9b3ad8cdbfe3daa1789fed746b92","url":"./feed/rss2.xml"},{"revision":"189a62072ba3faa4814984f781e01180","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"b3cecd5bde93c9955089faffa175c8b9","url":"./posts/19711/index.html"},{"revision":"847cd84c4f03d6daefdfd981f20a8386","url":"./posts/21725/index.html"},{"revision":"bc6f4b188d831b95cf5c17c108253238","url":"./posts/33107/index.html"},{"revision":"d2f673ca9215bd7a22ac180a645c99b3","url":"./posts/33510/index.html"},{"revision":"6c6b5d1fbd8e48933b678f77baffd98e","url":"./posts/33511/index.html"},{"revision":"426428af878e7fdaa9bc3387d1e8f486","url":"./posts/3603/index.html"},{"revision":"077aef5c18e98b539040c7d1c0d303f1","url":"./posts/3a68f348/index.html"},{"revision":"081ca78cf028a1e1faa1e9d9494bd24a","url":"./posts/50888/index.html"},{"revision":"6029ab50c4541cc0fe2010207ea15d78","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"050259e023469953a5674d457bc7efc1","url":"./search.xml"},{"revision":"41a01f8c620a2d573574a3aec54ce0be","url":"./sitemap/sitemap.xml"},{"revision":"cf2bfeb4e1a400b779d4d81574f240ef","url":"./tags/Arch-Linux/index.html"},{"revision":"7e941728bc3be26e269ffef02bc4eae2","url":"./tags/index.html"},{"revision":"3904e40051a18346b501eddaf232042d","url":"./tags/Javascript/index.html"},{"revision":"48204f855570f2901e471821ecc2cf48","url":"./tags/JavaScript/index.html"},{"revision":"cd6b44067c051f4877bfc7e24697b999","url":"./tags/Linux/index.html"},{"revision":"dafd34503de292fd24d00dc554db2707","url":"./tags/Windows/index.html"},{"revision":"3935b8d4a5b0335816862609621086f2","url":"./tags/双系统/index.html"},{"revision":"92c75ee2069d85809d03e0f410e1f875","url":"./tags/数据结构/index.html"}], {
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
