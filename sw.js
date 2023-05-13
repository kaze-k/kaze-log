const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"904fb52a8bc6c8a4a508c56df1fadbc4","url":"./404.html"},{"revision":"7f3f507464beaee21f00f2ee31fbe56e","url":"./archives/2023/03/index.html"},{"revision":"4458c33ad21b0249cb1d0a37d733bc43","url":"./archives/2023/04/index.html"},{"revision":"918257cd5aa1a510316c8e96e7e732eb","url":"./archives/2023/index.html"},{"revision":"a36d8c65870c1c7f7e05b7014c1caa47","url":"./archives/index.html"},{"revision":"129cd505e9d6676d28a4354d87f50f05","url":"./bangumis/index.html"},{"revision":"b85797b96ee3903683823f441ee20c2a","url":"./bing.json"},{"revision":"d55ad4feec8e8956e0c4951436130130","url":"./categories/index.html"},{"revision":"734fe14c23d5a082385d72cebb9a0942","url":"./categories/前端/index.html"},{"revision":"6b9a1ba47fbaa913576b6c5f8e32cffe","url":"./categories/学习笔记/index.html"},{"revision":"c3e6403372f87fa4b4809e667a43f9b7","url":"./categories/工具/index.html"},{"revision":"b0a8c9aa6bc1c9e69fa96d2361d92f9d","url":"./categories/系统/index.html"},{"revision":"c73a21f0992471e46ada852b043354b1","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"62bfe2c1384283729ab1480b8e23a257","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"32a29ac596b31a06d00408eba35c4345","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4dfc2f1795a061b69c9393d30ec38f63","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"f69888233201a8cad2f1f7ddaabab01f","url":"./posts/19711/index.html"},{"revision":"cc64048f56287e6aabd109a333df1927","url":"./posts/21725/index.html"},{"revision":"4fa99ee39ee801174293dae7eb4965c6","url":"./posts/33107/index.html"},{"revision":"1814a00c4b7ed0230797eb316720e596","url":"./posts/33510/index.html"},{"revision":"fe01859102c833b382655da01c638ee8","url":"./posts/33511/index.html"},{"revision":"b2cdd7aebb5c93321ab506c902119148","url":"./posts/3603/index.html"},{"revision":"7a34461f6d988218422c52b790a89c62","url":"./posts/3a68f348/index.html"},{"revision":"333c5de854e07dc89cdc7f452e624e5b","url":"./posts/50888/index.html"},{"revision":"54655be0ca65a4d5720ec44ce5793e7d","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"e8ad067bad06923d7c3adead19749b6c","url":"./sitemap/sitemap.xml"},{"revision":"c870c68e3132ee3910b390215da2287c","url":"./tags/Arch-Linux/index.html"},{"revision":"827f9e4e8140fe06aa7e65f41160adae","url":"./tags/index.html"},{"revision":"55d97f1fe4b90bdb6454371b7674796b","url":"./tags/Javascript/index.html"},{"revision":"4ac7d161d89d81a8a349973612f9d1f2","url":"./tags/JavaScript/index.html"},{"revision":"5e25cef53efbe934e0c950fa78c101a6","url":"./tags/Linux/index.html"},{"revision":"eb071effba73cf21295867130f9d0cf2","url":"./tags/Windows/index.html"},{"revision":"214bdcf6159d3fe08f088e5f4f072216","url":"./tags/双系统/index.html"},{"revision":"4e39fb063d60ef9c2a7a09fda0912831","url":"./tags/数据结构/index.html"}], {
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
