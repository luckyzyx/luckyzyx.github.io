/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "165ea9ceb51447b15b3389d73e41c2d3"
  },
  {
    "url": "About.html",
    "revision": "93b375b58c22f374080de6a03a92617c"
  },
  {
    "url": "assets/css/0.styles.5fca9aa4.css",
    "revision": "465e6d77c0f7372a6c950e5285de4c64"
  },
  {
    "url": "assets/feiji.jpg",
    "revision": "eefebf808830161e228a39ff864a6151"
  },
  {
    "url": "assets/images/icons/icon-128x128.png",
    "revision": "fcc8b5b373356d377928bb304a6b4a35"
  },
  {
    "url": "assets/images/icons/icon-144x144.png",
    "revision": "15f070dc5eb2f362d31d416814ed9f6d"
  },
  {
    "url": "assets/images/icons/icon-152x152.png",
    "revision": "0b6d73773bea27160b5ed8f2fd46a7e7"
  },
  {
    "url": "assets/images/icons/icon-192x192.png",
    "revision": "c29cf521d7f0b5fd812b756b6b37ef7f"
  },
  {
    "url": "assets/images/icons/icon-384x384.png",
    "revision": "6a24ab93135ad9c4357723ce1a026d43"
  },
  {
    "url": "assets/images/icons/icon-512x512.png",
    "revision": "6a24ab93135ad9c4357723ce1a026d43"
  },
  {
    "url": "assets/images/icons/icon-72x72.png",
    "revision": "21d740f6015dbb2202e555d0d9d8cf13"
  },
  {
    "url": "assets/images/icons/icon-96x96.png",
    "revision": "d609faebd05e1cab64abf55c4f42a158"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f2c71738.js",
    "revision": "39f7655ab262a989335dc090883b5a94"
  },
  {
    "url": "assets/js/11.b29674bb.js",
    "revision": "6f41e35d33967429c7a3f57260d83138"
  },
  {
    "url": "assets/js/12.2d6a20f9.js",
    "revision": "9419116e54d0ef6ff818c3241ee8a30e"
  },
  {
    "url": "assets/js/13.d14b7dab.js",
    "revision": "a12352a195b6849037b57f57e4fbc3e9"
  },
  {
    "url": "assets/js/14.5927d8db.js",
    "revision": "13b81938c1111d2857e420af6394e3e6"
  },
  {
    "url": "assets/js/15.286421f3.js",
    "revision": "ab37acc2a389591fe6b44efeb7cbeede"
  },
  {
    "url": "assets/js/16.91b9b032.js",
    "revision": "455489f16ff53c545706b0a92056f50b"
  },
  {
    "url": "assets/js/17.a785eb4c.js",
    "revision": "16bafbe07af98969aeb3015766383ba0"
  },
  {
    "url": "assets/js/18.b4aea835.js",
    "revision": "7ede8c3eb5486a5891f56e85b346baac"
  },
  {
    "url": "assets/js/19.41b41ca3.js",
    "revision": "5ccaea3b70516e7527d29b76c0e5a1e2"
  },
  {
    "url": "assets/js/20.f59208e8.js",
    "revision": "9b122e09c0892c4217322790dd5897ce"
  },
  {
    "url": "assets/js/21.5e16dcef.js",
    "revision": "baa4517bc3f7ae67ee2e0b62064f77d7"
  },
  {
    "url": "assets/js/22.b166c990.js",
    "revision": "ea6ab69607070471d3eaba3590472eb5"
  },
  {
    "url": "assets/js/23.44246a43.js",
    "revision": "1220fb1c7689641ecb23c026f4c4637c"
  },
  {
    "url": "assets/js/24.f9e3bd73.js",
    "revision": "3ebe0057b8b49d6c342b5852f1ca5c03"
  },
  {
    "url": "assets/js/25.272387b1.js",
    "revision": "cf57bfcdd1f936c732fd0f9cc4a0588e"
  },
  {
    "url": "assets/js/26.598f0c60.js",
    "revision": "bbeec93e52e77eeaa0929103882be03c"
  },
  {
    "url": "assets/js/3.8345a168.js",
    "revision": "4b3d9d0674e644abce3068f8b8b48f5f"
  },
  {
    "url": "assets/js/4.7a2d711b.js",
    "revision": "e8db95bd619b5a970958df4710828009"
  },
  {
    "url": "assets/js/5.fbce7ef7.js",
    "revision": "179500b47c483e5e10cd0ed307ef63c6"
  },
  {
    "url": "assets/js/6.371ba41a.js",
    "revision": "d9358b857f41030ff81452a98cc71bb7"
  },
  {
    "url": "assets/js/7.2110341b.js",
    "revision": "719616174cad37751082a499a74a51e5"
  },
  {
    "url": "assets/js/8.4f4f689d.js",
    "revision": "98b3d7e616f2f89089de39e8ccec8fd0"
  },
  {
    "url": "assets/js/9.ff53785a.js",
    "revision": "3b40dc92f1639f6ae6ed83db803af358"
  },
  {
    "url": "assets/js/app.ddb80d88.js",
    "revision": "a25139ca8d17d1ea6af7325e80673fcc"
  },
  {
    "url": "assets/js/vendors~docsearch.1a49833f.js",
    "revision": "6055c0fa0ea7c4230d28d615d5525f47"
  },
  {
    "url": "assets/logo.jpg",
    "revision": "9599a4cdcefdd3185148e4161cdc7b0d"
  },
  {
    "url": "assets/mr.jpg",
    "revision": "907321afe28d179792605d9b2b94c49f"
  },
  {
    "url": "blog/1.html",
    "revision": "46d7207f0a46f923a7a05da57ff74e06"
  },
  {
    "url": "blog/index.html",
    "revision": "68fa1dbfcee7d2381348876d574a8c2e"
  },
  {
    "url": "index.html",
    "revision": "4fd464e31bf532e3f86f321cb8abc820"
  },
  {
    "url": "study/markdown/1.html",
    "revision": "1d1468a9e69378c8fcac798f0208560a"
  },
  {
    "url": "study/markdown/2.html",
    "revision": "6bc4712cd3bbd8ebb8f698ec8aca8cf4"
  },
  {
    "url": "study/markdown/index.html",
    "revision": "5ba88d33732c9e749e9a3aad4e343b74"
  },
  {
    "url": "study/READMD.html",
    "revision": "904596e78064cf3487818d571c96761c"
  },
  {
    "url": "study/vuepress/1.html",
    "revision": "821751ddff7e095f226a84d9ef66658a"
  },
  {
    "url": "study/vuepress/2.html",
    "revision": "159df2d8593818dda97dd3f99046e615"
  },
  {
    "url": "study/vuepress/3.html",
    "revision": "8c2bca0b87db5a21b98fa29087ab549b"
  },
  {
    "url": "study/vuepress/4.html",
    "revision": "4e07695d7261d5b385cc84bbdcbf3904"
  },
  {
    "url": "study/vuepress/5.html",
    "revision": "334eb6953dfb3978fe91b408f00c2b2c"
  },
  {
    "url": "study/vuepress/index.html",
    "revision": "ec0eaa2ecf17be9c6e67b8a3f3aac43e"
  },
  {
    "url": "wenyan/index.html",
    "revision": "de07ee58ba6fd82b3bbf70d9b2b7c674"
  },
  {
    "url": "wenyan/qx.html",
    "revision": "074817521b23ecc6646f2139ce28a2c1"
  },
  {
    "url": "wenyan/ss.html",
    "revision": "f7cbfdf22a4d009f0d6d3755d6ea1349"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
