const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"687807bfae0e2af5b1a29c47ca50d459","url":"./404.html"},{"revision":"ff5a439724f08dfa12ffff8d2dcd72fa","url":"./archives/2023/03/index.html"},{"revision":"51c52ce0784b4f8d7ed1883f48e6e7f2","url":"./archives/2023/04/index.html"},{"revision":"b2a6123f6cdb159a7ade6b870827a429","url":"./archives/2023/index.html"},{"revision":"4ad63581dd69a82138abeb10b62374c1","url":"./archives/index.html"},{"revision":"3a9002e4de6586511f6d27a9dbdf1d69","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"223460e5ede8f496fcca001d50fcbaf1","url":"./categories/index.html"},{"revision":"806cb0ebdd039333bae9362ec5936ef7","url":"./categories/学习笔记/index.html"},{"revision":"ad894b8566921239b7601d78829d3672","url":"./categories/工具/index.html"},{"revision":"baebb8bfceb8bfb8e97b1b7755dbd460","url":"./categories/系统/index.html"},{"revision":"91eaff57edf0c98f43bd4ba27eabf1d0","url":"./cinema/index.html"},{"revision":"53164529b4dd7325ba99d2e159aa14c3","url":"./css/custom/weather.css"},{"revision":"4bd6db0ecf7ec912d636fc9290934173","url":"./css/index.css"},{"revision":"8a652b359801db6ae6544e52ac23b4ab","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fe1872eaa80945d01096566b41ee3390","url":"./feed/atom.xml"},{"revision":"877e2cd5d4605f99b2b25bac166f012d","url":"./feed/rss2.xml"},{"revision":"6070217835666519c0d6f9f9f8bb05db","url":"./index.html"},{"revision":"1b8532b09255e11105417087abe1c333","url":"./js/custom/animation.js"},{"revision":"779fe091f456b25679960d384f7fb6c1","url":"./js/custom/title.js"},{"revision":"5ac1ac05903c748253d805c3943e7681","url":"./js/custom/weather.js"},{"revision":"856ad5b79a88f5da2fef10a51aa4a195","url":"./js/main.js"},{"revision":"711597b14ded7032027da91a8007a5a4","url":"./js/runtime/runtime.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"23eb2b94a06ea14ee4e64a6eeff25d6a","url":"./posts/19711/index.html"},{"revision":"6878a46d69c3769c61052349b7d093b6","url":"./posts/21725/index.html"},{"revision":"adff1c84844df62204dda50766fed5cf","url":"./posts/33107/index.html"},{"revision":"557d6758a6d91610a21e341860d63b97","url":"./posts/33510/index.html"},{"revision":"94f5edc0ce49dc8f3cc4e0fe089942d2","url":"./posts/33511/index.html"},{"revision":"52881e6b59f9c285e505ec5037610a80","url":"./posts/3603/index.html"},{"revision":"29a2de32f037568e3c5aa7ab5b9609c1","url":"./posts/50888/index.html"},{"revision":"4cc473d4e9a78ea2c8b16e39a6c6b9a9","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"3b2bb423b7a9f3460a11f65fbefb57e3","url":"./search.xml"},{"revision":"3b36db769971aff550a6eb9431622c95","url":"./sitemap/sitemap.xml"},{"revision":"8136bb0c17f8ff8d53c97ca824fd0d83","url":"./tags/Arch-Linux/index.html"},{"revision":"fc861ed99ed2dc8e70f7c6519b5dcb12","url":"./tags/index.html"},{"revision":"8635e0c766b33fd31a2ace11d079b917","url":"./tags/JavaScript/index.html"},{"revision":"b69f4007804771afd403b1f8e196378e","url":"./tags/Linux/index.html"},{"revision":"96b88af3ea53fe670edfefff6f285f4f","url":"./tags/Windows/index.html"},{"revision":"32614bd50652d92237b8b87a980ee977","url":"./tags/双系统/index.html"},{"revision":"822696b6103522314eb47f40027fca09","url":"./tags/数据结构/index.html"}], {
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
