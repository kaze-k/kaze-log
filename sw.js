const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f8b49117368d201b525c6f3ed01d149c","url":"./404.html"},{"revision":"21c26ec52b379db1df90df3873b6d684","url":"./archives/2023/03/index.html"},{"revision":"92769b80f2a8f123f249e3d1b240e1e8","url":"./archives/2023/04/index.html"},{"revision":"25d0ebb0d3c30d99a9a6ec1894128a48","url":"./archives/2023/index.html"},{"revision":"a77b47ca92f5699a74c766963a424544","url":"./archives/index.html"},{"revision":"41593a4d3642da065a805e99ac1facf8","url":"./bangumis/index.html"},{"revision":"e6afb1cb2f785c0deed26f6b4ddfe0d5","url":"./bing.json"},{"revision":"58861e67cfa16ab203e46598518818a9","url":"./categories/index.html"},{"revision":"ae4e8964eeb608ec24b7d00cf3343e91","url":"./categories/学习笔记/index.html"},{"revision":"f1a6125b6ffc455e4e98c7bfc4ed86aa","url":"./categories/工具/index.html"},{"revision":"8eef02ae6187ea9f3edd99dae24d200a","url":"./categories/系统/index.html"},{"revision":"6a4d47d0054d04da43959ceda489ec9f","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"2ae4dbae10054e803095d97208cc7ed9","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"69fe0311efc390558e3e75e7347b2f87","url":"./feed/atom.xml"},{"revision":"02116db844cdef079b5383e8e6929e55","url":"./feed/rss2.xml"},{"revision":"a4c30732ca75c62a4735abe3fff81cbf","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d9c55baf605287d204f4f16a0a166801","url":"./posts/19711/index.html"},{"revision":"eb299dfa3312692ee137d044a62b2479","url":"./posts/21725/index.html"},{"revision":"08bcdaa32d76f68495fa42c30fab9f05","url":"./posts/33107/index.html"},{"revision":"dcb77122070393ea2d3616e66cdc468e","url":"./posts/33510/index.html"},{"revision":"abc6704bb2512168bec37edb5ebe3deb","url":"./posts/33511/index.html"},{"revision":"1368c31e69ea1ff25acb36bdedd576a8","url":"./posts/3603/index.html"},{"revision":"7b2986973497a2eb7aa3ede787ffa782","url":"./posts/50888/index.html"},{"revision":"0143d46e22e1a71752208ceace34fa3a","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"cfd89fd19957432e06f4b413cb11da86","url":"./search.xml"},{"revision":"5e52bc57ad299ad0a700394881320f27","url":"./sitemap/sitemap.xml"},{"revision":"a4473043d4de5b5b913a1ee637fb9f61","url":"./tags/Arch-Linux/index.html"},{"revision":"ae7f1028a20d40c84827e2482bb6c6de","url":"./tags/index.html"},{"revision":"9fbd6d17562169e9d88ac5d43f4f5316","url":"./tags/JavaScript/index.html"},{"revision":"c244a17747e0ea1b00ffdca2e2cbd523","url":"./tags/Linux/index.html"},{"revision":"60f1a2cad001c7f89ed67571b8cad541","url":"./tags/Windows/index.html"},{"revision":"383eecf792db538bcdaa0c51d7c66195","url":"./tags/双系统/index.html"},{"revision":"e34c87072ab19fb57520ea0ec432062d","url":"./tags/数据结构/index.html"}], {
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
