---
layout: post
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
  font-family: 'MyFontFamily';
  src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'),
       url('myfont-webfont.woff2') format('woff2'),
       url('myfont-webfont.woff') format('woff'),
       url('myfont-webfont.ttf') format('truetype'),
       url('myfont-webfont.svg#svgFontName') format('svg');
}
```

対応ブラウザは以下とされている。

| ブラウザ | バージョン |
|----|----|
| IE | 6+ |
| Firefox | 3.5+ |
| Chrome | 3.5+ |
| Safari | 3+ |
| Opera | 11+ |
| iOS | 3.2+ |
| Android | 2.2+ |

この書式はは2011年に提唱されたもので、2015年ゲイン材のブラウザ情勢からみるとやや冗長に感じる。

よって下記を参考に今回アップデートを図った。

-   [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

```css
@font-face {
  font-family: 'MyFontFamily';
  src: url('myfont-webfont.woff2') format('woff2'),
       url('myfont-webfont.woff') format('woff'),
       url('myfont-webfont.ttf')  format('truetype');
}
```

eotとsvgを削除した。この変更後の対応ブラウザは以下である。

| ブラウザ | バージョン |
|----|----|
| IE | 9+ |
| Firefox | 3.5+ |
| Chrome | 3.5+ |
| Safari | 3+ |
| Opera | 11+ |
| iOS | 4.3+ |
| Android | 2.2+ |

IE9からはWoffに対応しているので、もう少し時間がたてばTTFも消せるのでは。  
Woff2の普及は[まだまだこれから](http://caniuse.com/#feat=woff2)といったところだ。
