title: CSS font-familyをアップデート
date: 2015-10-06 01:38:22
tags:
- CSS
author: hirofumi

---
CSS font-familyの記述をアップデートした。

これまでは以下のように指定していた。

```css
body {
  font-family: Verdana, Arial, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;}
```

昔どこかで見た記事やソースを参考にたどり着いたと記憶しているが、Windows10へ移行したこともありフォント回りも同様に更新していこうと思う。

-   [Font−familyのベストな書き方 2015年版 | それからデザイン スタッフブログ](http://sole-color-blog.com/blog/design/246/)

上記記事は非常によく考察されており信頼たる内容だと感じたので、これをベースに以下のように設定した。

```css
body {  font-family: Avenir, "Open Sans", "Helvetica Neue", Helvetica, Arial, Verdana, Roboto, "游ゴシック", "Yu Gothic", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Meiryo UI", "メイリオ", Meiryo, sans-serif;}
```

MSPゴシックだけはさすがに不要だと思い外させていただいた。  
とりあえずこれで様子を見ていこうと思う。