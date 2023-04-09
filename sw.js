const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1a80dc75cc421cafd99191c248610e96","url":"./404.html"},{"revision":"f1253599027a7e22cbb1bd4efa15520e","url":"./archives/2023/03/index.html"},{"revision":"e7027a66370eba33257a1c6111413fa5","url":"./archives/2023/04/index.html"},{"revision":"19f0b4342a4ca733777117de76c5f282","url":"./archives/2023/index.html"},{"revision":"b45970392fcc796d766d520387ab733c","url":"./archives/index.html"},{"revision":"c8a747ef4ffe6f4e6d94a1542e40bdcf","url":"./bangumis/index.html"},{"revision":"26fecdfa6b156f722b3c707a09179fce","url":"./bing.json"},{"revision":"6ac89313ba915e89d0e378f58ec7a56f","url":"./categories/index.html"},{"revision":"5f617aa3f34bbbd8a6130eb354738df3","url":"./categories/学习笔记/index.html"},{"revision":"271cfc702e52340fc592221ed1477270","url":"./categories/工具/index.html"},{"revision":"820ea56ac6350767c403b66698e87fb6","url":"./categories/系统/index.html"},{"revision":"29b39103bcab7e04b3d259e6cd3275ce","url":"./cinema/index.html"},{"revision":"2395a8eb621466be469ef80e524bd37d","url":"./css/custom/weather.css"},{"revision":"9940702e9c7ad7f83424029bf37e6fef","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a395083d5d27d1ee05ff2db7e0a4fe30","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"dc37c0df2bc23a9a58a70ebbc7f1289c","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"8433faf1ade65e4dd7765032572404c3","url":"./js/custom/title.js"},{"revision":"99a1efb100d1b538835f750798ff0e5d","url":"./js/custom/weather.js"},{"revision":"5cddf61ca85268e220a8c417b685175d","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"fb5229f1571cc30e495865429154f74b","url":"./posts/19711/index.html"},{"revision":"528dcbf49cf7ce30d16f6e196bdff778","url":"./posts/21725/index.html"},{"revision":"a6be028f96710eaee72cec44abd0ec80","url":"./posts/33107/index.html"},{"revision":"15d15bde6e3fc9ecef41d96eae4e418c","url":"./posts/33510/index.html"},{"revision":"eafdc5331a3837930dc159729b80fb63","url":"./posts/33511/index.html"},{"revision":"e34c5153aec42cc0ca81ee7287f7eff4","url":"./posts/3603/index.html"},{"revision":"b7662fd549a88efc8a9a378d74c75606","url":"./posts/50888/index.html"},{"revision":"b898a5c6b22460949f179e22511858fe","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"22d64c4a7fd183dae7255ce44792b310","url":"./sitemap/sitemap.xml"},{"revision":"8016020ff4a9b92c018027a440bb7c49","url":"./tags/Arch-Linux/index.html"},{"revision":"45a82decc9d8f9356be449cf95841a6b","url":"./tags/index.html"},{"revision":"26347a0ca48ad87271789913b52aeaf2","url":"./tags/JavaScript/index.html"},{"revision":"d8293fcffbc0e6e0714f689ea657c6d9","url":"./tags/Linux/index.html"},{"revision":"0236df1568da3c4fc9d39a8634dbc2ef","url":"./tags/Windows/index.html"},{"revision":"6130fccf9e7cd6d54debaf0885531f56","url":"./tags/双系统/index.html"},{"revision":"0b145a3fef295629eedb558b94db2f5e","url":"./tags/数据结构/index.html"}], {
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
