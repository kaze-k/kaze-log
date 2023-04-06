const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: 'kaze-log',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"3b3256ebcbbcef61ecac4d115d897912","url":"./404.html"},{"revision":"0c0ac733ca0df3559f0b4d6bc4808eed","url":"./archives/2023/03/index.html"},{"revision":"76bf2d183fc155468a510523224d4c2c","url":"./archives/2023/04/index.html"},{"revision":"e0a71dde099527f32d40b943a3d5177f","url":"./archives/2023/index.html"},{"revision":"649e9853aae4b13352dd478abeaeeea9","url":"./archives/index.html"},{"revision":"3fef1972fbadcfecc3e45e71d6957dd7","url":"./bangumis/index.html"},{"revision":"9bddd4078dcf8ddf69f0547caec560a1","url":"./bing.json"},{"revision":"99a57b09f604e502e2841b168a8a1626","url":"./categories/index.html"},{"revision":"6de24c623396fe2e8a11370ff3a1d8fb","url":"./categories/学习/index.html"},{"revision":"32a3ded396b03feb47e7b24f5c9bef11","url":"./categories/系统/index.html"},{"revision":"84deca760e7555d788cc5590d8fd7ef1","url":"./categories/项目管理/index.html"},{"revision":"81fe25b82116778ded13d65161db5305","url":"./cinema/index.html"},{"revision":"1ab39c590c2f411c59077fa0d2842b57","url":"./css/index.css"},{"revision":"f1c442afb181c5d2f9d01d0bb711a727","url":"./css/runtime/runtime.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9767e17caf820fad2b39a1ccc832b21d","url":"./feed/atom.xml"},{"revision":"15e236742616a874ac86e410ce912e53","url":"./feed/rss2.xml"},{"revision":"b19455f08a9370c517b8b9bd3cbd432f","url":"./index.html"},{"revision":"37ea4552f6d5a1baecfbe23d9caed673","url":"./js/custom/animation.js"},{"revision":"c2bce5a677585d1d8c7777439d6d6c60","url":"./js/custom/title.js"},{"revision":"19178af542654ff076e5a64ba5b5619b","url":"./js/custom/weather.js"},{"revision":"0fa555adf3fa73065411da699913ba58","url":"./js/main.js"},{"revision":"87bdfd24f41232324ac540bde0b3fc24","url":"./js/runtime/runtime.js"},{"revision":"6721ecf8e59985bc818ea44a2500e31a","url":"./js/search/algolia.js"},{"revision":"06e1c757562bbd569bc2eacf8ef91192","url":"./js/search/local-search.js"},{"revision":"229ecc03251689383d53e779e066b588","url":"./js/tw_cn.js"},{"revision":"7fec618b2bcd3bee332037808012e610","url":"./js/utils.js"},{"revision":"13ced38f87c6452a3f4206f40dc717ef","url":"./posts/19711/index.html"},{"revision":"21653909646fefad62876af7bed40e97","url":"./posts/21725/index.html"},{"revision":"7a7eeca7f065485dc493f61bbcfeb8b2","url":"./posts/33107/index.html"},{"revision":"7bc79e49a407ba26ab91b4a0a538aa10","url":"./posts/33510/index.html"},{"revision":"5162d61106f33b79c3ce55324a928e6b","url":"./posts/33511/index.html"},{"revision":"353fc957f2916c1dc91e87493c8367df","url":"./posts/3603/index.html"},{"revision":"836a75a0d34107b655e70c0824482e31","url":"./posts/50888/index.html"},{"revision":"4c3b129b2678285db377bcaa30d995e7","url":"./posts/61844/index.html"},{"revision":"435b56adfb6f4e711022266ea62599ae","url":"./pwa/manifest.json"},{"revision":"d8e6eb3a578ad1f7321dc135369d87d5","url":"./search.xml"},{"revision":"37be1b6032fa0910b32504792100796d","url":"./sitemap/sitemap.xml"},{"revision":"58c02c6bb53e6eed9f0a4097e94e1dcf","url":"./tags/Arch-Linux/index.html"},{"revision":"7c8bbeafb3eda7d8bbd662d6996f4554","url":"./tags/index.html"},{"revision":"1189978cc15cf11f51507258fe3404a1","url":"./tags/Javascript/index.html"},{"revision":"ec0368f2398794e668b3474e6219b259","url":"./tags/Linux/index.html"},{"revision":"537f61b77bf6e8b7f209943432e54048","url":"./tags/Windows/index.html"},{"revision":"03c9145ee0539b040e58ff8b53972602","url":"./tags/双系统/index.html"},{"revision":"a134a33366ce181c266df97639c5dc21","url":"./tags/工具/index.html"},{"revision":"4263558c1c056563df5d9243171592e0","url":"./tags/数据结构/index.html"}], {
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
