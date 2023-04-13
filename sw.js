const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"926091358cfa9445fcce11b18bd3bdd2","url":"./404.html"},{"revision":"6ee170d4555088a85e2f33c0afa1c156","url":"./archives/2023/03/index.html"},{"revision":"ef385214b7504bbbc9ee45a70922091c","url":"./archives/2023/04/index.html"},{"revision":"f25e8e27119f789308c40dcc773f4f18","url":"./archives/2023/index.html"},{"revision":"abd08fc2dbedda6240d8bfb50e71b5e3","url":"./archives/index.html"},{"revision":"4ee2c1e8feabb69249f40a6a7da8e582","url":"./bangumis/index.html"},{"revision":"8f7f7ef34d81a1f7c7146db949d76ff8","url":"./bing.json"},{"revision":"2bd42ab823add19ddbd2091178fa0aa4","url":"./categories/index.html"},{"revision":"67749e8700b1fe98177960df4630821a","url":"./categories/学习笔记/index.html"},{"revision":"d218924c8dfea92a733ca7fff5809a46","url":"./categories/工具/index.html"},{"revision":"c6584ae225243252760ab67b3639ae29","url":"./categories/系统/index.html"},{"revision":"178a690228b03020e5b55790f8ad94f4","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"461a0838c947fed49eb0f355e415dd10","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"891a8ac3b095e648692d7bd5aeea96cd","url":"./index.html"},{"revision":"89efdc039968d824306d4bc283befc7f","url":"./js/custom/animation.js"},{"revision":"37d29fbaeb58f029ee8951f07877441a","url":"./js/custom/screenfull.js"},{"revision":"e34a94d0d586173f677dbeb573f13d68","url":"./js/custom/title.js"},{"revision":"df75151364f88fc8aaa0f92aa8ee9188","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ec2505cd1e8fba24b77b1430d7545845","url":"./js/main.js"},{"revision":"3038b226c33bf869a4891b04d3b32591","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./js/utils.js"},{"revision":"e8295c8ee2f4f299eb99fea45963bef8","url":"./posts/19711/index.html"},{"revision":"49ca2a357ec3f4883da14dbb51ff187b","url":"./posts/21725/index.html"},{"revision":"cfd3c206c4485f2ca086e65343e36951","url":"./posts/33107/index.html"},{"revision":"34f7500642ef6c8f51b5954101b2ec6e","url":"./posts/33510/index.html"},{"revision":"ac29145eb64fc978cc1b63999b00a9b6","url":"./posts/33511/index.html"},{"revision":"2777be42ae1c74b45a5d20b9ebedb4de","url":"./posts/3603/index.html"},{"revision":"4088f469ce9a58365b842a73e833d3be","url":"./posts/50888/index.html"},{"revision":"21deffa5fae89c1cb8ef8cfbc91d3df9","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"a76610d24f4ffe4b6bbcf14be8965880","url":"./sitemap/sitemap.xml"},{"revision":"1b8dcb7c0aace94f0be3f130fa04021f","url":"./tags/Arch-Linux/index.html"},{"revision":"dd050bf0bc3415c23ec5bce92c4d7250","url":"./tags/index.html"},{"revision":"b92e0fbcc2475157855aa5fdb88398be","url":"./tags/JavaScript/index.html"},{"revision":"7adfa48b2452d747608273f4a7893af6","url":"./tags/Linux/index.html"},{"revision":"c2d053ba92e3600603bcb723757f802c","url":"./tags/Windows/index.html"},{"revision":"86d27b63a20ee2098a36a3f277671753","url":"./tags/双系统/index.html"},{"revision":"f52a4d6ef3b17ead8ce3a74408d381e7","url":"./tags/数据结构/index.html"}], {
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
