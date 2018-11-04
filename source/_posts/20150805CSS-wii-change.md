title: CSS wii-change
date: 2015-08-05 20:37:01
tags:
- CSS
author: hirofumi

---
CSS will-changeプロパティについての記事を読んだので早速試験中。

-   [CSS will-changeプロパティについて知っておくべきこと](https://dev.opera.com/articles/ja/css-will-change-property/)

```css
will-change: transform;
```

簡単に言えば`translate3ds`などのハックでGPUアクセレーションを有効化していたけど、それ以外の適切な手法でブラウザさんに最適化していただこうというものらしい。

ちょっと試してみてもあまり違いはわからなかったが、重い描画や低スペックマシンだと違いがでてくるのかも。  
何より最適化の意図を明確にすることができるので、設計に盛り込みやすい。

-   [Can I use… Support tables for HTML5, CSS3, etc](http://caniuse.com/#feat=will-change)

しかし現時点でSafariの実装はまだまだなので、しばらくは従来通り`translate3ds`を使うか、併用していくのがよさそう。

その他参考記事

-   [will-change - CSS | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/will-change)
-   [will-change | CSS-Tricks](https://css-tricks.com/almanac/properties/w/will-change/)
-   [CSS Will Change Module Level 1 日本語訳](http://www.hcn.zaq.ne.jp/___/WEB/css-will-change-ja.html)