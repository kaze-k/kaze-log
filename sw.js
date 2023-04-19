const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7c0eb0c9d929e51bbc044c5b2bcf0d91","url":"./404.html"},{"revision":"52322e001fa64cfcfbeba7119dd2ee53","url":"./archives/2023/03/index.html"},{"revision":"a036295a77209a884f47510592b8be6d","url":"./archives/2023/04/index.html"},{"revision":"4481ae07a559e2e34b558e88d9a6b8c0","url":"./archives/2023/index.html"},{"revision":"da3dd911ade63942704a98eea2570988","url":"./archives/index.html"},{"revision":"16a2f35e4b3a70a3698a5fc8c16be3a4","url":"./bangumis/index.html"},{"revision":"657d59a374b71c089dd1860193676d26","url":"./bing.json"},{"revision":"4d4da227a77a7522b17917ca1dbf5d0a","url":"./categories/index.html"},{"revision":"c3054a1356ba6d4469fac3455a1deb42","url":"./categories/学习笔记/index.html"},{"revision":"bb7ab1663dad694753066fe4e4f0cbc6","url":"./categories/工具/index.html"},{"revision":"5ffcd65bbafb0cbe7e4707eca6633918","url":"./categories/系统/index.html"},{"revision":"2e911110eaeda72fba45492e64d351f5","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"dbd1bbb0ed41001c81179b2ff72af572","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d6f3780a78b754e09937b285ed8baf70","url":"./feed/atom.xml"},{"revision":"93fde2add9e0a3127c09d4bc7f375354","url":"./feed/rss2.xml"},{"revision":"c54db53f02d9801d2eda7969a8b1881e","url":"./index.html"},{"revision":"4441dae678653d9d702bd8cb88a99fc4","url":"./js/axios.js"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"c985965ea04217e8c6a4ab20f796d1bd","url":"./js/custom/title.js"},{"revision":"9a37be7a2a70b1875410e3e6985a9af4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"3453e958507668b387a0323aef9a5c7f","url":"./posts/19711/index.html"},{"revision":"a977002f45fab7c7d4c550f36c471c3c","url":"./posts/21725/index.html"},{"revision":"53241ca5a0d1cd58ac607d42fbea71db","url":"./posts/33107/index.html"},{"revision":"ce7ca7379cd12db8fcac4553c07f7138","url":"./posts/33510/index.html"},{"revision":"1d86f1cf13ef60d1c2247577111dedeb","url":"./posts/33511/index.html"},{"revision":"4121c550dd26198b02b83089ec05b7cf","url":"./posts/3603/index.html"},{"revision":"339a2ec5ac5ea995f1fd66f9476039e5","url":"./posts/50888/index.html"},{"revision":"47a66416855fceed05909a32c6538763","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"cfd89fd19957432e06f4b413cb11da86","url":"./search.xml"},{"revision":"4586975843fcb032f6ba5dabd553fd65","url":"./sitemap/sitemap.xml"},{"revision":"fb06f595cb2d248278dbf94c4f2b191c","url":"./tags/Arch-Linux/index.html"},{"revision":"5359a143b9a51bfb52a1cb3f604eafc4","url":"./tags/index.html"},{"revision":"6e6107576adb03a037065965ed456c92","url":"./tags/JavaScript/index.html"},{"revision":"d404ce541506f3874ec21682d071b3c9","url":"./tags/Linux/index.html"},{"revision":"304580ec29685568f8c9bf08ca6eb8b0","url":"./tags/Windows/index.html"},{"revision":"c9f07419b8b41b99be35ae2038f64fb7","url":"./tags/双系统/index.html"},{"revision":"cab0ec629a8b6d27ee5400aeb8338b14","url":"./tags/数据结构/index.html"}], {
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
