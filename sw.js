const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"979d214d58569a95e84998ddcfd968ba","url":"./404.html"},{"revision":"305a065bb91a13add6a796ae1af3d54f","url":"./archives/2023/03/index.html"},{"revision":"7313bdfe28b34e640af3aece5b7ba9ef","url":"./archives/2023/04/index.html"},{"revision":"46974fff1f0cb0e659c17c78075f9ca0","url":"./archives/2023/index.html"},{"revision":"cb3d2b66ce7681cfd3059ccf12b189f4","url":"./archives/index.html"},{"revision":"f2d3a31d01285696d7eac7491665e39d","url":"./bangumis/index.html"},{"revision":"8f7f7ef34d81a1f7c7146db949d76ff8","url":"./bing.json"},{"revision":"babd643ade9cede3f289162a3af2a82e","url":"./categories/index.html"},{"revision":"a2de1e3408828be4ce2742ef43071d28","url":"./categories/学习笔记/index.html"},{"revision":"8c409030945d5e1b9a123df8fd029697","url":"./categories/工具/index.html"},{"revision":"ef87f71c78f9ad879118e44ac3d449f5","url":"./categories/系统/index.html"},{"revision":"12880c542b007bea0fd9d61014e799f5","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"461a0838c947fed49eb0f355e415dd10","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"531e40f743e0a36903928a2262fa14a0","url":"./index.html"},{"revision":"7b6beb3b3bb08111eef024d76c569b15","url":"./js/custom/animation.js"},{"revision":"a8c69784e47c9ee7e10dd9440057efde","url":"./js/custom/screenfull.js"},{"revision":"c5345602114af216187c94703f23ea82","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"22c0a8e0fc2e706178763b2876b1da1a","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./js/utils.js"},{"revision":"db2d679b1b75c849613aadd8895fd925","url":"./posts/19711/index.html"},{"revision":"c898727105aaef5581776fcb29c0ad2a","url":"./posts/21725/index.html"},{"revision":"9ca1ca2df28fb18e4c437661fa2c14c3","url":"./posts/33107/index.html"},{"revision":"a060e1649af6bb896b092abe27ca5b55","url":"./posts/33510/index.html"},{"revision":"726b579c8bf03c2f28bf023c8b43e8ac","url":"./posts/33511/index.html"},{"revision":"5baeb94f6738d53c337a0929f62c10da","url":"./posts/3603/index.html"},{"revision":"394b4250a3dc249337a6b66b7c26a7c3","url":"./posts/50888/index.html"},{"revision":"80b4af934cfa313d9a855ee064bd8f3e","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"c1b4d9e05495ad4467314efd78fd6b8a","url":"./sitemap/sitemap.xml"},{"revision":"35fc4254578fde8b1a33990b94dc95a6","url":"./tags/Arch-Linux/index.html"},{"revision":"e6a536f372dd8f97436a0e2f7fa7ad81","url":"./tags/index.html"},{"revision":"5cd48bdf56d7fa6365d41254f6301b69","url":"./tags/JavaScript/index.html"},{"revision":"d0d85ed2b28afc64b24e9f53404be266","url":"./tags/Linux/index.html"},{"revision":"5ecbe0d7ef80941f39916ff5b0a4d0ce","url":"./tags/Windows/index.html"},{"revision":"ae4fe40fc54071d6d2a87879d30b05b3","url":"./tags/双系统/index.html"},{"revision":"eb1fc197bfedddbb0660a25d4d8b1408","url":"./tags/数据结构/index.html"}], {
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
