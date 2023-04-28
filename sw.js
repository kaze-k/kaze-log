const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"00cbe2c88500032736adee9425103751","url":"./404.html"},{"revision":"e923a6c38646d2703fa93ced7ea238d1","url":"./archives/2023/03/index.html"},{"revision":"7a69e701d844c91092babbbb15c4581b","url":"./archives/2023/04/index.html"},{"revision":"65208958a11a00e6632cfea31979ede6","url":"./archives/2023/index.html"},{"revision":"05768897cc8562e7c902bf37c67531a1","url":"./archives/index.html"},{"revision":"bc98d26c304308a0f6c2fd0329057ce9","url":"./bangumis/index.html"},{"revision":"8a379b48a42bff672bf0dc2e6e509133","url":"./bing.json"},{"revision":"05e2f46c75feb9017071a6a0f48477f9","url":"./categories/index.html"},{"revision":"c7a27b656ba98eed1172d8fd0c550db8","url":"./categories/前端/index.html"},{"revision":"d55c9b20ee99e97d13ca2aaf2a624511","url":"./categories/学习笔记/index.html"},{"revision":"198a39f383396b6ab8d83d7cc4709048","url":"./categories/工具/index.html"},{"revision":"b3abcee675fdaad2e18e7af64df7439a","url":"./categories/系统/index.html"},{"revision":"61c6da8eccb8777bf3128bf7509a1307","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d811b0f2183af3feba479c3200180058","url":"./feed/atom.xml"},{"revision":"1eb5acab2a9772a03ff8e19fe891fb2d","url":"./feed/rss2.xml"},{"revision":"63793d8e94fbced63b0c2d258b77ff00","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d5b7c3b2b165932c13547f89942b644d","url":"./posts/19711/index.html"},{"revision":"f3bfcf316812d31ec83e558a0efb8fa9","url":"./posts/21725/index.html"},{"revision":"9d70804adc249f42d697a0ec72977c75","url":"./posts/33107/index.html"},{"revision":"5662d53bb0af72ccfe6fe407c376bfeb","url":"./posts/33510/index.html"},{"revision":"5f40909af71e626c463f799aad47cb45","url":"./posts/33511/index.html"},{"revision":"c8f212cdd7f2a04734fb2ede9b271092","url":"./posts/3603/index.html"},{"revision":"d4b9df3edd83b500022fd05568ba15dd","url":"./posts/3a68f348/index.html"},{"revision":"63cb1dfa480e50e0d2cbbcb6770476ad","url":"./posts/50888/index.html"},{"revision":"f552cefb5aeeefa9da039b086d4e14fe","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"415f03143a9e13573d317bfe257b9ad2","url":"./search.xml"},{"revision":"73378c2996ea5cad46eaa5f450bed4e7","url":"./sitemap/sitemap.xml"},{"revision":"ab420c1ae00e08cf820da9246f29af64","url":"./tags/Arch-Linux/index.html"},{"revision":"7df52b97441fa3122a15a8d6daf73be8","url":"./tags/index.html"},{"revision":"767b53ed14a10f5f992efc111011f482","url":"./tags/Javascript/index.html"},{"revision":"a8c014910c559cca746b4aed9080050c","url":"./tags/JavaScript/index.html"},{"revision":"d81eea01574300b011f68408a176e2d0","url":"./tags/Linux/index.html"},{"revision":"c98647c26ea6321f3bc7e9a3e3e42dbe","url":"./tags/Windows/index.html"},{"revision":"6076056d8e945df52c6356a5a20799f1","url":"./tags/双系统/index.html"},{"revision":"1bb7fb31d9e3ba3a7f423f6974e7f301","url":"./tags/数据结构/index.html"}], {
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
