const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"89c36385086b31a17138f12f671f01e8","url":"./404.html"},{"revision":"6af47823673f48b2b8cb2b1107b5f982","url":"./archives/2023/03/index.html"},{"revision":"4f3c8133c789df48344e12c76b14527e","url":"./archives/2023/04/index.html"},{"revision":"6f4dc7387a3e2111287ec22928cf018c","url":"./archives/2023/index.html"},{"revision":"1efc58448ced18b2b9288df28000db10","url":"./archives/index.html"},{"revision":"3b1fb8327c8dbe2d9310bffba907278a","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"794855b111bf26278dc38e5230ce6fb5","url":"./categories/index.html"},{"revision":"69b168fc6e1b543abb8a210cbc1dfab9","url":"./categories/学习/index.html"},{"revision":"a9e20e3c925eff17888282ba94865d21","url":"./categories/系统/index.html"},{"revision":"c6fcbae24b61bd8c277d99505b118d9b","url":"./categories/项目管理/index.html"},{"revision":"95a7bf0a2e7dc8f051e6fe769093b7be","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9225f6fd0e8f793bab5d7942ce77274e","url":"./feed/atom.xml"},{"revision":"ff5bdac96f827196be11565ec3ec573b","url":"./feed/rss2.xml"},{"revision":"b9210d1cbab883f60c1723df44c38451","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"a82627eaba5c3e763d8939733489ea07","url":"./posts/19711/index.html"},{"revision":"2b3b389ea9c8678587eee9086ac8537d","url":"./posts/21725/index.html"},{"revision":"276aa9e209d7b93ebfd530529e90d5e1","url":"./posts/33107/index.html"},{"revision":"bd1471c8fc81e7c00adf9ef529cb0018","url":"./posts/33510/index.html"},{"revision":"cea1d0b338879192a6db2a60e57725ac","url":"./posts/33511/index.html"},{"revision":"7f23377cce6d95c4a14ea0d9d81e5df8","url":"./posts/3603/index.html"},{"revision":"84053274947a77a380282f439950f9d1","url":"./posts/50888/index.html"},{"revision":"8cb88ae4f4298ccebc56ce9ac4d75555","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"2eb0b76e989c4fbf4c0ad42dfd61ca2d","url":"./search.xml"},{"revision":"63e948675b5bc69eafbf64499d8d5f00","url":"./sitemap/sitemap.xml"},{"revision":"89057875565faa783a1624a6a0871033","url":"./tags/Arch-Linux/index.html"},{"revision":"e9bade137a9af5d8c61d71afd378f62d","url":"./tags/index.html"},{"revision":"df0f256c3828a8fbabce9efcfece2778","url":"./tags/Javascript/index.html"},{"revision":"1ba1e69019609eb17683742c599923f1","url":"./tags/Linux/index.html"},{"revision":"20046b8780b47f8fbb73faf50d541b18","url":"./tags/Windows/index.html"},{"revision":"9ce2a02d43b6dc194c432a532d15d99f","url":"./tags/双系统/index.html"},{"revision":"6278583fc9a67eb6aa0d760b03743593","url":"./tags/工具/index.html"},{"revision":"41a2a1f3b52e3a27dbcc697a8c8a517a","url":"./tags/数据结构/index.html"}], {
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
