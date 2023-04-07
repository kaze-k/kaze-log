const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c01faaf0e877841edea3a7a601b88ba5","url":"./404.html"},{"revision":"3c6ade2908838d2ecd1bec30c476125b","url":"./archives/2023/03/index.html"},{"revision":"3fc49588e2b8a8704617e167244d6a05","url":"./archives/2023/04/index.html"},{"revision":"4ddb9b10f3e526e73ba8c4b80ecd5fed","url":"./archives/2023/index.html"},{"revision":"5d294d62f15bf2801b7d97b07ed8fd90","url":"./archives/index.html"},{"revision":"224d5d01a0e65978cb216ca64b61f6db","url":"./bangumis/index.html"},{"revision":"2800f19f3f33bd711f9196ef0e489f81","url":"./bing.json"},{"revision":"9d95cbeb8fe35487087c6dac33dee8e9","url":"./categories/index.html"},{"revision":"fbccefd882a3f0a4643a9a4e90ef7a39","url":"./categories/学习笔记/index.html"},{"revision":"820acc34e4ff8d9218f62caf05467259","url":"./categories/工具/index.html"},{"revision":"901dd7268bcb1d9644e46c25ccd333ee","url":"./categories/系统/index.html"},{"revision":"ae9d0657b359ac4e0c62989ccf65e437","url":"./cinema/index.html"},{"revision":"f5e4fc91ff34b521975faf9bd0d5cdb0","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a395083d5d27d1ee05ff2db7e0a4fe30","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"b42d632d684353defcfae8db75d63b19","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"35a8c645b58226982c778a384a0a5567","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"bb4e47f088e5934c046a6655719c4d6f","url":"./posts/19711/index.html"},{"revision":"f673610b126d30ad9553936d038db67f","url":"./posts/21725/index.html"},{"revision":"f9f76856c0f4776fca7d583cf5091f68","url":"./posts/33107/index.html"},{"revision":"0b387bc7fb1d7012b744fd51c6163f4e","url":"./posts/33510/index.html"},{"revision":"bb8211112e0c1c0fecb4bb7c48244792","url":"./posts/33511/index.html"},{"revision":"978bd3a804b72ad736cee478ff8c7480","url":"./posts/3603/index.html"},{"revision":"35ea65d376f8a0d70deba45f27295ef4","url":"./posts/50888/index.html"},{"revision":"01b03313d511f9ebcda4e716104faabb","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"3223ddca44006888e697b222fdb91dc7","url":"./sitemap/sitemap.xml"},{"revision":"b7421e6e22c37a5d8b89ba8955654804","url":"./tags/Arch-Linux/index.html"},{"revision":"33d932bad76d4b77a9a820e35028062b","url":"./tags/index.html"},{"revision":"214ea78dd8db6b8ad30c35bf56116bc6","url":"./tags/JavaScript/index.html"},{"revision":"3bbc9e7864498fe73b6675e15fc33a6e","url":"./tags/Linux/index.html"},{"revision":"8d6e7172d5a6760c9c7372982a45c085","url":"./tags/Windows/index.html"},{"revision":"fa4fdd93cdc073bb8a7f9381e934b097","url":"./tags/双系统/index.html"},{"revision":"462ae982ea08257b185cf4735608512d","url":"./tags/数据结构/index.html"}], {
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
