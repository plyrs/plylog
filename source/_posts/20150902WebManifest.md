---
layout: post
title: Web Manifest
date: 2015-09-02 23:45:58
tags:

author: hirofumi

---
## manifest.json

サイトのWebアプリ化を押し進めるためmanifest.jsonを設置。

-   [Manifest for a web application](https://w3c.github.io/manifest/)
-   [App manifest - App Center | MDN](https://developer.mozilla.org/en-US/Apps/Build/Manifest)

MDNにも記事があるし、普段使いのFirefoxでもしっかり動くのだろうか。

-   [Service Worker で作る 最新モバイル ウェブ エクスペリエンス - Google Developers Summit まとめ](http://googledevjp.blogspot.jp/2015/04/service-worker-google-developers-summit.html)

上記はモバイルフレンドリーの目線でWebアプリ化に幅広く言及している記事。

-   [Webアプリをネイティブアプリっぽく起動するWebApp Manifest - Coding Design’s Tumblr](http://moonglows76.tumblr.com/post/102930578463/web%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E3%83%8D%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A3%E3%81%BD%E3%81%8F%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8Bwebapp-manifest)

この記事はさっと読めて、参考になる。

manifest.json  

```json
{
  "name": "Kinlan's Amazing Application ++",
  "short_name": "Kinlan's Amaze App",
  "icons": [{
    "src": "launcher-icon-3x.png",
    "sizes": "144x144",
    "type": "image/png"
  }],
  "start_url": "index.html",
  "display": "standalone"
}
```

これが最低限必要な項目らしい。

index.html  

```html
<link rel="manifest" href="/manifest.json">
```

あとはヘッドで読み込めばオケ。

## インストールバナー

-   [manifest.json でWebアプリを「ホーム画面に追加」自動バナー表示に対応させる](http://qiita.com/tmtysk/items/2c5da83feec45b4ee36f)

これはService Workerを使用した「ホームへ追加」バナーの表示の記事。

```javascript
window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
```

これもインストールバナーについて詳しく解説している記事。

[Increasing engagement with Web App install banners — Google Web Updates](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android)

そしてそのサンプル。

[samples/app-install-banner at gh-pages · GoogleChrome/samples](https://github.com/GoogleChrome/samples/tree/gh-pages/app-install-banner)

Choromeでは問題なく動作し、インストールバナーも表示された。  
ただ一度インストールをしないを選択すると、次回再表示はなさそうなのであまり強力な効果は期待できないかも。

## テーマカラー

theme-colorの設定がmanifest.json内に記述できるようになったよう。

-   [Using the web app manifest to specify a site wide theme colour](https://developers.google.com/web/updates/2015/09/using-manifest-to-set-sitewide-theme-color)

従来のmetaタグだとこう。

```html
<meta name="theme-color" content="#2196F3">
```

manifest.jsonだとこう。

```
"theme_color": "#2196F3"
```

しかしmanifest.jsonのみの記述だとホームへ追加しないと効力を発揮しないようなので、現時点では両方記述したほうがいいかもしれない。

## Firefox

FirefoxでもServiceWorkerをテストする。

`about:config`で`dom.serviceWorkers`を検索し、フラグを`true`へ変更する。

ServiceWorkerは問題なく作動したが、アプリ化の効果は現時点では無さそう。今後に期待したい。