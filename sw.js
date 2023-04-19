const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c5d2dddc2a8c82dc3741c79fe1a6c731","url":"./404.html"},{"revision":"333695e64fd5521af6791847d5b621d9","url":"./archives/2023/03/index.html"},{"revision":"defb48da0ce0626b3f630266cb73c997","url":"./archives/2023/04/index.html"},{"revision":"eb79ee4659c282c6bddbc89314c6bc58","url":"./archives/2023/index.html"},{"revision":"263303e6f98b1f8da75ca37e2d5a81e4","url":"./archives/index.html"},{"revision":"ddc7df3abce84187e65a26d6e3c96097","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"a7c0930ab294a5d9d8149386fb84569c","url":"./categories/index.html"},{"revision":"a13fcafc3e515280a779a76b7a1cd84a","url":"./categories/学习笔记/index.html"},{"revision":"3a4c76d678826f05688e7f65b2040c0c","url":"./categories/工具/index.html"},{"revision":"7d144f2ddad853ee631ea6269375ef8e","url":"./categories/系统/index.html"},{"revision":"34842fc31f2bebe63c3969cab3033463","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"d751737673eb47aa4b3e9274ed401164","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4b72e975f91aaf1ded625508f3cc2a97","url":"./feed/atom.xml"},{"revision":"4757f16eeabed20380413b5430a1c6a6","url":"./feed/rss2.xml"},{"revision":"8e1ddde88e977eaf26427735282a9fc8","url":"./index.html"},{"revision":"4441dae678653d9d702bd8cb88a99fc4","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"c985965ea04217e8c6a4ab20f796d1bd","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"391501a2a6b5fef3666decde8f5ee232","url":"./posts/19711/index.html"},{"revision":"c5fcb0081e1e9bac10219daaf3cfe79a","url":"./posts/21725/index.html"},{"revision":"7720d188310fcfc4a33466d94198c0ee","url":"./posts/33107/index.html"},{"revision":"20034faa7c4b7d0a1ed9683cbeb68171","url":"./posts/33510/index.html"},{"revision":"5e480edae7ce219eb398e239eb73904b","url":"./posts/33511/index.html"},{"revision":"4984e3ff15b9e57f6e3d5411b3e98b94","url":"./posts/3603/index.html"},{"revision":"1eff96d5dca16a891164c82fc7350d49","url":"./posts/50888/index.html"},{"revision":"474edccadaa1133c08d971a6d9f3652c","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"39015fb47bed9a572b2654a093b2f613","url":"./search.xml"},{"revision":"65e5d8bccef303fb159081d9263c5170","url":"./sitemap/sitemap.xml"},{"revision":"7ce269fdc035e5494bcc46818a8e5285","url":"./tags/Arch-Linux/index.html"},{"revision":"d104e56b4874352761a7e0297ec2c763","url":"./tags/index.html"},{"revision":"3bcb3c46c3d68f7a11987fefe0f06786","url":"./tags/JavaScript/index.html"},{"revision":"153ea5d56461e37b7ed3f01b97fd11c1","url":"./tags/Linux/index.html"},{"revision":"1460cfcb37a18c56f34fc836fcafbdd7","url":"./tags/Windows/index.html"},{"revision":"bf888773d4ae94e6352a82dd7e890f0f","url":"./tags/双系统/index.html"},{"revision":"d1bbb1ba3f985b474ee88978a14d1242","url":"./tags/数据结构/index.html"}], {
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
