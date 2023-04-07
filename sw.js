const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0e9af8ec1b155d3034967b3e5f720841","url":"./404.html"},{"revision":"8630111720cb5ae468ae7f27cdf43a58","url":"./archives/2023/03/index.html"},{"revision":"4f737daa18f59572d19dad9be3bf47e1","url":"./archives/2023/04/index.html"},{"revision":"ea0a9a8dae1f80d6228d8cab6a0f04d3","url":"./archives/2023/index.html"},{"revision":"dab8db88b54dd68cdf1f1811f0416400","url":"./archives/index.html"},{"revision":"16432d0b28024e086222d206b247162e","url":"./bangumis/index.html"},{"revision":"26fecdfa6b156f722b3c707a09179fce","url":"./bing.json"},{"revision":"d5bfb1d5001996487df5cb8068656bb8","url":"./categories/index.html"},{"revision":"f2891c307ba79538438e6cbfb22cc5a2","url":"./categories/学习笔记/index.html"},{"revision":"274b95d30ac9a5a01d5c7b94399d80cd","url":"./categories/工具/index.html"},{"revision":"dcee3044e9823043fab0b936f5fbafb3","url":"./categories/系统/index.html"},{"revision":"abe3055073927ac1aba8e2b67bb5d141","url":"./cinema/index.html"},{"revision":"688bd07b93f31fc690d4eecbdeb85b23","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a395083d5d27d1ee05ff2db7e0a4fe30","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"7bfedddd2541b28cb02f1d4815f81d37","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"8433faf1ade65e4dd7765032572404c3","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"db21c4d00ff0947049fea95e2af4e188","url":"./posts/19711/index.html"},{"revision":"33a13f95d06667eab459527f8b8ff56e","url":"./posts/21725/index.html"},{"revision":"172b3f44a21e05c01fc7f2574a21015e","url":"./posts/33107/index.html"},{"revision":"2baa1085c5d11ff2ffb5c6631d5fda9d","url":"./posts/33510/index.html"},{"revision":"c644039ca13fc981c415cfc093961a17","url":"./posts/33511/index.html"},{"revision":"347c88f3b9269a41da87ad3fd9079fca","url":"./posts/3603/index.html"},{"revision":"8e03b72eeade855063c9564c9196dd65","url":"./posts/50888/index.html"},{"revision":"a2e8ea459a44bb01b5310b6fa3c22c83","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"fec8ee441e7a8f03ac5e18592026a218","url":"./search.xml"},{"revision":"3af78b36795c72774b2fd91b340487ea","url":"./sitemap/sitemap.xml"},{"revision":"310fac764ed2a20c54606bb8bc0da0fa","url":"./tags/Arch-Linux/index.html"},{"revision":"defbf276aa478bce6efbb740635c83da","url":"./tags/index.html"},{"revision":"54584eb8fbe5f3648edc49e2f5021c78","url":"./tags/JavaScript/index.html"},{"revision":"864f04d314b0124478fd4064b7449045","url":"./tags/Linux/index.html"},{"revision":"83feb110f49af0f5fabac6ce858e4d0c","url":"./tags/Windows/index.html"},{"revision":"3051649e60a32d4fb3d8ee6e7dae3166","url":"./tags/双系统/index.html"},{"revision":"b5231004612db3c6769666d3ddefdf49","url":"./tags/数据结构/index.html"}], {
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
