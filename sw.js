const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"349b90b797e11ee0a12ec62123929fb7","url":"./404.html"},{"revision":"f169948dca99f4072b1a06c523c76b3c","url":"./archives/2023/03/index.html"},{"revision":"9372b293f407051f10291d1a71cba804","url":"./archives/2023/04/index.html"},{"revision":"d256ea51c9eb20a0d023c0b441eabc15","url":"./archives/2023/index.html"},{"revision":"4cfbfe411b65bc279f3a6e1cb2ee06ff","url":"./archives/index.html"},{"revision":"85109693a3142c5b4897f35456aeace9","url":"./bangumis/index.html"},{"revision":"33801a47946b473bdff515747d21a447","url":"./bing.json"},{"revision":"064db2ecc519be09af83f5842052ca45","url":"./categories/index.html"},{"revision":"ebc5ba99e6326e1cbbf0dead4ea1bdb3","url":"./categories/学习笔记/index.html"},{"revision":"352d995d359a5aa271c0af4b36ba695d","url":"./categories/工具/index.html"},{"revision":"16c5df6490f98284b8e2f086b18ff855","url":"./categories/系统/index.html"},{"revision":"80616236dc3072e17d9d1f258f5bacf6","url":"./cinema/index.html"},{"revision":"bd75c8c74b4e168be25be8b9c0642eae","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a395083d5d27d1ee05ff2db7e0a4fe30","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"c89c5a4792d9df7217e3ab5a1a401795","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"35a8c645b58226982c778a384a0a5567","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"1f3cc2355e0b9b4ae6400abd51ae50c5","url":"./posts/19711/index.html"},{"revision":"31dbad325e4c33d8d65cb959033ce97b","url":"./posts/21725/index.html"},{"revision":"30225acca1bc97d865c0be231b11f4b1","url":"./posts/33107/index.html"},{"revision":"b077509cbc27f254197f5abbd5311378","url":"./posts/33510/index.html"},{"revision":"de0a16c1478fab259f7eeb5205e1dc2a","url":"./posts/33511/index.html"},{"revision":"aed0dcb678afdc32df28eb6c42f7dac2","url":"./posts/3603/index.html"},{"revision":"f0b19b972e42f2c77fbe1e2b38492082","url":"./posts/50888/index.html"},{"revision":"0e8008694d1f2f0281adfa05bcacb5d1","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"103121d854d461490ed2fd616ab7cfef","url":"./sitemap/sitemap.xml"},{"revision":"b8167b6e49e2cb1040bc0337664373b0","url":"./tags/Arch-Linux/index.html"},{"revision":"4a353305e8a5110284a936e971e136d1","url":"./tags/index.html"},{"revision":"0e9418ebac0cfc7c6a68249c409ff2fb","url":"./tags/JavaScript/index.html"},{"revision":"45718af30c0f2df33214763f795e530c","url":"./tags/Linux/index.html"},{"revision":"ce86ca30bb82000702f5b7c77ed3fc98","url":"./tags/Windows/index.html"},{"revision":"1c979c176751aee3bfaf0c912e140885","url":"./tags/双系统/index.html"},{"revision":"efc55221a0e2566ac427665cb2b6f59e","url":"./tags/数据结构/index.html"}], {
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
