const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7d93cb7cc33b6bd81a9e15b0eece04e9","url":"./404.html"},{"revision":"5132f03734cad62db2b61328a5f37e6a","url":"./archives/2023/03/index.html"},{"revision":"210f1abbc3aecf155b8c7e5b395ec19e","url":"./archives/2023/04/index.html"},{"revision":"5f4ae2cc96e5ae7b64c7ee60315f6088","url":"./archives/2023/index.html"},{"revision":"c9a6e82cbe04c434915cbc6c33a74195","url":"./archives/index.html"},{"revision":"96ec2314307a3bd85a6446bf3fb4721a","url":"./bangumis/index.html"},{"revision":"8b8015d9395499890585e71596941ebb","url":"./bing.json"},{"revision":"6141c421e016223c272bfa59c243d8bc","url":"./categories/index.html"},{"revision":"e67df25606e9eba16af22dfc4e2dc21c","url":"./categories/前端/index.html"},{"revision":"c00843389e8acca3943fde490fa0bc55","url":"./categories/学习笔记/index.html"},{"revision":"a386cf85f9367d6a928e5174e5889e4e","url":"./categories/工具/index.html"},{"revision":"7b95d8bd7f80ec84269182cb093fa143","url":"./categories/系统/index.html"},{"revision":"78c58c702d4f9043109e200d470dace1","url":"./cinema/index.html"},{"revision":"3e8bf0968aeb4fd0985467d2ce132176","url":"./css/custom/admonition.css"},{"revision":"dbd1e6c13c1eb813d553ffd597e0dcd1","url":"./css/custom/container.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"3c7effec4c4051d2cb05168fc70f792d","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f35b56605b8707855762ab6bde679324","url":"./feed/atom.xml"},{"revision":"150a9b3ad8cdbfe3daa1789fed746b92","url":"./feed/rss2.xml"},{"revision":"22be34ce29a5a11f005a0b3b7c4fe6f9","url":"./index.html"},{"revision":"cecc655481c677413b90732673b1e599","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4c88b6880eced68e8fe9494a970682f3","url":"./js/custom/title.js"},{"revision":"ef73575e2877e076475b3ee26ec5e9e7","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"4ab37c7561acf2651ca637082fa19be8","url":"./js/request.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"d5f6d8cc9d84c82e6a51df1ae7b5beb0","url":"./posts/19711/index.html"},{"revision":"f3c0ab87cad506c79d48c291694156ac","url":"./posts/21725/index.html"},{"revision":"b91b5221d06e9bd4899187fb28602c3d","url":"./posts/33107/index.html"},{"revision":"e34f3b4afb211cdb1600eee5ed084f85","url":"./posts/33510/index.html"},{"revision":"89893df68f70df368d962fe2f026c49b","url":"./posts/33511/index.html"},{"revision":"132191b4c6a6c9f9b13030e7c0e86b72","url":"./posts/3603/index.html"},{"revision":"b5fb76309006470d6fcdc12c5f1ebcf6","url":"./posts/3a68f348/index.html"},{"revision":"19fbc5ef817b3e68fb1b8e4736e5cdbd","url":"./posts/50888/index.html"},{"revision":"60fc26ac03229d403bca4c6fdc4f3e94","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"4872d15e0bc1511a45a1392a022c8e3a","url":"./search.xml"},{"revision":"d7efe0416658181d735d76a31d529dd1","url":"./sitemap/sitemap.xml"},{"revision":"9bd11fb6c5348847e60100246f1542c8","url":"./tags/Arch-Linux/index.html"},{"revision":"d184f2518549f67de6dec589cccc6669","url":"./tags/index.html"},{"revision":"dd4d701122cf0d4530a6da5d48127f90","url":"./tags/Javascript/index.html"},{"revision":"a237cf7419d4d4bc1466def8df774e2f","url":"./tags/JavaScript/index.html"},{"revision":"dd2992735a6b1626471c85e2c4cf482e","url":"./tags/Linux/index.html"},{"revision":"4055edcd87538c71cc1b8d07cf7f3091","url":"./tags/Windows/index.html"},{"revision":"f57e94085cfe4f39c63963785b21ac09","url":"./tags/双系统/index.html"},{"revision":"9cad5bf8839877d1fb95a5ef5c03ecda","url":"./tags/数据结构/index.html"}], {
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
