const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b7c82291b4e2b875a60c570400dcef85","url":"./404.html"},{"revision":"ba1ffb2545590df00253fac6b8d25310","url":"./archives/2023/03/index.html"},{"revision":"310a3870fc86f42d876aee97cae38070","url":"./archives/2023/04/index.html"},{"revision":"31c651e2fa5596163a4a110bf2f06681","url":"./archives/2023/index.html"},{"revision":"2d9607a225eb276ab897af5f35fb7e51","url":"./archives/index.html"},{"revision":"8fb346dba0b855e264fd74658b54e8ee","url":"./bangumis/index.html"},{"revision":"1b3a83d5112d3bb54e2f21e8fd5e7f53","url":"./bing.json"},{"revision":"0eb57b23fecd568200c6ce7e1b73029b","url":"./categories/index.html"},{"revision":"2adb32dffa63bd5d2ccf8041f22f02ee","url":"./categories/前端/index.html"},{"revision":"397eee36753424cb8936c98cffc1d408","url":"./categories/学习笔记/index.html"},{"revision":"4ed0bf8bf94bd4697e7a942b25caa134","url":"./categories/工具/index.html"},{"revision":"3ebbf0ccbd3eab1f708c21b7955bf943","url":"./categories/系统/index.html"},{"revision":"253facaec406969124798da90323226b","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"9206ca07b86aa6713733960ba9559767","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f35b56605b8707855762ab6bde679324","url":"./feed/atom.xml"},{"revision":"150a9b3ad8cdbfe3daa1789fed746b92","url":"./feed/rss2.xml"},{"revision":"170eb7605be4bcbfb8afeaa90ec022dc","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d401c418a30b663c0498990155be56d4","url":"./posts/19711/index.html"},{"revision":"8b5352c89a85ccb591b15ead46f9c9a4","url":"./posts/21725/index.html"},{"revision":"8807b2fb6dd135216695e1ae9ef76bf0","url":"./posts/33107/index.html"},{"revision":"56fa6017db6691a36a173eff0d8670c4","url":"./posts/33510/index.html"},{"revision":"8fb6d140a1f84a474a3e1cbbf78bee6d","url":"./posts/33511/index.html"},{"revision":"177a6f7d5193292259ffe0143c8379ff","url":"./posts/3603/index.html"},{"revision":"3ebdc24f8df1032f61f1d81833ca2212","url":"./posts/3a68f348/index.html"},{"revision":"938ac7cf2a3ad6963f245baa8a7258ba","url":"./posts/50888/index.html"},{"revision":"09e0f6ff6571a5669442579fbe387bc1","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"4872d15e0bc1511a45a1392a022c8e3a","url":"./search.xml"},{"revision":"977f60273073abec0f92be9fc6ea525c","url":"./sitemap/sitemap.xml"},{"revision":"dd1888778ba75449fb7f98554fe50a6a","url":"./tags/Arch-Linux/index.html"},{"revision":"5a0be43aa9c300e0ec5967b3537a274e","url":"./tags/index.html"},{"revision":"a77a8e6d08536de1d2bdf1fc3d5378b3","url":"./tags/Javascript/index.html"},{"revision":"ae9a1644b85a724d10516e6007963b9d","url":"./tags/JavaScript/index.html"},{"revision":"c08631180b76d7161cd1a1a77c4de3a8","url":"./tags/Linux/index.html"},{"revision":"00c944e44fdb1e7be813116890b489e1","url":"./tags/Windows/index.html"},{"revision":"eb85e3c2eab5b1d354112fea7c218526","url":"./tags/双系统/index.html"},{"revision":"e2c7983ede2c11cffb2746227ec8b4d3","url":"./tags/数据结构/index.html"}], {
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
