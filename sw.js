const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8175501d67c8a67b23aae1df3eddf028","url":"./404.html"},{"revision":"32be85d2efb4a584cecc29cc861ad573","url":"./archives/2023/03/index.html"},{"revision":"f2efd69febcde46ed07d0f9dd0484f5f","url":"./archives/2023/04/index.html"},{"revision":"1898e2a00c00d7d45f7e21b0b35972ec","url":"./archives/2023/index.html"},{"revision":"92b51692ab0968bac4853d942fc71b9d","url":"./archives/index.html"},{"revision":"22c9eac5a5e42ab54da25c4b428dce14","url":"./bangumis/index.html"},{"revision":"2564466f8f8aed9d8d5d382675c06d7c","url":"./bing.json"},{"revision":"6f165aebd3a54065f84f795390391559","url":"./categories/index.html"},{"revision":"9c1985ab44c243627e50e6d446982ae6","url":"./categories/前端/index.html"},{"revision":"6009e14d23e00c916abd759236daf98c","url":"./categories/学习笔记/index.html"},{"revision":"d67dfcc3576ee01906abe0c6dad7ad3b","url":"./categories/工具/index.html"},{"revision":"37307cfc3507735e1dc3f806ab717f46","url":"./categories/系统/index.html"},{"revision":"da916deace7b869765c9262cb66e5017","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"53578f52843410b20a89b4f250d111a3","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d811b0f2183af3feba479c3200180058","url":"./feed/atom.xml"},{"revision":"1eb5acab2a9772a03ff8e19fe891fb2d","url":"./feed/rss2.xml"},{"revision":"5df0ae4b0c1bed4c54fbd29b4dbd5273","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"81f8cbc41ba6b4901808b65be0968ddb","url":"./posts/19711/index.html"},{"revision":"3fbe9da9d645523a6d80322569fe3e2c","url":"./posts/21725/index.html"},{"revision":"3be0b8fccd15e5a716ae4ae92ef36ab8","url":"./posts/33107/index.html"},{"revision":"7438591beb5cc23f1025e90d800d80b4","url":"./posts/33510/index.html"},{"revision":"7b7d3b7fc02b0e970c28729f8cca35ff","url":"./posts/33511/index.html"},{"revision":"32a7303f1032b433d00551ded4f7337a","url":"./posts/3603/index.html"},{"revision":"06657193bb01b97876caec48f9c8e0e7","url":"./posts/3a68f348/index.html"},{"revision":"e058c00953497ce76fbd8430a73fd0a9","url":"./posts/50888/index.html"},{"revision":"c3cd4862b2084264ef909b4a3419e980","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"415f03143a9e13573d317bfe257b9ad2","url":"./search.xml"},{"revision":"53a7b9503a2633c13b0aa386857d6def","url":"./sitemap/sitemap.xml"},{"revision":"6199a0eb2148af7962d5c7ca1ff671e6","url":"./tags/Arch-Linux/index.html"},{"revision":"59bb13a4758755d87a0912e3eb78082b","url":"./tags/index.html"},{"revision":"3201f00dea244cfadf719a185a4092e8","url":"./tags/Javascript/index.html"},{"revision":"570f7dd29b8775e1b538429a3b458a62","url":"./tags/JavaScript/index.html"},{"revision":"134372c08000cda1b6cce23e270a9b28","url":"./tags/Linux/index.html"},{"revision":"d1e8a28ce6dc675483e183bb5e93753b","url":"./tags/Windows/index.html"},{"revision":"72e07cca961428019a57afbcfdf51199","url":"./tags/双系统/index.html"},{"revision":"96309ec8795b052c03d447d5618fd26f","url":"./tags/数据结构/index.html"}], {
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
