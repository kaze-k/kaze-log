const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b728b379e3618ecb1e36d24d9fbbee93","url":"./404.html"},{"revision":"681b202bc51a1fd7db384c609d437f12","url":"./archives/2023/03/index.html"},{"revision":"34c79391d8b4306a5156ebcad9178040","url":"./archives/2023/04/index.html"},{"revision":"ff1d49410b5fe100552eca5abeca508f","url":"./archives/2023/index.html"},{"revision":"aa6b56f95b7c960aa72ed4fc5223d1a0","url":"./archives/index.html"},{"revision":"1c261316d25cd62f17023920bbad7b5c","url":"./bangumis/index.html"},{"revision":"0327f4e36ae6bc0e83e815c72b6d9c5d","url":"./bing.json"},{"revision":"07bd1bca1b964561bdc5f1550d17d351","url":"./categories/index.html"},{"revision":"d81506d44431c03130dfa7d9e73fff4e","url":"./categories/前端/index.html"},{"revision":"27784a0bac620462e24cd6893abae016","url":"./categories/学习笔记/index.html"},{"revision":"724a6f8f86100927b2cf51c5c7b7fa42","url":"./categories/工具/index.html"},{"revision":"6792cc29d62df6cd1ddf11e425f73e97","url":"./categories/系统/index.html"},{"revision":"b1ef2d5cb45e51404c24150c3f60c2e8","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"2920e0dac0e79035a0e2d02dcae4d265","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8f969e643088ca64f4318cd7f1870879","url":"./feed/atom.xml"},{"revision":"7844c291b100e90c06480d5bdde88ec7","url":"./feed/rss2.xml"},{"revision":"b39328f83a9bfcd65e1fe5737d31fbc4","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"718541e8bf4619dd926a003b90ec0080","url":"./posts/19711/index.html"},{"revision":"313126e8205472d27782f20ea170da98","url":"./posts/21725/index.html"},{"revision":"1c3537a32235fbaa91c21c60ee1581e6","url":"./posts/33107/index.html"},{"revision":"288a3b2be7106ebcf28d6b822afd5f8d","url":"./posts/33510/index.html"},{"revision":"915d8ff32e6d5dc06bd24f687fb8bccb","url":"./posts/33511/index.html"},{"revision":"0b431374148c9bfb0116c17840dd143d","url":"./posts/3603/index.html"},{"revision":"35dc57930a1562353c4c3e50fb98bbdf","url":"./posts/3a68f348/index.html"},{"revision":"b2b1d3d16611f49fc740b2574a7804e0","url":"./posts/50888/index.html"},{"revision":"11258b2d2081f4c37ca5b97089c3aab1","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"94dcabfc73f3a7221c62290c86333a3e","url":"./search.xml"},{"revision":"c7ebe77f931903b551eda6f8d1835ab2","url":"./sitemap/sitemap.xml"},{"revision":"b01233b0c3377a2f347447aa57b0e6be","url":"./tags/Arch-Linux/index.html"},{"revision":"c63ac795efb35cf6b131a308b6f626ac","url":"./tags/index.html"},{"revision":"d8717aa1508d5d379f77f16685b87989","url":"./tags/Javascript/index.html"},{"revision":"d71950d3e10430624e4f822d626ef612","url":"./tags/JavaScript/index.html"},{"revision":"1ead1ae7dc2cef13069999a3d8f3a562","url":"./tags/Linux/index.html"},{"revision":"9a4848c6ed11cf32015c09a4d1723642","url":"./tags/Windows/index.html"},{"revision":"a3f983b0ea79b31e561ae1ba2ebd574a","url":"./tags/双系统/index.html"},{"revision":"9e455f5689d11c14498f45faf0a0187c","url":"./tags/数据结构/index.html"}], {
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
