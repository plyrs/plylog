title: Update @font-face
date: 2015-10-06 20:34:51
tags:
- CSS
author: hirofumi

---
cssの@font-faceのフォーマットをアップデートした。

これまでは[Fontspring @Font-Face Syntax](http://blog.fontspring.com/2011/02/the-new-bulletproof-font-face-syntax/)に従い以下のように記述していた。

```css
@font-face {
  font-family: 'MyFontFamily';  src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'),        url('myfont-webfont.woff2') format('woff2'),        url('myfont-webfont.woff') format('woff'),        url('myfont-webfont.ttf')  format('truetype'),       url('myfont-webfont.svg#svgFontName') format('svg');}
```

対応ブラウザは以下とされている。

IE

Firefox

Chrome

Safari

Opera

iOS

Android

6+

3.5+

3.5+

3+

11+

3.2+

2.2+

この書式はは2011年に提唱されたもので、2015年ゲイン材のブラウザ情勢からみるとやや冗長に感じる。

よって下記を参考に今回アップデートを図った。

-   [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

```css
@font-face {  font-family: 'MyFontFamily';  src: url('myfont-webfont.woff2') format('woff2'),       url('myfont-webfont.woff') format('woff'),        url('myfont-webfont.ttf')  format('truetype');}
```

eotとsvgを削除した。この変更後の対応ブラウザは以下である。

IE

Firefox

Chrome

Safari

Opera

iOS

Android

9+

3.5+

3.5+

3+

10.1+

4.3+

2.2+

IE9からはWoffに対応しているので、もう少し時間がたてばTTFも消せるのでは。  
Woff2の普及は[まだまだこれから](http://caniuse.com/#feat=woff2)といったところだ。