const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"07e79364a09684796f467206bf795ec1","url":"./404.html"},{"revision":"0aeb8357c40ad3270dc2badd2e7ee244","url":"./archives/2023/03/index.html"},{"revision":"acb0db9f5eee3e3babe7495341d80c2d","url":"./archives/2023/04/index.html"},{"revision":"c23925327a4670b2638e97ecb86cc845","url":"./archives/2023/index.html"},{"revision":"1fc2b4975ad37cc640369d75c1407a16","url":"./archives/index.html"},{"revision":"80dba38f963f20f926d26755210f30a2","url":"./bangumis/index.html"},{"revision":"71d4af95c15b46def2e8411feaf3b144","url":"./bing.json"},{"revision":"71f7c2446668b21c867affef3b2ccb24","url":"./categories/index.html"},{"revision":"9872d3bc1235dbe61066c3562feb20ce","url":"./categories/前端/index.html"},{"revision":"acc2e496b1528218d16fb13235b14046","url":"./categories/学习笔记/index.html"},{"revision":"74882c48a8fd52497b4ec233129216af","url":"./categories/工具/index.html"},{"revision":"bac94ef047d8dddfb8a2b3fb09b9afce","url":"./categories/系统/index.html"},{"revision":"958971d8f71a1009f710a62ae47316f5","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"aa7e22502993c79485fde51b5cd3231d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f35b56605b8707855762ab6bde679324","url":"./feed/atom.xml"},{"revision":"150a9b3ad8cdbfe3daa1789fed746b92","url":"./feed/rss2.xml"},{"revision":"3699188f83194de638a9fdcad87e9b00","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"1e2449a2ba8c94cd26288a3eaa321626","url":"./posts/19711/index.html"},{"revision":"ab50ff6e625beb0b61d81d90b7d1b4db","url":"./posts/21725/index.html"},{"revision":"42b937a92827ff9884c4f2942836e17d","url":"./posts/33107/index.html"},{"revision":"ed078aaabe233bf626a5abd9bc96cf5f","url":"./posts/33510/index.html"},{"revision":"575cb98c7819338591fb226fcdc1b3fd","url":"./posts/33511/index.html"},{"revision":"32435213c534ebf8f8075a2c889815f9","url":"./posts/3603/index.html"},{"revision":"0a33dafa389e90c9b4b0c15af9d47fc2","url":"./posts/3a68f348/index.html"},{"revision":"668f16d50f045b1db16a489927fae6e5","url":"./posts/50888/index.html"},{"revision":"93f688435072d41e34ca9744ecf3e0fe","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"050259e023469953a5674d457bc7efc1","url":"./search.xml"},{"revision":"05d2f2cd53002db5962f3e88cbd48965","url":"./sitemap/sitemap.xml"},{"revision":"6b605744cd730fa60eeb148e5abc2d13","url":"./tags/Arch-Linux/index.html"},{"revision":"c7f2e462194d53f7bdccd74eb17cba49","url":"./tags/index.html"},{"revision":"2ecd3c2e1c46a87fb3a5c047d8bbe21b","url":"./tags/Javascript/index.html"},{"revision":"2a720e5e4dfed9a9e57974bfb1ba6b86","url":"./tags/JavaScript/index.html"},{"revision":"3413a22a44cb2763c371488c0edd9850","url":"./tags/Linux/index.html"},{"revision":"1cd0f4e80645934a2455fea6c69aaf44","url":"./tags/Windows/index.html"},{"revision":"7f65ad311e9903640e34fb9101d6a332","url":"./tags/双系统/index.html"},{"revision":"d8b746568ac812ce306ea7b8f555f822","url":"./tags/数据结构/index.html"}], {
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
