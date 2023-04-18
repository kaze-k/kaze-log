const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9e3a964b77066b7c31cbe548c0d95f6d","url":"./404.html"},{"revision":"4bb18d10a8c34369d816c7dba678d834","url":"./archives/2023/03/index.html"},{"revision":"e7cd00b96b430e80a6560f2c5b9074d0","url":"./archives/2023/04/index.html"},{"revision":"38301a50a425e839603a9c94a878320c","url":"./archives/2023/index.html"},{"revision":"def3e2aee6d94092e1c29da1f4b3df91","url":"./archives/index.html"},{"revision":"dba8e1ac5d66d249b7471535266a7e61","url":"./bangumis/index.html"},{"revision":"bb563772ca2d0a0df1695602b9e5442d","url":"./bing.json"},{"revision":"07e2fac13e6eaf576681bb1ed3d77321","url":"./categories/index.html"},{"revision":"a8c382961c085d1bbcf258f141e6e35b","url":"./categories/学习笔记/index.html"},{"revision":"a5e1ccc816410101a26ef11f4e6b6baf","url":"./categories/工具/index.html"},{"revision":"61d9fad4ae4503c552b49c02ae5bfdee","url":"./categories/系统/index.html"},{"revision":"727d13aef6e1ac3af97d3864102665ec","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"8c0298c4ce07269227d3e65fbcbd1543","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cd5d065e8bd75404009fb62ac182e6a8","url":"./feed/atom.xml"},{"revision":"4d6d81f11ef80d800f98a6db2df45ea3","url":"./feed/rss2.xml"},{"revision":"3ca65e700904b35544fdc47659931cf8","url":"./index.html"},{"revision":"9c00332b6bdfc301f2e7c7257e3d90a9","url":"./js/axios.js"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"2fa7e05e6b0bcc7346e6bad9a4b2b35e","url":"./posts/19711/index.html"},{"revision":"88bb432d06f985b56d377130e614d1c4","url":"./posts/21725/index.html"},{"revision":"2c3c47a0d7dfedbb8f6cc115ed3161d7","url":"./posts/33107/index.html"},{"revision":"3e4c9beee926a0f954f60f8aa9260825","url":"./posts/33510/index.html"},{"revision":"c53288749d450bb6cb1a92dc88a2b211","url":"./posts/33511/index.html"},{"revision":"44f9ac0a904f5e1f9b9aa3d1f0f18820","url":"./posts/3603/index.html"},{"revision":"45013177f3d5a688b770e89f04ecbde4","url":"./posts/50888/index.html"},{"revision":"e80730d51de0e6b00b69bfc69b65eff3","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"cfd89fd19957432e06f4b413cb11da86","url":"./search.xml"},{"revision":"d454e0aacf6de3df495ea1f0cf292e07","url":"./sitemap/sitemap.xml"},{"revision":"5855a178ba042cdf33605c105259af7f","url":"./tags/Arch-Linux/index.html"},{"revision":"6f6fb71013fbb6c172ad8ba2cd00ac9e","url":"./tags/index.html"},{"revision":"eb2c6bbbb9fd75951ab16cec0e0ebee8","url":"./tags/JavaScript/index.html"},{"revision":"9b3cee3e2f8298551701ac7a1a505e73","url":"./tags/Linux/index.html"},{"revision":"47b5e7d13f14de72a1efc7026fe31fd4","url":"./tags/Windows/index.html"},{"revision":"c5f0ec9db7fa157e74e1ef99dbd7dfea","url":"./tags/双系统/index.html"},{"revision":"60b6f99e51a2a90848bfc08446d3352e","url":"./tags/数据结构/index.html"}], {
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
