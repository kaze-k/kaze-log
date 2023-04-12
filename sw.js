const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ccc24792197aceb5afb203b4d3615e7d","url":"./404.html"},{"revision":"773f97cfce95d9a058f99f65d809be5f","url":"./archives/2023/03/index.html"},{"revision":"778f3ae55ed6775361f2b2d29a3eed12","url":"./archives/2023/04/index.html"},{"revision":"b0fbbf3a54ba0fc0dfba657267238223","url":"./archives/2023/index.html"},{"revision":"1af3bacb1a2ef4f1d9c562a6e961a9cf","url":"./archives/index.html"},{"revision":"3fed5464348210d48ec009b399b23f08","url":"./bangumis/index.html"},{"revision":"930e81bec0d619a7cbce3cb1d66a999b","url":"./bing.json"},{"revision":"80b00d43bf67a5a519e9f4508fec6870","url":"./categories/index.html"},{"revision":"eb13268370790d44083add21eb8aa554","url":"./categories/学习笔记/index.html"},{"revision":"7e2a64bb1159e57e44a0b790ce13193c","url":"./categories/工具/index.html"},{"revision":"2592d8bb2878ea643a4020a0b5f7a5c8","url":"./categories/系统/index.html"},{"revision":"f23356718d2ad1aed8b799547f296619","url":"./cinema/index.html"},{"revision":"093bcacf9bff9df0e68675190d533f35","url":"./css/custom/weather.css"},{"revision":"dd4e9aadb14d8d27906272901d80066c","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"939d30900707f0af87191d2857b514c6","url":"./index.html"},{"revision":"d4469df24b3d5b83c76cdb42708e3056","url":"./js/custom/animation.js"},{"revision":"aa30e6a684724465371f6824bcee49f4","url":"./js/custom/screenfull.js"},{"revision":"789b46c7799ccf6809bd97410e4a0520","url":"./js/custom/title.js"},{"revision":"b8c52649109370cf3755ec6a46b0a037","url":"./js/custom/utils.js"},{"revision":"f02847d15fb4929333480cc0886b17e8","url":"./js/custom/weather.js"},{"revision":"2d5d5f5443e89c2509ba68cba493e02b","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"ea1b9cc90541f845f1287747081684da","url":"./posts/19711/index.html"},{"revision":"392e3ada49f48f7717856dafe1cac700","url":"./posts/21725/index.html"},{"revision":"d41e8391f5022fbf942c880220a0909b","url":"./posts/33107/index.html"},{"revision":"eae3a642c88b7cf2f93a4d4dbf3bdd58","url":"./posts/33510/index.html"},{"revision":"ffa11d8a7a52a43bceeb377d5a4cbc56","url":"./posts/33511/index.html"},{"revision":"c8e236f097362468f72c2f26cf38d0e9","url":"./posts/3603/index.html"},{"revision":"f079b81e22d55f40fc35f006e67df9d5","url":"./posts/50888/index.html"},{"revision":"814967626ec67c09d08670bbc4232f53","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"45e411578e38c97b0260e7094d09dc83","url":"./sitemap/sitemap.xml"},{"revision":"22d887cb93d1058bd329969921a797ef","url":"./tags/Arch-Linux/index.html"},{"revision":"c12df73d8a4a86feaec17745cc39a40c","url":"./tags/index.html"},{"revision":"c08076f8a5c66546d1023f8297edb07a","url":"./tags/JavaScript/index.html"},{"revision":"272eb3a78c0aef408e4c9936e1c9d161","url":"./tags/Linux/index.html"},{"revision":"7c5e7578a90a8a9d396f961542aa020b","url":"./tags/Windows/index.html"},{"revision":"81cb48388b28b29e0171f2f79de4575c","url":"./tags/双系统/index.html"},{"revision":"2286d6e324b5014e6ff96dbd86dbd615","url":"./tags/数据结构/index.html"}], {
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
