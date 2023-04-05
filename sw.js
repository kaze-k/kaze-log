const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ef2f780289958266ad5e9f05aef4de20","url":"./404.html"},{"revision":"dd42da2c3e1f91e49cc14e37281c53dc","url":"./archives/2023/03/index.html"},{"revision":"e7510f06b1f4e65959289f4e3d4871cf","url":"./archives/2023/04/index.html"},{"revision":"21b62c14eb6683807190a406f4aed8fa","url":"./archives/2023/index.html"},{"revision":"7176a427945b1524b48b09ab52b2a3d1","url":"./archives/index.html"},{"revision":"50dc253b57332ec6980f04c9215ec8c5","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"d56bba79b06760427df0668bc68dccfc","url":"./categories/index.html"},{"revision":"e96a5cbe6d53b27714d28886068d084a","url":"./categories/学习/index.html"},{"revision":"87267ab09d65fe27f2df41bb408c3041","url":"./categories/系统/index.html"},{"revision":"69e8bc9a9d3c28e888923e2a7bf164f6","url":"./categories/项目管理/index.html"},{"revision":"adc84fadaa440054685f4e1fb1106e21","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d07ca8ca7576756069ebc27e9c74e22c","url":"./feed/atom.xml"},{"revision":"7461b13cb8d8cc25018af458119768fd","url":"./feed/rss2.xml"},{"revision":"97702d511dc2776511e033d32a8b4e53","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"efbff99e89c7290ca5191e3e61dcf17d","url":"./posts/19711/index.html"},{"revision":"3c73bc79c3f2a4c78768b3032c88f661","url":"./posts/21725/index.html"},{"revision":"6b4981d1e5ca32a50c5a2f03f01d4c3c","url":"./posts/33107/index.html"},{"revision":"a22f03f15c60e8d6d409865d8f53edee","url":"./posts/33510/index.html"},{"revision":"d4e811e0cf78e604be7492362fdd67d9","url":"./posts/33511/index.html"},{"revision":"5a93f2c29b8bafa256ca5f640941c723","url":"./posts/3603/index.html"},{"revision":"df6e754aa815a1c0fe9363a409b32882","url":"./posts/50888/index.html"},{"revision":"b9ab11e1d6255a4d6ba702006c7fe4aa","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"59876c2b96c05a237e558df77cb25dd1","url":"./search.xml"},{"revision":"63e948675b5bc69eafbf64499d8d5f00","url":"./sitemap/sitemap.xml"},{"revision":"cd5cc6673a5d166556fb770c623e7e57","url":"./tags/Arch-Linux/index.html"},{"revision":"630fadcaf4d6c36abafbade217f10b81","url":"./tags/index.html"},{"revision":"ab676f7ca872e0fbb438cbe52c053002","url":"./tags/Javascript/index.html"},{"revision":"b16587adbc98e38bbac338b822ece1dc","url":"./tags/Linux/index.html"},{"revision":"7a5d382d80461ee5fcb84852b5b03ccd","url":"./tags/Windows/index.html"},{"revision":"93273e7745a63cca4accddf0b981059f","url":"./tags/双系统/index.html"},{"revision":"926a16359f82349a74ffa2d631b3f4c3","url":"./tags/工具/index.html"},{"revision":"67b670700f1ba1288317993b8f760def","url":"./tags/数据结构/index.html"}], {
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
