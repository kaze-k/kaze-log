const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4701e723ea85446d5baf08e5f104ed29","url":"./404.html"},{"revision":"da3593c02e0d163ad165af0105a061fb","url":"./archives/2023/03/index.html"},{"revision":"911245c92b18f8ffb7bd93fc628efa0d","url":"./archives/2023/index.html"},{"revision":"57de2a7714de9bf8e8709b8be85ecc56","url":"./archives/index.html"},{"revision":"38382b8882bfe518a09ac86c28475a42","url":"./bangumis/index.html"},{"revision":"4cf31fcac809c874b2e017b860c914a9","url":"./bing.json"},{"revision":"b9ca5367af89d6d0cfc3c6a51707b32b","url":"./categories/index.html"},{"revision":"7254f4c62313cf5aff78bbb1a5c49d3d","url":"./categories/学习/index.html"},{"revision":"a570ad75e1ff915a71e69c80f88bb3af","url":"./categories/系统/index.html"},{"revision":"263d2bf72251914d3d3c0f75436eb6a5","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a08204c0a273d1326e68964802e0a782","url":"./feed/atom.xml"},{"revision":"1b6db7117b10670e165ddabd31b7b2f8","url":"./feed/rss2.xml"},{"revision":"e1e90d5abe848ac00b07a9fd824246e4","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"9a3aecd31880a78909df4746f8104a5c","url":"./posts/33107/index.html"},{"revision":"5d79a751caf0584756b753615bcd8130","url":"./posts/3603/index.html"},{"revision":"7cbb0b68b094d1157b70abf6caed7e2f","url":"./pwa/manifest.json"},{"revision":"b5ffcc27768b6712ce9c19ad187ea5a4","url":"./search.xml"},{"revision":"8ac519177f53c41cb6c5557eeeda4b76","url":"./sitemap/sitemap.xml"},{"revision":"9abe66269407d2155ad9d6a80c454523","url":"./tags/index.html"},{"revision":"03a8b5a0920d0141ea2dddceaf4c06bc","url":"./tags/Linux/index.html"},{"revision":"9d4889543adc653482786ee9f8b34695","url":"./tags/数据结构/index.html"}], {
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