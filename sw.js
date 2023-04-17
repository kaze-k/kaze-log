const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3d5370b46dc7e76d471095cd589fcb17","url":"./404.html"},{"revision":"c58b3856ad94cd23bff7433d82cfa7fc","url":"./archives/2023/03/index.html"},{"revision":"b3812e4f1e6462a8e0e8c7adcb0bdfd0","url":"./archives/2023/04/index.html"},{"revision":"54df9fff4a97a767693c9b9ff22a2419","url":"./archives/2023/index.html"},{"revision":"a037b21addb814e4185c83b2d060f781","url":"./archives/index.html"},{"revision":"4af76591a741ae96877559d2b9c427ce","url":"./bangumis/index.html"},{"revision":"3040621da83d6f1ad7505497aef049de","url":"./bing.json"},{"revision":"2e393cdbfe238fdf156c235407b556e2","url":"./categories/index.html"},{"revision":"e0ab60b6561d9b3f84e4fe22d66ba79a","url":"./categories/学习笔记/index.html"},{"revision":"e901a4144d4cbea7b328e7809bd84e30","url":"./categories/工具/index.html"},{"revision":"5dca93a58d09ec856eadded44d90f787","url":"./categories/系统/index.html"},{"revision":"b55fa4af31317829343a5793caa89402","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"94f791823f055fa5be29ba51bf9337d0","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a4bd25830a8f460e0ea7e1f008816ed4","url":"./feed/atom.xml"},{"revision":"dab903e5fcc723a43015038e0aaee3dc","url":"./feed/rss2.xml"},{"revision":"b4482ab743c852cc3dc9b17b69221898","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"70632510c57e818473abf91502e7d725","url":"./posts/19711/index.html"},{"revision":"1e2ca25f8024ce981a7b58ff8549abde","url":"./posts/21725/index.html"},{"revision":"20d92521952b8f40659285ca1c35a6eb","url":"./posts/33107/index.html"},{"revision":"46009c71b8133c3bb6780356b3e76a1f","url":"./posts/33510/index.html"},{"revision":"120e9985682e6037b70271f41552be36","url":"./posts/33511/index.html"},{"revision":"9b88697f24c11f813ede9f3ce6eab754","url":"./posts/3603/index.html"},{"revision":"a8e17724f3f0a2def64e22f14bd184dc","url":"./posts/50888/index.html"},{"revision":"aff1029a103a96063a63e2ebfbbedf0b","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a8c9db9405c4291cd6679899bbf01f36","url":"./search.xml"},{"revision":"d79c874b84078f3c3859d8490d4d77c3","url":"./sitemap/sitemap.xml"},{"revision":"50002416838dbc804c156105bb536ecd","url":"./tags/Arch-Linux/index.html"},{"revision":"b86abfbb5ba8c61e1f632c58a865fdaa","url":"./tags/index.html"},{"revision":"2264c6ac3cd25cdeac5a8cd1304c6e4d","url":"./tags/JavaScript/index.html"},{"revision":"464b317f7f8450b7ef0a2ad67920fa56","url":"./tags/Linux/index.html"},{"revision":"082c9ed3d7e47613c19c19b11265f70b","url":"./tags/Windows/index.html"},{"revision":"34ffde327c7c56f68da525ace86b4cdb","url":"./tags/双系统/index.html"},{"revision":"894c4ba6b5e7f15bf609a485d9e4a303","url":"./tags/数据结构/index.html"}], {
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
