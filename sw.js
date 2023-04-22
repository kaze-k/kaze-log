const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"50251b743a569206d258bd8f236ad780","url":"./404.html"},{"revision":"3cda93752f8345533deba7528a2dbe74","url":"./archives/2023/03/index.html"},{"revision":"8df3027efb55b62857c7faf6e0971f63","url":"./archives/2023/04/index.html"},{"revision":"0ffa72bd703b36133cdb5862cf7edb46","url":"./archives/2023/index.html"},{"revision":"16203a323506333107623d4237dd27c1","url":"./archives/index.html"},{"revision":"3416d9c381ab115eef7e64ca6f480487","url":"./bangumis/index.html"},{"revision":"9d3b5bde1b723c821d4aaa84261e2fac","url":"./bing.json"},{"revision":"970bff1e56b3f52ed88cab8cf12d053f","url":"./categories/index.html"},{"revision":"aef8f40d2f13a7ca9d1f5dcdfb20e984","url":"./categories/学习笔记/index.html"},{"revision":"561cc39a09f36c977c9d1280007a7da9","url":"./categories/工具/index.html"},{"revision":"d5a5a0ceb3b7c6675abd11091f07c2f7","url":"./categories/系统/index.html"},{"revision":"97b578698a597379c063e7cd89a93e36","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"2920e0dac0e79035a0e2d02dcae4d265","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4b72e975f91aaf1ded625508f3cc2a97","url":"./feed/atom.xml"},{"revision":"4757f16eeabed20380413b5430a1c6a6","url":"./feed/rss2.xml"},{"revision":"23278de74133da5218810a2fead6fc24","url":"./index.html"},{"revision":"6dd9e066a6d1d5ab693809668e804547","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"c64a6f705e61d961a01378a0bb1ad370","url":"./posts/19711/index.html"},{"revision":"20817953d99c2158ca1ddc12c7ce218f","url":"./posts/21725/index.html"},{"revision":"2dd3a26c2c3118527ba9d1e3f634324c","url":"./posts/33107/index.html"},{"revision":"80b745a22779e6d84dfb56036e8d2a1d","url":"./posts/33510/index.html"},{"revision":"e6f6249196fcbfc6c0e6969de5023378","url":"./posts/33511/index.html"},{"revision":"6dabe05007eeec15886640833a5d15c4","url":"./posts/3603/index.html"},{"revision":"f5916d9a4fcad13a8aea6bc1c5c8ec93","url":"./posts/50888/index.html"},{"revision":"9deb3a833f02e619c38b238e27932357","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a8c9db9405c4291cd6679899bbf01f36","url":"./search.xml"},{"revision":"b2d5ac3b19b29cac05ca4765da40955b","url":"./sitemap/sitemap.xml"},{"revision":"9da37716320b4a0793a7f164011e4bea","url":"./tags/Arch-Linux/index.html"},{"revision":"5d701264c5b73dc00ecc24632647cef8","url":"./tags/index.html"},{"revision":"f62ffefadf066d88befcc73119659007","url":"./tags/JavaScript/index.html"},{"revision":"37948b9cecd522153993fea83ca72998","url":"./tags/Linux/index.html"},{"revision":"cceca28ab95f7d7c3acf6851891a1f8c","url":"./tags/Windows/index.html"},{"revision":"59f8412e5fbf0aed151cc1f36002b202","url":"./tags/双系统/index.html"},{"revision":"125a5fd21286fb95f71b27a1325a4887","url":"./tags/数据结构/index.html"}], {
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
