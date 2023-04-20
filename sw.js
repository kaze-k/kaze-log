const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b307a0fd97acd1212e3d1c7c891db233","url":"./404.html"},{"revision":"068e601f4ede8f11169fa6b78c55ca7d","url":"./archives/2023/03/index.html"},{"revision":"29d0e9f571b0033a08bff30ae4d49dbd","url":"./archives/2023/04/index.html"},{"revision":"4220e32ed438e16b1092f6ac20d84f1c","url":"./archives/2023/index.html"},{"revision":"52ccf37a508d470c42e78caf7e0b0dbb","url":"./archives/index.html"},{"revision":"348952aa7d985f8b73f08ab90b5b8f2c","url":"./bangumis/index.html"},{"revision":"dac01aadf563d04dcb37e4fc204fe6e7","url":"./bing.json"},{"revision":"3b47742000fd825f390fb702aea050a1","url":"./categories/index.html"},{"revision":"19f4478f354a26f8bd3372eda39cf209","url":"./categories/学习笔记/index.html"},{"revision":"4f50ea761e83414a2fd805aa8c79e0b9","url":"./categories/工具/index.html"},{"revision":"01726d3318cd32adfb0f73f6e2e558ec","url":"./categories/系统/index.html"},{"revision":"002ca96437df5200e37c7fdc5812887c","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"0a8f1662c86f959b352657b76347cf0a","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4b72e975f91aaf1ded625508f3cc2a97","url":"./feed/atom.xml"},{"revision":"4757f16eeabed20380413b5430a1c6a6","url":"./feed/rss2.xml"},{"revision":"ae1644c4040a80fdf45c48d63f440fc7","url":"./index.html"},{"revision":"affb92f55cccc8b6f9b268ffb3c0bd72","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"94a8553385e768e0eba5381b1379e0b5","url":"./posts/19711/index.html"},{"revision":"3e9bca3a9dd864c9ed11e24d786c64db","url":"./posts/21725/index.html"},{"revision":"7f54270b6ca8d4f4ce75620537715873","url":"./posts/33107/index.html"},{"revision":"8c27645969e957fdad08a45204df9a86","url":"./posts/33510/index.html"},{"revision":"1a2b4b26a54ca92b6ccaf774806977bf","url":"./posts/33511/index.html"},{"revision":"01523b707b44bbafb820b0701b3b182a","url":"./posts/3603/index.html"},{"revision":"e4d3af3f64bb0bf6085047f4c86b4468","url":"./posts/50888/index.html"},{"revision":"c886bdf3b7badcf094957dcc2e00b33d","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"a8c9db9405c4291cd6679899bbf01f36","url":"./search.xml"},{"revision":"63cc2ebce4aa61b32d7d2bbf97327832","url":"./sitemap/sitemap.xml"},{"revision":"9871dd4e3b20c391d1565a2c15f5a227","url":"./tags/Arch-Linux/index.html"},{"revision":"3105b9149d480b3deac6bb9bb39179b8","url":"./tags/index.html"},{"revision":"a5133448494ebd07f866301ce17345d7","url":"./tags/JavaScript/index.html"},{"revision":"c0dbb63af7d57a47317f20af63637e7b","url":"./tags/Linux/index.html"},{"revision":"b3dc8836f79c7391f2270a84fab407e0","url":"./tags/Windows/index.html"},{"revision":"d901035d51d8cd27d09fb23fc53a5e52","url":"./tags/双系统/index.html"},{"revision":"c6e6be7fd3ecb54ee05fb6aaa9ffcb69","url":"./tags/数据结构/index.html"}], {
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
