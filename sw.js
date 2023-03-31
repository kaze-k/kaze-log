const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e0ba934a2c61dde25e131829502d4a6b","url":"./404.html"},{"revision":"02807af75174b2d4734f98c52aa7b684","url":"./archives/2023/03/index.html"},{"revision":"e28236caa408a3e2993a6290a13ecb53","url":"./archives/2023/index.html"},{"revision":"e86891e78da982d62aa8abcf120e4012","url":"./archives/index.html"},{"revision":"5ba0f207989303e679336c17a1a7f09e","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"6b19849020e2b52d21d9c2f61b597bc7","url":"./categories/index.html"},{"revision":"753bb817889f2323b28bd7549fbc28bd","url":"./categories/学习/index.html"},{"revision":"82737eea0d160e93782330155d3e5ccd","url":"./categories/系统/index.html"},{"revision":"263d2bf72251914d3d3c0f75436eb6a5","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a08204c0a273d1326e68964802e0a782","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"5ed2d23b4f81cfb4687ee399f84e9004","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/33107/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"16b3209893589cfd53d3db1dd9c02cfd","url":"./search.xml"},{"revision":"8ac519177f53c41cb6c5557eeeda4b76","url":"./sitemap/sitemap.xml"},{"revision":"71d58f9b9dd657a1d8e26e35ba961c31","url":"./tags/index.html"},{"revision":"30584d2b25183dc296886af305e79af8","url":"./tags/Linux/index.html"},{"revision":"5a033f72f8e5761819b4f689de73fa83","url":"./tags/数据结构/index.html"}], {
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