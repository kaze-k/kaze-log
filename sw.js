const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ae3bbbd1dd3a37dfa8f842a5359c08ed","url":"./404.html"},{"revision":"0c6da544b5ec2fceb11cdc8b4375f93a","url":"./archives/2023/03/index.html"},{"revision":"5faa3888a05932044d07c2d28f39bbda","url":"./archives/2023/index.html"},{"revision":"bf9507f919e9ae96ecac2415b65e0af3","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"34264ae99a96a5ccf26082e0bc4df094","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"a1e7c9b29d3b08b11a20aa6df3645d48","url":"./categories/index.html"},{"revision":"9ba010c661ccdd752c133fba960839dc","url":"./categories/学习/index.html"},{"revision":"9d696637cffd0529eb34c9bede4b742f","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"a672c75a38cf017cba6804fff8fa5c5c","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"f24829641dcd665dedf65bd2075d2748","url":"./posts/33107/index.html"},{"revision":"675b16f62db7f87445dce73df527ee25","url":"./posts/3603/index.html"},{"revision":"77d78fa7adf6d9a00e01bd1daff95a73","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"07078b733e44ea087a64a05fe4d1bfef","url":"./sitemap/sitemap.xml"},{"revision":"244d2d931340d04c4ad1cce184c4c4ea","url":"./tags/index.html"},{"revision":"e83543889afd80ca0f65020a05ac727e","url":"./tags/Linux/index.html"},{"revision":"a0dd57c7773fcd1c700e2054c6ce68f6","url":"./tags/数据结构/index.html"}], {
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
  })
)

workbox.googleAnalytics.initialize();