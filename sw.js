const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"60de94ea06ad543a0eef059f6fd70896","url":"./404.html"},{"revision":"f78e032b12f237c3dccd4450347d6620","url":"./archives/2023/03/index.html"},{"revision":"32ca8efdc5089867bef1ecad969db7af","url":"./archives/2023/04/index.html"},{"revision":"80fd27859c4900bdde0f2130977947bc","url":"./archives/2023/index.html"},{"revision":"16f5d8f8df9b2fad5f01bfbeeb95fcad","url":"./archives/index.html"},{"revision":"a38cc201e38474235fe62cafe44da96f","url":"./bangumis/index.html"},{"revision":"1f498bddeab3e5b85ead1c619a9f741f","url":"./bing.json"},{"revision":"964903ee3493592ae6862e3a60ecf30a","url":"./categories/index.html"},{"revision":"59c3bf989b9af5c1e1aa4336b1510393","url":"./categories/学习笔记/index.html"},{"revision":"fa3e44fe6560d7ceace1db9b9754a186","url":"./categories/工具/index.html"},{"revision":"5ff5c9163d74f8d5e34673d3b6403fc4","url":"./categories/系统/index.html"},{"revision":"5c8786976eef07cfb76d3475686674f3","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"9d53c2a8cb1d362147721502ab828803","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"56058c00c7d0de60ca48bc92deca775f","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"4ef9c14a90dea814750da5e796cb8da1","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"0cffd28fa904ce60100154ba49056c0b","url":"./posts/19711/index.html"},{"revision":"b9c4e350e34832f4561bd8013a9549a2","url":"./posts/21725/index.html"},{"revision":"897e8ace1dfc6271510561b40bd6345b","url":"./posts/33107/index.html"},{"revision":"0d280d0a2bd33c61c9e721b1bf72d1ec","url":"./posts/33510/index.html"},{"revision":"a8a900304c629c59efcce3b095420a0a","url":"./posts/33511/index.html"},{"revision":"7a87996144556cc33586cd8943bdf3e9","url":"./posts/3603/index.html"},{"revision":"36a13578ad2d7aba7f149a3d3e10c0de","url":"./posts/50888/index.html"},{"revision":"921d0d214ac3b24d766ca0053824c7de","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"e77d7b017c7499d4c1cbf897436c25e1","url":"./sitemap/sitemap.xml"},{"revision":"4947b1027fa990394f5ce4cca6fbc533","url":"./tags/Arch-Linux/index.html"},{"revision":"3ab08c2c3b0004a15d900666d2588f18","url":"./tags/index.html"},{"revision":"c71cc427a553595ce2726b94683c34be","url":"./tags/JavaScript/index.html"},{"revision":"149efb6224f965eca10ef778a35d4b76","url":"./tags/Linux/index.html"},{"revision":"1214f28f389d3c304f73d697ab35ccc0","url":"./tags/Windows/index.html"},{"revision":"f757e78709d842222e47c24c3b189cd8","url":"./tags/双系统/index.html"},{"revision":"92a4c93d38611656bcc8e11cca120226","url":"./tags/数据结构/index.html"}], {
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
