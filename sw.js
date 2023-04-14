const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ef37c3a85c0d492976507147e3183bd3","url":"./404.html"},{"revision":"56e8ed992ebba9349456a8cb654beb40","url":"./archives/2023/03/index.html"},{"revision":"2f1de3e32e80c6543b0decb5a73bfe9d","url":"./archives/2023/04/index.html"},{"revision":"9ef0c700e4b4077bd715241cf94e7fb6","url":"./archives/2023/index.html"},{"revision":"f37db40d444c13b09c6cfc9534bed2e3","url":"./archives/index.html"},{"revision":"48ecb3848e3178cad49eadcfe1c920f8","url":"./bangumis/index.html"},{"revision":"e6afb1cb2f785c0deed26f6b4ddfe0d5","url":"./bing.json"},{"revision":"0273aab67da738db2aeeabfb100164b8","url":"./categories/index.html"},{"revision":"454a4d8064c6868a246e203cd8de488b","url":"./categories/学习笔记/index.html"},{"revision":"7b9497a23de4ad50fae15740f9d19467","url":"./categories/工具/index.html"},{"revision":"a6c9cc3312e9944a43d2c83f589495f9","url":"./categories/系统/index.html"},{"revision":"7094795d1da682c9f9db3c7a815114bf","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"2ae4dbae10054e803095d97208cc7ed9","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"99f4ad0776e203822ff78383cf5aa0dc","url":"./feed/atom.xml"},{"revision":"36ac0d1ec06a4d02daa3b1101287cf11","url":"./feed/rss2.xml"},{"revision":"af07c4ceacfd24dbca7819fbd71ca9c6","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"883378f6d5bbb2a442b400c659652d5a","url":"./posts/19711/index.html"},{"revision":"4725b3c48c295be9e97c8b3388476ffb","url":"./posts/21725/index.html"},{"revision":"43f6cf3abfb439b3991acac1748974b6","url":"./posts/33107/index.html"},{"revision":"98abbbecb8d89e46a61ad7495e3610fe","url":"./posts/33510/index.html"},{"revision":"6f5d500726b3be147c666e62c195c7d1","url":"./posts/33511/index.html"},{"revision":"c5a864d23ab264db06414b2cfecaedb8","url":"./posts/3603/index.html"},{"revision":"a40c36dc7d2425c48e6eea77c09e53e2","url":"./posts/50888/index.html"},{"revision":"ff1d08303a148291ad1ec270661bf62a","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"018b6452cb0527f3067028d0f3457fb5","url":"./search.xml"},{"revision":"b677bf8a112ada0c10be0b06aa5b4223","url":"./sitemap/sitemap.xml"},{"revision":"24c04fb65bf955a7b3fa67802008b4d1","url":"./tags/Arch-Linux/index.html"},{"revision":"d5fa390c0b5ce8bd1e168a7ce14fe5bf","url":"./tags/index.html"},{"revision":"4620cb1507ca8879983a0590225679ac","url":"./tags/JavaScript/index.html"},{"revision":"4ccdb00459e6bb043f2c7c3d28761641","url":"./tags/Linux/index.html"},{"revision":"62b18d88659a4050c56f2ac0762f7890","url":"./tags/Windows/index.html"},{"revision":"e2e6b90a44eb3183c9a19273d1cf0daf","url":"./tags/双系统/index.html"},{"revision":"8372d7ab0f23c6124282338c7e4d1c94","url":"./tags/数据结构/index.html"}], {
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
