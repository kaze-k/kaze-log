const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d58e84c9a25589828957722c32ed1572","url":"./404.html"},{"revision":"b7729a4ba817af4f08737781f9d2a402","url":"./archives/2023/03/index.html"},{"revision":"cdd0aa0686f60cd3eadd337c89a9e15d","url":"./archives/2023/04/index.html"},{"revision":"72a902d36e196f0365894c3a64a70fec","url":"./archives/2023/index.html"},{"revision":"7c507f420c4decb224162f2aecca5be4","url":"./archives/index.html"},{"revision":"d4221dc0a7aac478dd92e6df085a7e47","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"8b6ca7663a612887d1674d14944ab23d","url":"./categories/index.html"},{"revision":"2555ffa1ef2b4f14c1f1d3fbfe59d610","url":"./categories/学习笔记/index.html"},{"revision":"000a4bcf94f28caa0198f3b0cf629eba","url":"./categories/工具/index.html"},{"revision":"585e2bec5c8d575e68b2d712534f6437","url":"./categories/系统/index.html"},{"revision":"56d61a89498e6fae1efba74e3f2af731","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"9d53c2a8cb1d362147721502ab828803","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"1a11a2a55f6d940bfa640c2a01522b4b","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"07bbd52c561db4c1bff6bc7bfc6dbe93","url":"./posts/19711/index.html"},{"revision":"6d651b474768b97edd29ea02026ea821","url":"./posts/21725/index.html"},{"revision":"ab77411e51acc8318e9f389d3e8e71de","url":"./posts/33107/index.html"},{"revision":"c38dcf061a970a720b0b80c531b07dc4","url":"./posts/33510/index.html"},{"revision":"32bad30f979caa43f89c18bd75ece836","url":"./posts/33511/index.html"},{"revision":"5f47627c4e5fcc6ceccb8cdc04c8193c","url":"./posts/3603/index.html"},{"revision":"0d0011e9b3cdfa3c5641a874ddff774d","url":"./posts/50888/index.html"},{"revision":"ac4b27de11237fe13f3034deec759c0f","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"c1b4d9e05495ad4467314efd78fd6b8a","url":"./sitemap/sitemap.xml"},{"revision":"07e037d6b15783678a8786e27b96f32a","url":"./tags/Arch-Linux/index.html"},{"revision":"e1d58b8eecfc74aa569ba06e730b5a91","url":"./tags/index.html"},{"revision":"a17d1995a3bc290ab89c144131120ca5","url":"./tags/JavaScript/index.html"},{"revision":"60f42cc753e419cc5254f30a7478afe3","url":"./tags/Linux/index.html"},{"revision":"f56b5e7af2c64f4bc6d4969384282efe","url":"./tags/Windows/index.html"},{"revision":"347038fe4a933ffc32883443b193c070","url":"./tags/双系统/index.html"},{"revision":"2e54fde24be7d6c122fe8495eca518c2","url":"./tags/数据结构/index.html"}], {
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
