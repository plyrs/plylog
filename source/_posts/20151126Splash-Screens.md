---
layout: post
title: Splash-Screens
date: 2015-11-26 16:19:33
tags:
- WebApp
author: hirofumi

---
仕様を見ているとスプラッシュイメージの項目があったので、manifest.jsonをアップデートしてみた。  
もちろん、現段階で対応しているブラウザは無い。  
しかし、Android版 Google Chromeはアイコンをスプラッシュイメージ的に出すようになっているので、今後この機能も有効化されるであろう。

```js
{
  "name": "Kinlan's Amazing Application ++",  "short_name": "Kinlan's Amaze App",  "icons": [    {      "src": "launcher-icon-3x.png",      "sizes": "144x144",      "type": "image/png"    } ], "splash_screens": [{    "src": "splash/lowres",    "sizes": "320x240"  }, {    "src": "splash/hd_small",    "sizes": "1334x750"  }, {    "src": "splash/hd_hi",    "sizes": "1920x1080",    "density": 3  }],  "start_url": "index.html",  "display": "standalone"}
```

ちなみに我らがFirefoxはOpen Web Appsなるものを提唱している。

-   [Open Web Apps を始めよう – なぜ、そしてどのように | Mozilla Developer Street (modest)](https://dev.mozilla.jp/2013/03/getting-started-with-open-web-apps-why-and-how/)

Application Cacheなど、現在では非推奨となっている手法の紹介も含まれているが、Open Web Appへの誘いとして分かりやすい記事。

Open Web Appをホスト型とパッケージ型の2つへ分類し、それぞれのメリデメリを紹介。

-   [アプリマニフェスト - アプリセンター | MDN](https://developer.mozilla.org/ja/Apps/Manifest)

manifest.webappの詳細

-   [Open Web Apps と Web 標準 | MDN](https://developer.mozilla.org/ja/docs/Open_Web_apps_and_Web_standards)
-   [アプリテンプレートの使用 - アプリセンター | MDN](https://developer.mozilla.org/ja/Apps/App_templates)