const workboxVersion = "5.0.0";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "kaze-log",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"193d1d617e22f418e5d1bf5689821bbe","url":"./404.html"},{"revision":"d877672fb22bcc44e24419135ea415a6","url":"./archives/2023/03/index.html"},{"revision":"3192406f74e269c1b723add436d27ae2","url":"./archives/2023/index.html"},{"revision":"7a04e4e5cbbef320e8b49a4f60d4c444","url":"./archives/index.html"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"89c8d02aa9df5c3b67192217cdfea07b","url":"./bangumis/index.html"},{"revision":"cb22bd0a937671f65fe1d2d6b924520d","url":"./bing.json"},{"revision":"9b9528ca5b2f59a68b2fdf0e64dd9827","url":"./categories/index.html"},{"revision":"a053124e011dddb61bc50685a8116197","url":"./categories/学习/index.html"},{"revision":"390db8a97ab1add74a7a6b6ebf7f2cc2","url":"./categories/系统/index.html"},{"revision":"f4abb1d7e934c979a7a70e4ebe8bfc3a","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"aebad42f0dc4f18846e963c06f9c92ad","url":"./feed/atom.xml"},{"revision":"1a8842ca82d6077abb8eabb72b35e5c9","url":"./feed/rss2.xml"},{"revision":"cd00f3efe6cc8949a5bb21dd7218dec5","url":"./index.html"},{"revision":"1b5082ca9b5a318b9bf2be3a50ceb857","url":"./js/main.js"},{"revision":"8aedfa16603dc47c1b183b7bbfb08c73","url":"./js/search/algolia.js"},{"revision":"3614d13f30b8acc6f72e933f83e8d44c","url":"./js/search/local-search.js"},{"revision":"b9dcda1f686d8acd499180ef3679797e","url":"./js/tw_cn.js"},{"revision":"4eb0856891d6efaad75d4e584cab9cc5","url":"./js/utils.js"},{"revision":"f2a5ff223c095b3ad1a5d197e63ff580","url":"./posts/33107/index.html"},{"revision":"47d7e0567de3af57cbaccbb78d2fef25","url":"./posts/3603/index.html"},{"revision":"2b842149868c6405c8f3101fc96ca015","url":"./pwa/manifest.json"},{"revision":"787c3926e376feaf13793a9700372237","url":"./search.xml"},{"revision":"8cfb3107c7482f6ce6f54b5f40229e6c","url":"./sitemap/sitemap.xml"},{"revision":"cb2de3ade08a96b92372a766b64eb3ca","url":"./tags/index.html"},{"revision":"315de8a0b2526e6e4ddc867bd8ec7c1f","url":"./tags/Linux/index.html"},{"revision":"f50be23a9faf589f7461872cb6a82fa6","url":"./tags/数据结构/index.html"}], {
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