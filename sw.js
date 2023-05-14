const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"44d75d57c7e55090c47238190a57bc7c","url":"./404.html"},{"revision":"f6d68b88f2a4f82362b6bfbe8fbfb6c2","url":"./archives/2023/03/index.html"},{"revision":"ded0ba41ab1aba915352f221d0f59670","url":"./archives/2023/04/index.html"},{"revision":"2652d26845adf2248dacf96c1a6f470b","url":"./archives/2023/05/index.html"},{"revision":"8a942e7c6f23db62e71dfff1e82528f0","url":"./archives/2023/index.html"},{"revision":"23d27c2e1ba5be3859e776ffde20fc20","url":"./archives/index.html"},{"revision":"c8c4cff1ef4d2342fc953ceb044753b5","url":"./bangumis/index.html"},{"revision":"c7e783a46d5f8d5a460d63b87434c54c","url":"./bing.json"},{"revision":"fb51d62c324d38913fd055a237a4ae54","url":"./categories/index.html"},{"revision":"7b973810b3a24ef716c3164467d54b09","url":"./categories/前端/index.html"},{"revision":"2428f7bc1bc14433fd6e513bb5fbfbcd","url":"./categories/学习笔记/index.html"},{"revision":"6bf4ba4de55960b254e5a48b08964860","url":"./categories/工具/index.html"},{"revision":"c702ae3ac7ee3453ce6a62cbbfcadd17","url":"./categories/系统/index.html"},{"revision":"1239a7c78c973e1f0dcd0f3bbf6cb1ce","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"80abaeaa6ec94e3d3869a7922eda0691","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cffcc45ee2d497da97e201c74c34db25","url":"./feed/atom.xml"},{"revision":"202d4cf1f76d3ced3c76e1e5095e3fa9","url":"./feed/rss2.xml"},{"revision":"04123023f6955df9ab4100992929dd99","url":"./index.html"},{"revision":"fdc61f0be8262969b80db323eb5f25f1","url":"./js/custom/animation.js"},{"revision":"a2d91495f5ddd2928ff0524c93eb6cb8","url":"./js/custom/screenfull.js"},{"revision":"146a1ab24050046a67a4a25afde6e3d4","url":"./js/custom/title.js"},{"revision":"e8454bcd550ac42781cb5eba90a680b4","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"6ab581a95b1e9d2bf780b63a799094fa","url":"./js/main.js"},{"revision":"04678c982fb4ec46f38c276a1db4feb0","url":"./js/request.js"},{"revision":"767206e399e49a35346b384601df4d25","url":"./js/runtime/runtime.js"},{"revision":"682ec4eeb3e08dd16f1ee7025adc9404","url":"./js/search/algolia.js"},{"revision":"71b1e9ed8919e3dab4cba6414b86bf08","url":"./js/search/local-search.js"},{"revision":"f98a6e0c806419a275636d35d0c9ae3e","url":"./js/swiper_init.js"},{"revision":"fcca072bf9c0d05d53dc738e89822b1e","url":"./js/tw_cn.js"},{"revision":"cf15d3be56e824da5cb079f0011dc96d","url":"./js/utils.js"},{"revision":"01e19a595d0d7972ecb7b83d59aa1e46","url":"./posts/19711/index.html"},{"revision":"a65453f2a778afb9f526981cd5644ee6","url":"./posts/21725/index.html"},{"revision":"e5ac54914545adb984e3dfd1e1f9c731","url":"./posts/33107/index.html"},{"revision":"fc2ea0a8c999c66e97a09c6cec639145","url":"./posts/33510/index.html"},{"revision":"cea3a77708c945075511b3dcb2724a8e","url":"./posts/33511/index.html"},{"revision":"c5045ad0489beaaa790f62c69dbaae31","url":"./posts/3603/index.html"},{"revision":"ae09cef4aa880f35af0490536d4161ed","url":"./posts/3a68f348/index.html"},{"revision":"5ec117a203e639de32ab2770a83ec5c7","url":"./posts/50888/index.html"},{"revision":"ed19b9574e7bf6f8bc0cc3b88308e71f","url":"./posts/61844/index.html"},{"revision":"d9a89443cc1dba3f0fc53cf29b2ddf26","url":"./pwa/manifest.json"},{"revision":"c6f10e049d4f690cb73e8bdd65255e3e","url":"./search.xml"},{"revision":"fcd6f04292de5eec60fc277a4e68ed2e","url":"./sitemap/sitemap.xml"},{"revision":"38c7415a71a6cb9a281e72a12ce96ea2","url":"./tags/Arch-Linux/index.html"},{"revision":"e18fc8ae5d1f77e921c01bcd533605fd","url":"./tags/index.html"},{"revision":"be8e92847b5ab0e5d9d0ffb18e867b27","url":"./tags/JavaScript/index.html"},{"revision":"aa3ae17e929bbea3322ce1015087210c","url":"./tags/Linux/index.html"},{"revision":"a9628136594bd963a83e9ae973b7570b","url":"./tags/Windows/index.html"},{"revision":"83d2f813b3c9f1344c597755da5ea254","url":"./tags/双系统/index.html"},{"revision":"5ab0bcad5d46869477fbcabda4d13989","url":"./tags/数据结构/index.html"}], {
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
