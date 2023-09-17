const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b388a1f03ddd973a664325fdeae7604a","url":"./404.html"},{"revision":"59a74432e7f90cf8398923dbb96a8987","url":"./archives/2023/03/index.html"},{"revision":"db1917d158ef3ec36cc1f62a6f1e3ee9","url":"./archives/2023/04/index.html"},{"revision":"44bb12e0a172a3351da9907135483cb0","url":"./archives/2023/09/index.html"},{"revision":"61396d3b8b69bbd291b5632da181fd64","url":"./archives/2023/index.html"},{"revision":"b65c8c6575167945e525a71f89501384","url":"./archives/index.html"},{"revision":"97ed9ab07e95cca183d435df0dcac4fb","url":"./bangumis/index.html"},{"revision":"c7e783a46d5f8d5a460d63b87434c54c","url":"./bing.json"},{"revision":"9afb96fffeefa3147281432c239fe658","url":"./categories/index.html"},{"revision":"afa299e46d62bab67c1640d46bf4c139","url":"./categories/前端/index.html"},{"revision":"60ea7fea8c63bced8fcb975f1c172c50","url":"./categories/学习笔记/index.html"},{"revision":"56982629cdd2536f4b03fcab926c5065","url":"./categories/工具/index.html"},{"revision":"6b87f6adc2a642af5182335cc53fccdb","url":"./categories/系统/index.html"},{"revision":"df0f5f73604bc2dee0ee27d719d04d87","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"bc5d2fd19c4799714f4376a6ea0d27fd","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3590b242bfb49c3f262ce8030ab62963","url":"./feed/atom.xml"},{"revision":"db04f623ebcf9a40fd203e6c389c152f","url":"./feed/rss2.xml"},{"revision":"25189caccb61306ff485c5174481933b","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"a2d91495f5ddd2928ff0524c93eb6cb8","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"6ab581a95b1e9d2bf780b63a799094fa","url":"./js/main.js"},{"revision":"04678c982fb4ec46f38c276a1db4feb0","url":"./js/request.js"},{"revision":"767206e399e49a35346b384601df4d25","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"71b1e9ed8919e3dab4cba6414b86bf08","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"cf15d3be56e824da5cb079f0011dc96d","url":"./js/utils.js"},{"revision":"35cfbeb095692926e62353d9f4e4a29b","url":"./posts/19711/index.html"},{"revision":"dae408b0a8689a375d9eab2d8be382ac","url":"./posts/21725/index.html"},{"revision":"2e9b99823d82e5a71d748819dbf0456f","url":"./posts/33107/index.html"},{"revision":"a6ac38d60fd171869873f3d538412848","url":"./posts/33510/index.html"},{"revision":"0f4364f9a41295faf4f26bbc2db494c6","url":"./posts/33511/index.html"},{"revision":"0cb2c1320c6a87bd9166495ee29bdef9","url":"./posts/3603/index.html"},{"revision":"9b9387c3bc685d282568abea427f2d7b","url":"./posts/3a68f348/index.html"},{"revision":"679e3719ebd479aeab617ed4060f7f9f","url":"./posts/50888/index.html"},{"revision":"e8c3d43ab1f42bba11c909942b885048","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"1d2b6ca6dc0ccdc2e0942d937e54fe27","url":"./search.xml"},{"revision":"a5f68a4ecef4773647925bc8a1a1c473","url":"./sitemap/sitemap.xml"},{"revision":"b6efcd64c221d077849f3c705304f9fe","url":"./tags/Arch-Linux/index.html"},{"revision":"5c425cfa698ff34dcdb26b0f983008fa","url":"./tags/index.html"},{"revision":"62a0e4be831c7a06376e94181ba4e4a7","url":"./tags/JavaScript/index.html"},{"revision":"784b3ba71d6a896dbf1b69c94f1f23d1","url":"./tags/Linux/index.html"},{"revision":"d10eb30925d3b9c6cefdc90149448250","url":"./tags/Windows/index.html"},{"revision":"2b8ccc3d46a3afcdf78ad80d27374e00","url":"./tags/双系统/index.html"},{"revision":"96c51b7dfe9ef4ca1ad5643d03b893aa","url":"./tags/数据结构/index.html"}], {
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
