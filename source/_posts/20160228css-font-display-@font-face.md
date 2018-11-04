title: css font-display @font-face
date: 2016-02-28 19:40:43
tags:
- CSS
author: hirofumi

---
Firfox の開発版で css font-display がフラグ付きで有効になったようなので試してみた。

-   [CSS Font Rendering Controls Module Level 1](https://tabatkins.github.io/specs/css-font-display/)

まずはフラグを有効にする。

FIrefox のアドレス欄へ`about:config`と入力し、設定画面を開く。  
そこで`layout.css.font-display.enabled`を検索し、値を`true`へ。これで機能が有効となる。

Chrome の開発版ではすでに導入されているらしく、下記記事が非常に参考になった。

-   [@font-face(CSS)のfont-displayプロパティがChrome Canaryに来た – 阿Q論](https://blog.srytk.com/aquei/50.html)

やはりFOUTをネイティブの機能で解決することが期待されるよう。  
今までは主に Web Font Loader を導入したり、 あと Adobe Blank なんてのもあった気が…。  
とにかく涙ぐむしい努力をしてきたので人類にとって、これは待望の機能かなと。

-   [1157064 – experimental implementation of font-display CSS @font-face descriptor](https://bugzilla.mozilla.org/show_bug.cgi?id=1157064)

現時点での実装はスペックの推奨通りでクロームと同様のよう。  
設定値は`fallback`がベストで、妥協して`block`といった感じだろうか。パフォーマンスとユーザビリティの両方にバランスよく配慮できそうである。

```css
@font-face {
    font-family: 'Waiting for the Sunrise';    font-style: normal;    font-weight: 400;    font-display: fallback;    src: local('Waiting for the Sunrise'), local('WaitingfortheSunrise'),        url('../fonts/waiting-for-the-sunrise-v7-latin-regular.woff2') format('woff2'),        url('../fonts/waiting-for-the-sunrise-v7-latin-regular.woff') format('woff'),        url('../fonts/waiting-for-the-sunrise-v7-latin-regular.ttf') format('truetype');}
```

その他の値も少しの違いながら明確に用途がわかれそうなので、なかなかよくできている感じ。  
`will-change`のように必要そうな部分へは先行導入しておき、ブラウザの対応を待ってもいいかと。