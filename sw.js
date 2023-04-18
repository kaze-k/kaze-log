const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"eeadd5d46b9b4c0f62551334f17ddc27","url":"./404.html"},{"revision":"9a1eb6141b3f0814963b974f5836f3f8","url":"./archives/2023/03/index.html"},{"revision":"a279f0860c013ed0a743253e3e0cfcea","url":"./archives/2023/04/index.html"},{"revision":"9fece28234a8baa763de0be4511bc79f","url":"./archives/2023/index.html"},{"revision":"756b2b1365324960eb102f2980be7ce7","url":"./archives/index.html"},{"revision":"35acef7184553797608e6648c98bd14e","url":"./bangumis/index.html"},{"revision":"33b4de58988d5a3a7b9886faa3689651","url":"./bing.json"},{"revision":"9343ffa12555bfe88b4ddb5770e9fd0d","url":"./categories/index.html"},{"revision":"150bfe1782add41a3e9a2e3a7d493b0b","url":"./categories/学习笔记/index.html"},{"revision":"cdba173ab59669761c92972223de54b5","url":"./categories/工具/index.html"},{"revision":"a903b29ddacfa1d39296faeb47eb2c12","url":"./categories/系统/index.html"},{"revision":"ac77c344706140c6db639146c725f59e","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"8c0298c4ce07269227d3e65fbcbd1543","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cd5d065e8bd75404009fb62ac182e6a8","url":"./feed/atom.xml"},{"revision":"4d6d81f11ef80d800f98a6db2df45ea3","url":"./feed/rss2.xml"},{"revision":"de15c3abf283e16c9a33f14e78500ef7","url":"./index.html"},{"revision":"d3f816fce0f432c6cb920df8b63d5a97","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d2781551f3232480d9a503935b8af8eb","url":"./posts/19711/index.html"},{"revision":"2e2702b699d1e6d87b22fe010788963f","url":"./posts/21725/index.html"},{"revision":"16257266ec554400fc4ca81866895bb8","url":"./posts/33107/index.html"},{"revision":"f6cc361813b814ae492bf2a95e681515","url":"./posts/33510/index.html"},{"revision":"ee0413bc3e5ba11d4bf09e5e54ddd4a9","url":"./posts/33511/index.html"},{"revision":"a8250d34afcf37e61026707c1a79f995","url":"./posts/3603/index.html"},{"revision":"fc6805dee314430226ebf98a2590795b","url":"./posts/50888/index.html"},{"revision":"2f3e95aaa6db05d886feba7c2fc4354f","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"cfd89fd19957432e06f4b413cb11da86","url":"./search.xml"},{"revision":"d454e0aacf6de3df495ea1f0cf292e07","url":"./sitemap/sitemap.xml"},{"revision":"07b142cfde41846e65fecf04b8641400","url":"./tags/Arch-Linux/index.html"},{"revision":"cc7523b3dd71c4d86cb88a4dfdc5afc0","url":"./tags/index.html"},{"revision":"c72ab540a919b11342c9f577dbe8f959","url":"./tags/JavaScript/index.html"},{"revision":"80a36acb4e0a2b982c4eb415e7e5db27","url":"./tags/Linux/index.html"},{"revision":"c16562d60afc2e7989bdb792e7903a16","url":"./tags/Windows/index.html"},{"revision":"929fcc4d10fd28e4bda67a69c85fb998","url":"./tags/双系统/index.html"},{"revision":"96151561b24aaa9ea0e3bdb2db6ca637","url":"./tags/数据结构/index.html"}], {
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
