const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a3ae181005e8703751b65fb1bee07190","url":"./404.html"},{"revision":"57776494bb614718d8f263fc92f32913","url":"./archives/2023/03/index.html"},{"revision":"71bf24c6907fd5712a4b74d5db4fa18e","url":"./archives/2023/04/index.html"},{"revision":"3b4aa83ec613d95030f378951762ca27","url":"./archives/2023/index.html"},{"revision":"125e030455d39531052d46562f442025","url":"./archives/index.html"},{"revision":"7f8f68744eb1d04034680eb7c0344d21","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"79b0c5f52f0d740a2cf84edb3f715cc3","url":"./categories/index.html"},{"revision":"3b51a0217de26c338e53e6777d27e7a0","url":"./categories/学习/index.html"},{"revision":"127d59962743b9e6423896abc8d9aaf0","url":"./categories/系统/index.html"},{"revision":"058ce610e3d14b61341eac1ad1e1bb43","url":"./categories/项目管理/index.html"},{"revision":"dddd77e6ca2e111809d03e83b46ebb21","url":"./cinema/index.html"},{"revision":"7a5e8a7d4ea9e3b2779408096273422d","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"27cf8391709a7784ee25934eff281ebe","url":"./feed/atom.xml"},{"revision":"34aeb8c17e5d8fd65700dae411c23cba","url":"./feed/rss2.xml"},{"revision":"1902b44ea8ddfa8dbb0c46b5df6ee492","url":"./index.html"},{"revision":"8ddacb2512580cb71ced972f6d6dbd5d","url":"./js/custom/animation.js"},{"revision":"e38dd44c21678ae2b61b1d29d7e65f4c","url":"./js/custom/title.js"},{"revision":"a16f1815d2c339c15db2a82f80f7c339","url":"./js/custom/weather.js"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/19711/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/21725/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/33107/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/33510/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/33511/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/3603/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/50888/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/61844/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"7f76b80d5173daa64c093738c2d36817","url":"./search.xml"},{"revision":"289309c65eaad54d69a16a3a1b0e1bfb","url":"./sitemap/sitemap.xml"},{"revision":"67afef2ba951b89cd2afb8bc88f268f6","url":"./tags/Arch-Linux/index.html"},{"revision":"eb32d24fba8a4834dbd6c5a4635df3c2","url":"./tags/index.html"},{"revision":"4fe1c35223feccadfa74fc8b3d52d093","url":"./tags/Javascript/index.html"},{"revision":"3c8b80e89d3698edcc9ad211da3b790a","url":"./tags/Linux/index.html"},{"revision":"36ea972b454dbdfce33d863d1b32bf9e","url":"./tags/Windows/index.html"},{"revision":"ec52c80e6858eaa56de5a55b73e546bf","url":"./tags/双系统/index.html"},{"revision":"2cd8998ca1f62b2d73e3484a7f30800d","url":"./tags/工具/index.html"},{"revision":"687a5f22cfd1041d5bf9d08370cc06e3","url":"./tags/数据结构/index.html"}], {
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
