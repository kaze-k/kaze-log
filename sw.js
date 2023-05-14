const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"97b05e5026f376b560c35f8c29a65d58","url":"./404.html"},{"revision":"57bb5d3c72c0dcf8e9d73169c4f278d7","url":"./archives/2023/03/index.html"},{"revision":"b24ea36371fbd8997912b5c7f07460fe","url":"./archives/2023/04/index.html"},{"revision":"0ce565923d54cbe4d29550e9d7461e68","url":"./archives/2023/05/index.html"},{"revision":"d58e6692538b045190993ebc344f9184","url":"./archives/2023/index.html"},{"revision":"1696ce66feb4454861f346435539fd1f","url":"./archives/index.html"},{"revision":"21abced93981d6eb52360f5b1667c576","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"5c2e273f2721b11e80cfc4f93c193f98","url":"./categories/index.html"},{"revision":"8dfcb5f27357919bededde46d1b1ec3d","url":"./categories/前端/index.html"},{"revision":"10c5aa7be171cd0962d549f3a735e374","url":"./categories/学习笔记/index.html"},{"revision":"c9269fc1ee7e9ec10e3bb4c1c1af8e16","url":"./categories/工具/index.html"},{"revision":"2ba0554fd5ced109304366739ea1c530","url":"./categories/系统/index.html"},{"revision":"ff30f87ac79d1c405df5db8e7ff982de","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"85a43720153b75755df3cd46a8293527","url":"./feed/atom.xml"},{"revision":"d1269ebddb9b841649f14e2201ac16e9","url":"./feed/rss2.xml"},{"revision":"286dc7969feffcee305aa6efb76129f2","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"a9268d93030baf9eaab650e313f08b3b","url":"./posts/19711/index.html"},{"revision":"946360d95334257229d95f8056212a1b","url":"./posts/21725/index.html"},{"revision":"4c829dfff0b38a2ca723185c816508bd","url":"./posts/33107/index.html"},{"revision":"1cdf5c5dbe907d0fb9c2f7c393c9bf75","url":"./posts/33510/index.html"},{"revision":"0216c96dcea40bf71a7158ed1109d6eb","url":"./posts/33511/index.html"},{"revision":"f6b12ed72af7b44a6c614d61c2233e04","url":"./posts/3603/index.html"},{"revision":"1fa2c111740e93ff8e70d7dc519c55ba","url":"./posts/3a68f348/index.html"},{"revision":"c5e338cc85482c098dc65549e7720bb0","url":"./posts/50888/index.html"},{"revision":"ea34c7b024e9b1b2cec22708d9eaa8b7","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"e55cdc5dff8d5dafa31a8d45e40541a1","url":"./sitemap/sitemap.xml"},{"revision":"c05e2448e5b9abbcdc242917a06cd6be","url":"./tags/Arch-Linux/index.html"},{"revision":"2dc65a5c56837aad94602767509310ce","url":"./tags/index.html"},{"revision":"1a92dc0304b1a59d54c6bf21e9fec187","url":"./tags/Javascript/index.html"},{"revision":"c8acfe06c42c7e9b93e99f57abe8ed41","url":"./tags/JavaScript/index.html"},{"revision":"2473acd3df2024fb5a7d11b5bc7b9b1b","url":"./tags/Linux/index.html"},{"revision":"bb1cd459a9c4c76840c2c4fe99c8fb3c","url":"./tags/Windows/index.html"},{"revision":"6a8710be7cbd7cbf0949bf99ec8eb0c9","url":"./tags/双系统/index.html"},{"revision":"2115ae57489855c5554ec54497d050ac","url":"./tags/数据结构/index.html"}], {
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
