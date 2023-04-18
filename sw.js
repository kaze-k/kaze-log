const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"76e4fe75f39eae37fb92d14ee88e54d6","url":"./404.html"},{"revision":"08fd86d72d92b31ae7cf0f039eec66a6","url":"./archives/2023/03/index.html"},{"revision":"08b3d14ba350727c152b4c5c99a8980c","url":"./archives/2023/04/index.html"},{"revision":"c4e730dd5fdd8409c0cb001f8cf74969","url":"./archives/2023/index.html"},{"revision":"8c6201161a20279002dbc6369ed82f67","url":"./archives/index.html"},{"revision":"e4e882480c3ecc905d50f110c3798ab0","url":"./bangumis/index.html"},{"revision":"2b24ffd081d3d54f24ae0954d1552e9c","url":"./bing.json"},{"revision":"f9ccf7ead15a4c4219b8e044eda1e888","url":"./categories/index.html"},{"revision":"1ba537053c46763e6e4bf1f958a371a8","url":"./categories/学习笔记/index.html"},{"revision":"5974e48287872f49d32d238caf25f1ff","url":"./categories/工具/index.html"},{"revision":"e242141682861c8c18b0b87b5debd0d4","url":"./categories/系统/index.html"},{"revision":"7fda8f1906b5bdfd1308d73805d54fa8","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"8c0298c4ce07269227d3e65fbcbd1543","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8bcd74fadc4f98b6b69176362fba2610","url":"./feed/atom.xml"},{"revision":"2093128b2d6ca05b9d5d6ffeb9374951","url":"./feed/rss2.xml"},{"revision":"011ecf21acbd146925f6f689f4172f75","url":"./index.html"},{"revision":"6bc367a7d4e138916e44641ef0799e1b","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"199a283332e3fac601ae63ccf5aa6d2a","url":"./posts/19711/index.html"},{"revision":"803ed5bee0b599aa61291cfb91d7d4c3","url":"./posts/21725/index.html"},{"revision":"80446e2fae2b639fd4897a7a2e7bcc7c","url":"./posts/33107/index.html"},{"revision":"da7345c73b8c4ade908e0437bcca8d43","url":"./posts/33510/index.html"},{"revision":"4fcbfb9bc1fa16fe7faff6a7a809d7f1","url":"./posts/33511/index.html"},{"revision":"aefa0b5ea7e092272ea3d51d28327d3a","url":"./posts/3603/index.html"},{"revision":"c5c711c4dd84ccee5f3c9debb74ffa05","url":"./posts/50888/index.html"},{"revision":"bf873c57313bfa54e50c2bab78ab1fe1","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a8c9db9405c4291cd6679899bbf01f36","url":"./search.xml"},{"revision":"11eb20fd08951c28f6bfe0f1ffc11b75","url":"./sitemap/sitemap.xml"},{"revision":"214f3b85cb54dd39e58140a7236ebc6e","url":"./tags/Arch-Linux/index.html"},{"revision":"435922ea5f304e5fd93d667dfdd560d1","url":"./tags/index.html"},{"revision":"39969d3ef3d0582dda7d1ec5c4d2f6d5","url":"./tags/JavaScript/index.html"},{"revision":"a022557bfa36efb93b2783ccceba3593","url":"./tags/Linux/index.html"},{"revision":"c92756e1c8c227e4ccde2575e0965e54","url":"./tags/Windows/index.html"},{"revision":"4c0251e609a77e349a87787a361fe927","url":"./tags/双系统/index.html"},{"revision":"80159240ca829b19683ede1de6229f30","url":"./tags/数据结构/index.html"}], {
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
