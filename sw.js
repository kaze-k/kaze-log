const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9220417a672a540c70802cb4d61fb418","url":"./404.html"},{"revision":"e25e4b1fff60fc7a4e71d443b4221a23","url":"./archives/2023/03/index.html"},{"revision":"e1308efaddf2adc0f91da7577fbca324","url":"./archives/2023/04/index.html"},{"revision":"d2794a3d1e9eff331c043b15c07fac8f","url":"./archives/2023/index.html"},{"revision":"e1f12793fbc5016d520d5ef31eb247e1","url":"./archives/index.html"},{"revision":"8eeb2c3694c3e49dc6c888afcfa503cb","url":"./bangumis/index.html"},{"revision":"38e5e3bffdbed7f88c677c3233a90402","url":"./bing.json"},{"revision":"58f9b246abc03115f230447b920d5c86","url":"./categories/index.html"},{"revision":"b0de0b3119fa769c5e18a37fffeed7dc","url":"./categories/前端/index.html"},{"revision":"164818ff26166ca4fb9bad0b420e4426","url":"./categories/学习笔记/index.html"},{"revision":"a31d8b462430f11fee97120d32597fdd","url":"./categories/工具/index.html"},{"revision":"87355cf295a774b573e77c91f7388dd8","url":"./categories/系统/index.html"},{"revision":"537f49e1c256fdc26dbeea16977dfd4b","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"21f9a733204fcb097f1437213b2502db","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c839175a4293dd603b531d278df8a54f","url":"./feed/atom.xml"},{"revision":"e25d7cdf6a78a8ee815fbc7cde4a0ad3","url":"./feed/rss2.xml"},{"revision":"ecad4770ce81290506931e4c262cb831","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"dfee048df841a9ecca08dce7c0683960","url":"./posts/19711/index.html"},{"revision":"842e8d2c3349e171d7ce06559df11162","url":"./posts/21725/index.html"},{"revision":"d93ed41dd69c3735d7bdcc657244b266","url":"./posts/33107/index.html"},{"revision":"270f7d1ea52281f783f3368043b9bcb5","url":"./posts/33510/index.html"},{"revision":"7eb590855b00cf4ebb3b27c43b06721e","url":"./posts/33511/index.html"},{"revision":"a56f7a131a9c860f4e80a10efa8f71c0","url":"./posts/3603/index.html"},{"revision":"d2b4461de46fa411d4d232aed755d638","url":"./posts/3a68f348/index.html"},{"revision":"8a3d96e7ae87802ed3b8c8ae457587b3","url":"./posts/50888/index.html"},{"revision":"6d5d4a093ef09368c367d612e0e666b4","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"de72a19220054f488b594b524a780617","url":"./search.xml"},{"revision":"55abffca754d6a0f732551446bfeb838","url":"./sitemap/sitemap.xml"},{"revision":"a92c0ee5ddacbc10ca9994824ad3b679","url":"./tags/Arch-Linux/index.html"},{"revision":"8ef1265f696031ac45063a3f567378f2","url":"./tags/index.html"},{"revision":"477a2e0579160c022f9b1ad8729c2071","url":"./tags/Javascript/index.html"},{"revision":"32dfb97d34659dfbba56782f4333443f","url":"./tags/JavaScript/index.html"},{"revision":"3583f19bca6aaeb522a033bb76f4dd19","url":"./tags/Linux/index.html"},{"revision":"7e24cc77acdc13c5ba1fc45ae2d2ca45","url":"./tags/Windows/index.html"},{"revision":"90070dcec93d7a539fc5880f63598f99","url":"./tags/双系统/index.html"},{"revision":"adb105979af0a5b4abd0a12021af8d68","url":"./tags/数据结构/index.html"}], {
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
