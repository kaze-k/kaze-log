const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7e9b0c8863e28eb627ce87bcebeeabbf","url":"./404.html"},{"revision":"ee3fc603034b3a01bdb8848ae87fe89c","url":"./archives/2023/03/index.html"},{"revision":"0a8596253a875074868315600c899019","url":"./archives/2023/04/index.html"},{"revision":"02e356731ad4c266762bb9ef020bf21e","url":"./archives/2023/index.html"},{"revision":"a9cd4aa044a1c95d4d757829982c0f63","url":"./archives/index.html"},{"revision":"316b2047b3abadeae0f094490bba7de5","url":"./bangumis/index.html"},{"revision":"5e181e77c906e00c50837b65c91dfd22","url":"./bing.json"},{"revision":"87974cabf30e3d172a53f55cc9fb656c","url":"./categories/index.html"},{"revision":"5fc107cc7e1057d21dd375f8e705cadc","url":"./categories/学习笔记/index.html"},{"revision":"22dd3e534470dff9148f0e95ea7bdace","url":"./categories/工具/index.html"},{"revision":"6cafe80c5d5726d9efdde9256ca626d2","url":"./categories/系统/index.html"},{"revision":"5ca6d70427998f9b8b71ea7f3ca327ec","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"0056e7425a06ffb149922cf4699a216d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5258d61e1cf06d6dfc059b679a701f37","url":"./feed/atom.xml"},{"revision":"445d3ec09535b0657189ad1c273a70e3","url":"./feed/rss2.xml"},{"revision":"5328b9b42c16d868bfcbe557b9378e64","url":"./index.html"},{"revision":"4441dae678653d9d702bd8cb88a99fc4","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"c985965ea04217e8c6a4ab20f796d1bd","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"edc582dd16ced4111ea0ea574419d784","url":"./posts/19711/index.html"},{"revision":"2f59ed7ba43c2ff3955f0cf07c40d92e","url":"./posts/21725/index.html"},{"revision":"30e07a35c1c0e081af62c7c4907c6509","url":"./posts/33107/index.html"},{"revision":"8db541660648800f13c8644af62608ed","url":"./posts/33510/index.html"},{"revision":"5a05c4bca7a1dfcbbfa7e3038d141867","url":"./posts/33511/index.html"},{"revision":"70d6eed46ea251a7955d70b78f13a7f5","url":"./posts/3603/index.html"},{"revision":"5a3793c7e317adaa7538828f4e16aee0","url":"./posts/50888/index.html"},{"revision":"c0d863186ee87d27b570766a43f57a17","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a47b85ef41fc89458a3eb0a22bdaa88a","url":"./search.xml"},{"revision":"3856ca274d033b7d58f61437b10d5152","url":"./sitemap/sitemap.xml"},{"revision":"2bd4ec3c384aa52193bec5632c7c30e5","url":"./tags/Arch-Linux/index.html"},{"revision":"b8b818263eb14851c7cc880e306a6420","url":"./tags/index.html"},{"revision":"15a192d5229e465f5cfadb261776e33d","url":"./tags/JavaScript/index.html"},{"revision":"928233fc5cd61dcf2f438c97d24e2318","url":"./tags/Linux/index.html"},{"revision":"1101047dab54f7157acef12ace5e0691","url":"./tags/Windows/index.html"},{"revision":"7aa81888af8ab22b63e66e1b5ea6fc79","url":"./tags/双系统/index.html"},{"revision":"01c70642f2f34cbd33a1c619f5e27ca5","url":"./tags/数据结构/index.html"}], {
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
