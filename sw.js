const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b0cd9fc0234a655eeb1beb9342a8bef9","url":"./404.html"},{"revision":"7c2d895dc095aff2465a6e0bac6c3c83","url":"./archives/2023/03/index.html"},{"revision":"33d034b22c6b874421d41b143a2e1913","url":"./archives/2023/04/index.html"},{"revision":"809b6abd419c753876e7d4edc9418ae3","url":"./archives/2023/index.html"},{"revision":"2b477458aec79a3e5d3e83f107eb459e","url":"./archives/index.html"},{"revision":"3166498be64203dee8ed4438fcbb3623","url":"./bangumis/index.html"},{"revision":"c41ae9b8bbb76d6e59239d4d1ce9a140","url":"./bing.json"},{"revision":"2ebf79bdf0982595b3d0081dbdfbb7df","url":"./categories/index.html"},{"revision":"a04ba110280f3d6f8f8ce2113f81872b","url":"./categories/学习笔记/index.html"},{"revision":"952be305ed842d0f511f5bbcbebcc451","url":"./categories/工具/index.html"},{"revision":"94b287328396bf34701625d116ae58d9","url":"./categories/系统/index.html"},{"revision":"19c261d3cd3c4175d09fe574f7941a03","url":"./cinema/index.html"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"461a0838c947fed49eb0f355e415dd10","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"af148d2c54a745eb5a05cce5b6e96ab4","url":"./feed/atom.xml"},{"revision":"a9fed414b2df78cb6ad7c09d639e1385","url":"./feed/rss2.xml"},{"revision":"cab94cd06d4843ebf41957c1f629d6a7","url":"./index.html"},{"revision":"7b6beb3b3bb08111eef024d76c569b15","url":"./js/custom/animation.js"},{"revision":"a8c69784e47c9ee7e10dd9440057efde","url":"./js/custom/screenfull.js"},{"revision":"c5345602114af216187c94703f23ea82","url":"./js/custom/title.js"},{"revision":"a3b7f4a4f93b3bfe93baed97be4672de","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"22c0a8e0fc2e706178763b2876b1da1a","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./js/utils.js"},{"revision":"20c0b34b07497a7e17535150d10f33ad","url":"./posts/19711/index.html"},{"revision":"887e79e4cc30364af571697d260470d1","url":"./posts/21725/index.html"},{"revision":"8a445497ffcd3a246fc4a16204976f9c","url":"./posts/33107/index.html"},{"revision":"0da19e3a4e24fce0a08d700b40984b81","url":"./posts/33510/index.html"},{"revision":"3a24d89c1ddfca2589a58db0cd6a85e1","url":"./posts/33511/index.html"},{"revision":"25ddbc634520b148130bd5fd297d7724","url":"./posts/3603/index.html"},{"revision":"dc59f83528f80444237aee7436ea2180","url":"./posts/50888/index.html"},{"revision":"954e90a0dd3e77c30aaad6160cf349c7","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"1cfa950c9e4d240fa060ce2d23f524eb","url":"./search.xml"},{"revision":"c1b4d9e05495ad4467314efd78fd6b8a","url":"./sitemap/sitemap.xml"},{"revision":"753dde00986e4dff3bb60cc6f4986777","url":"./tags/Arch-Linux/index.html"},{"revision":"062e5270771d0951b878682c803e9798","url":"./tags/index.html"},{"revision":"14856ea5998ca04918ca6a5a682b0612","url":"./tags/JavaScript/index.html"},{"revision":"1df784d8ad1dbc550ce629c51a1cfd10","url":"./tags/Linux/index.html"},{"revision":"3501dcd77795663202f71c9b0fa83825","url":"./tags/Windows/index.html"},{"revision":"7e6420e36eb4b68fc628b626362b87c2","url":"./tags/双系统/index.html"},{"revision":"e05c8c35bea378456b8e7c28e7f451ba","url":"./tags/数据结构/index.html"}], {
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
