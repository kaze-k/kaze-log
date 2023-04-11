const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"210493d5717d1681d9fa23dffe5e117e","url":"./404.html"},{"revision":"437e9ecd1a8a89de2b7874e307aa0527","url":"./archives/2023/03/index.html"},{"revision":"ef8dc428917abfd663370d9bc5809ed8","url":"./archives/2023/04/index.html"},{"revision":"e20a2aba9ae894adc5a4c7413f2895ec","url":"./archives/2023/index.html"},{"revision":"fb527aa84df27a31e6f7cbc320e50ab6","url":"./archives/index.html"},{"revision":"9c2a53fb02149657ffc20a5daf996112","url":"./bangumis/index.html"},{"revision":"4d4a4039411a8239243aefe9b602a140","url":"./bing.json"},{"revision":"8a13613433d845bc61cb160022ecf432","url":"./categories/index.html"},{"revision":"88c32e05463eaa010e38765ec14e3926","url":"./categories/学习笔记/index.html"},{"revision":"10154dcc3a3629c53b44ca4e008ced42","url":"./categories/工具/index.html"},{"revision":"3aedf1c694ab64be9c98acba120edd90","url":"./categories/系统/index.html"},{"revision":"d7c882dd9f29747acf8657bacf2696f3","url":"./cinema/index.html"},{"revision":"53164529b4dd7325ba99d2e159aa14c3","url":"./css/custom/weather.css"},{"revision":"de54a4b72b30ebcb40a1364211a30290","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"893462b4a67bfc774adb5e70076633f3","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"6390360ff920e79caabab2ce9d5ac0f7","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"de715423611137b3a2ff0633d819e815","url":"./posts/19711/index.html"},{"revision":"6f05b8ba585a08c27dbf56b5779187e6","url":"./posts/21725/index.html"},{"revision":"6206b05533f3e11158d068744ed5cfef","url":"./posts/33107/index.html"},{"revision":"c11db6ee92c55e4ac17419d87092185f","url":"./posts/33510/index.html"},{"revision":"c906e6e4bff628196403bf6233ca3824","url":"./posts/33511/index.html"},{"revision":"898e61221c561928d1ce2ba5bb265f5c","url":"./posts/3603/index.html"},{"revision":"4f9eddb6d8fadc5c7fe2f53b81b31d8f","url":"./posts/50888/index.html"},{"revision":"4bc76eb06dd931e7f69099e98e09feb5","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"5b580f61dbe798cd4edf0edd1774e16b","url":"./sitemap/sitemap.xml"},{"revision":"2a8f16d30cbf8f8a2ebc7344465f99c2","url":"./tags/Arch-Linux/index.html"},{"revision":"59bd0094f06cb547f773e015e3f17ae9","url":"./tags/index.html"},{"revision":"162d7423e7ec1a4c3c992715385f824e","url":"./tags/JavaScript/index.html"},{"revision":"4f2ddd9ac909b78821af81e8fc4c7619","url":"./tags/Linux/index.html"},{"revision":"1997eebc6e8262d19707e927b6f36865","url":"./tags/Windows/index.html"},{"revision":"6c6b1e6fc8a7225e680bad4d8633be58","url":"./tags/双系统/index.html"},{"revision":"cfda35b3413396daaf8b9beb023ae027","url":"./tags/数据结构/index.html"}], {
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
