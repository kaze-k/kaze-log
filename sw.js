const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c2292a1ac961344c5278c07a72b98ebd","url":"./404.html"},{"revision":"970f9f628bec10a9c996b0e91aa9d285","url":"./archives/2023/03/index.html"},{"revision":"9cf6425b9aef7c01d39befe23290c72f","url":"./archives/2023/04/index.html"},{"revision":"d6fb9d1ed01e2f7428d3dad459fd3907","url":"./archives/2023/index.html"},{"revision":"809b8eb7bfc83809ec50012e3fc00dd1","url":"./archives/index.html"},{"revision":"0b7378ce63a32986c3e57b080593e689","url":"./bangumis/index.html"},{"revision":"657d59a374b71c089dd1860193676d26","url":"./bing.json"},{"revision":"35e242ca656dd7c0db91f4a23794c2d4","url":"./categories/index.html"},{"revision":"38c80ebc67e290bb076a815c834f9863","url":"./categories/学习笔记/index.html"},{"revision":"db26c8f64c40bb3c8be54e1f696f1726","url":"./categories/工具/index.html"},{"revision":"f7f17f29e6c0e3097b5dd78b8393dcbd","url":"./categories/系统/index.html"},{"revision":"0fe2fd63bb1d300ed652ad6eff0b79e1","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"0a8f1662c86f959b352657b76347cf0a","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d6f3780a78b754e09937b285ed8baf70","url":"./feed/atom.xml"},{"revision":"93fde2add9e0a3127c09d4bc7f375354","url":"./feed/rss2.xml"},{"revision":"8950bf9340b6e7b8c3923707f91a3565","url":"./index.html"},{"revision":"3033dc7ffbf02691101e845820c52471","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"ea05c55272ac6fbf4ebc6542f393a322","url":"./posts/19711/index.html"},{"revision":"051c237e6ad8657f2689b451ff2ec0ae","url":"./posts/21725/index.html"},{"revision":"1a64d80ad88bd037e48eecbc81e63705","url":"./posts/33107/index.html"},{"revision":"b436810966e42a56ec97cc58e14b753e","url":"./posts/33510/index.html"},{"revision":"5266549af2c93f95a1829093f6cea855","url":"./posts/33511/index.html"},{"revision":"0a6056c114e279d76486df203eb42904","url":"./posts/3603/index.html"},{"revision":"253622774ab45a1fb8eaf405d15f8511","url":"./posts/50888/index.html"},{"revision":"660f1f108284c93c38b8c884c8f4d196","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"4004e2226e1f111bb0f7bbb0dd2aa77c","url":"./search.xml"},{"revision":"b180d4527197f6b0973fb0317388baab","url":"./sitemap/sitemap.xml"},{"revision":"a5a939cf56a32fff9136311a98704098","url":"./tags/Arch-Linux/index.html"},{"revision":"62352ada2eaf3ef4d71976c86029509f","url":"./tags/index.html"},{"revision":"6c2b96d59da92f3984cf69ddfb3f7f36","url":"./tags/JavaScript/index.html"},{"revision":"aa5cd2d9cc7aa3db9358cb8894d89927","url":"./tags/Linux/index.html"},{"revision":"0e4f081dac5a93d48891697d4178b2fb","url":"./tags/Windows/index.html"},{"revision":"d345fea704eef403c030743c378e9574","url":"./tags/双系统/index.html"},{"revision":"8c485b2b3fda7fabfaf1e461a9da70c7","url":"./tags/数据结构/index.html"}], {
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
