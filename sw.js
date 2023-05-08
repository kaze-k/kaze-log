const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"817edcea7c68c0ab1fe50fdb0414b5db","url":"./404.html"},{"revision":"37ef71aebbbff43db6b8e36fdf71f0f9","url":"./archives/2023/03/index.html"},{"revision":"044ce702b0164d16ce7b83135af12761","url":"./archives/2023/04/index.html"},{"revision":"8d3101955932ddc3df743f45faa31384","url":"./archives/2023/index.html"},{"revision":"46fdf6e57d6bdf939e593c3ab43fc967","url":"./archives/index.html"},{"revision":"4eef15e3f8d575622ddde003d2732596","url":"./bangumis/index.html"},{"revision":"5d3c5bf26d3b4d684432c18c57b66459","url":"./bing.json"},{"revision":"9311f1ba3e3ec10bc625b86fcb3680a0","url":"./categories/index.html"},{"revision":"bb5416faa77229b6f198109e216cf40d","url":"./categories/前端/index.html"},{"revision":"57cd90865ab624cc22725034d66455be","url":"./categories/学习笔记/index.html"},{"revision":"1478ea2469b79d9ef6d73daf7827ef3d","url":"./categories/工具/index.html"},{"revision":"c1e4aa4020c110fc791205549902cbbf","url":"./categories/系统/index.html"},{"revision":"25f8c4b70f8038a4d7b3f91cc673fb5d","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"751e98efb130c3d19095ffb26da66118","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"72ed2073e2cf9f5cc364871b668a5412","url":"./feed/atom.xml"},{"revision":"226ca219f6c37c859f2f7a2bda4bcbb9","url":"./feed/rss2.xml"},{"revision":"4338c419ce7e1fd6b11dc02ba3e8a300","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"b05042208516e5260a34eb979520ec86","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"e07a816422747845f070b7116843b187","url":"./posts/19711/index.html"},{"revision":"d35446e3067fbedb1af3c9681bc24c98","url":"./posts/21725/index.html"},{"revision":"72411cbee905f3c11dd676c56a3c52f1","url":"./posts/33107/index.html"},{"revision":"ccb450c1d7ba939890c181a54b494f1d","url":"./posts/33510/index.html"},{"revision":"96b463f0b54176d5f698cb684b9b9f6e","url":"./posts/33511/index.html"},{"revision":"ba9b0c554533e7e5ca673a0585343652","url":"./posts/3603/index.html"},{"revision":"3748d030d71c3e745a98f507ffd39102","url":"./posts/3a68f348/index.html"},{"revision":"d41b7ca80a5889ca2dc0cb20a4adec41","url":"./posts/50888/index.html"},{"revision":"9b4ed0695d737098ceac08556a3c478c","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"0ffe8d8f4be1c4d3dcefffcd355e0ac5","url":"./search.xml"},{"revision":"e90d391b01ff0ee04d23ce6688e372c5","url":"./sitemap/sitemap.xml"},{"revision":"073b13e8478898556aeaba80e4468dc2","url":"./tags/Arch-Linux/index.html"},{"revision":"251e53650063667aca8b69e07acf754a","url":"./tags/index.html"},{"revision":"11bc42370aa5d1e756b8b1ce22844fe9","url":"./tags/Javascript/index.html"},{"revision":"f07b5292a760569934d026d585e21981","url":"./tags/JavaScript/index.html"},{"revision":"ee6d7d75c420422671cd1bef9952879b","url":"./tags/Linux/index.html"},{"revision":"4440c626e80289763034f535f35929e0","url":"./tags/Windows/index.html"},{"revision":"8a04905c4a0b10bf2e219c118839c400","url":"./tags/双系统/index.html"},{"revision":"16e3e28dfdfa1617a27a41ff3cf032e8","url":"./tags/数据结构/index.html"}], {
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
