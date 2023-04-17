const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bf547ab515746c81e61f658cdf02594b","url":"./404.html"},{"revision":"cb0034e198ff5a8b652643e991418740","url":"./archives/2023/03/index.html"},{"revision":"95618d222a8792702b9c43ca48709e90","url":"./archives/2023/04/index.html"},{"revision":"29244fb5009796abe78dbecf75b65fa7","url":"./archives/2023/index.html"},{"revision":"fc5099bd97db0992f04d4b3c5a8efba3","url":"./archives/index.html"},{"revision":"07e5db65b567df6968cebc9176eda143","url":"./bangumis/index.html"},{"revision":"7754b71c2ba02adf9e0a5ea898059361","url":"./bing.json"},{"revision":"b045a098d0025881b73025bc7408ba6f","url":"./categories/index.html"},{"revision":"b93f9539c9a38107eb0d93b0d149dd25","url":"./categories/学习笔记/index.html"},{"revision":"8dff4d169ad214f780b60d850bb1b777","url":"./categories/工具/index.html"},{"revision":"614d50cc4f8f74396c4cbd09a86e5621","url":"./categories/系统/index.html"},{"revision":"ae0b2f4332439c6d8020c2ad40dea469","url":"./cinema/index.html"},{"revision":"dbcd6306c93910e6aa72028c3dc5dcac","url":"./css/custom/admonition.css"},{"revision":"004cf7c09b2db5c01630cc655756c6c8","url":"./css/custom/weather.css"},{"revision":"94f791823f055fa5be29ba51bf9337d0","url":"./css/index.css"},{"revision":"972762bd01654f6586776bc472ad025b","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6c255214059f591dc93941cb9a828a98","url":"./feed/atom.xml"},{"revision":"f560dc0d70a76fef346f06a0225d83d9","url":"./feed/rss2.xml"},{"revision":"9fcb2bc1357236a3821959af05246ee8","url":"./index.html"},{"revision":"bbb850d3d6e41bf4d19f3841ff702787","url":"./js/custom/animation.js"},{"revision":"a9ebec8d7f484bb522b27835736349fe","url":"./js/custom/screenfull.js"},{"revision":"4cd8b1ba77ae588f79d63d459405db8c","url":"./js/custom/title.js"},{"revision":"f69eddd6a89bebe900ee201a06259182","url":"./js/custom/utils.js"},{"revision":"bb61a5cd98b8da1c89173dc5116165fe","url":"./js/custom/weather.js"},{"revision":"ceca747e131deebc7865b160975434b5","url":"./js/main.js"},{"revision":"0815ca1b46116bf687c5ccc59f9a2c92","url":"./js/runtime/runtime.js"},{"revision":"4ec96643b63f6d8e6045cc5bc052759f","url":"./js/search/algolia.js"},{"revision":"9f31c3c3a9c389b9d3fb828e53cfdfbd","url":"./js/search/local-search.js"},{"revision":"879a08cc2848eab58f3c33c8103f03a4","url":"./js/swiper_init.js"},{"revision":"56373849722f576f4dba2efd9b96e6c7","url":"./js/tw_cn.js"},{"revision":"92a4ff327264fe70ac51bc376a23f5d1","url":"./js/utils.js"},{"revision":"6b57d35de20dbcbb23da61e7edeca26c","url":"./posts/19711/index.html"},{"revision":"431497a94e8ed45316f9d621956eb63c","url":"./posts/21725/index.html"},{"revision":"ab7653bcb603e1e20ccc07e63bc0f053","url":"./posts/33107/index.html"},{"revision":"54b0fd5ee474275851802f834235e891","url":"./posts/33510/index.html"},{"revision":"215668cd1627c99af7957fc804b30413","url":"./posts/33511/index.html"},{"revision":"dc4902350ceed76d1fe2fb51760cd86a","url":"./posts/3603/index.html"},{"revision":"a284ffa3922a1f046406ac862a118493","url":"./posts/50888/index.html"},{"revision":"635889acd7be6ea8420bad32544ae125","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"4004e2226e1f111bb0f7bbb0dd2aa77c","url":"./search.xml"},{"revision":"75f5e477066ff9ace7896d1e9ae1231a","url":"./sitemap/sitemap.xml"},{"revision":"096975633ae2aa935b1afe74f38ef6cf","url":"./tags/Arch-Linux/index.html"},{"revision":"97682bed1e90c51740f9700a69f151a8","url":"./tags/index.html"},{"revision":"9e04f49a9954d62856c77c052d44952f","url":"./tags/JavaScript/index.html"},{"revision":"ff6c20e3738102f51132129d0e58f04d","url":"./tags/Linux/index.html"},{"revision":"b705f0397cee4d93f23183c1704df79f","url":"./tags/Windows/index.html"},{"revision":"65134f34838e30b4c7eeddc7f620a1cb","url":"./tags/双系统/index.html"},{"revision":"23a2ae6d5593c29121b3601415b8098f","url":"./tags/数据结构/index.html"}], {
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
