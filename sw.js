const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"579e6eb0470428d9003fb8b0aff65a1d","url":"./404.html"},{"revision":"f5b0db01c3953028ca7d8022ac9c2c03","url":"./archives/2023/03/index.html"},{"revision":"7c9c478b73a1091b937b0166831769eb","url":"./archives/2023/04/index.html"},{"revision":"2878332e551a5baecd995e1dbc940bae","url":"./archives/2023/index.html"},{"revision":"f22235522270e80219725ba9cacf3da9","url":"./archives/index.html"},{"revision":"cf59d8eee4a12bc1d1700f5d233136f7","url":"./bangumis/index.html"},{"revision":"26fecdfa6b156f722b3c707a09179fce","url":"./bing.json"},{"revision":"c5afe31e78154f3d672c20f325b2332a","url":"./categories/index.html"},{"revision":"3b13714ac9c90362bc5caa0eea97f4dc","url":"./categories/学习笔记/index.html"},{"revision":"479cf52ffbcf75004e7a256b0c9b2507","url":"./categories/工具/index.html"},{"revision":"9c3b5e2da8978e62bd5d745ced45531c","url":"./categories/系统/index.html"},{"revision":"b92beded1c284f7fa1492c07ca63c7a5","url":"./cinema/index.html"},{"revision":"2395a8eb621466be469ef80e524bd37d","url":"./css/custom/weather.css"},{"revision":"9940702e9c7ad7f83424029bf37e6fef","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a395083d5d27d1ee05ff2db7e0a4fe30","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"0128b6e35747037efceb7d073a202ec1","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"8433faf1ade65e4dd7765032572404c3","url":"./js/custom/title.js"},{"revision":"99a1efb100d1b538835f750798ff0e5d","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"d35d4e4730536974fad1a06d55053e80","url":"./posts/19711/index.html"},{"revision":"be39fa310ed09e4ac61e7da2f121932d","url":"./posts/21725/index.html"},{"revision":"b5952f6a18bc1d0ec04c52aa679e76ec","url":"./posts/33107/index.html"},{"revision":"12f75e139c51f2454fdbdbd6ba1c6d8b","url":"./posts/33510/index.html"},{"revision":"58789efb8a254273922afca397a66190","url":"./posts/33511/index.html"},{"revision":"864dc924c08b978f3b4be6c7371b467b","url":"./posts/3603/index.html"},{"revision":"eedd4dc0fe9b046b67b8e3dfb09bc852","url":"./posts/50888/index.html"},{"revision":"397a90e461caf9b5bc736725b47b5eaf","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"1dc155ffc3f4f7d6b34abb505ae385f6","url":"./sitemap/sitemap.xml"},{"revision":"dd4c31fa056161dbb7bb085e4b6d0bb5","url":"./tags/Arch-Linux/index.html"},{"revision":"7663cc91f11e49672308b027efe27b78","url":"./tags/index.html"},{"revision":"83f78da0f1a7aa04306a7b09961e5987","url":"./tags/JavaScript/index.html"},{"revision":"7ead1c47dbe556cc07d35a3a2006642b","url":"./tags/Linux/index.html"},{"revision":"e95ee6e651d936b1eb326f5b6be9b33c","url":"./tags/Windows/index.html"},{"revision":"4fc512c9f061fb2d37bae230e3612231","url":"./tags/双系统/index.html"},{"revision":"62939dc59d27405d258c34e1f6eb856f","url":"./tags/数据结构/index.html"}], {
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
