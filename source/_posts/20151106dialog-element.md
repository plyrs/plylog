title: dialog-element
date: 2015-11-06 17:32:20
tags:
- HTML
author: hirofumi

---
ダイアログを作っているので、今Dialogエレメントってどうなっているのか調べてみた。

-   [Can I use… Support tables for HTML5, CSS3, etc](http://caniuse.com/#feat=dialog)

相変わらずblink系のみの対応である。

-   [Chrome Canary が dialog 要素に対応、ダイアログボックスの表示が簡単に | WWW WATCH](https://hyper-text.org/archives/2013/09/chrome_dialog_element_support.shtml)
-   [the new code – Native Modal Windows in HTML5: Using the dialog Element](http://thenewcode.com/957/Native-Modal-Windows-in-HTML5-Using-the-dialog-Element?utm_campaign=Front%2BEnd%2BDev%2BWeekly&utm_medium=web&utm_source=Front_End_Dev_Weekly_77)
-   [dialog element demo](http://demo.agektmr.com/dialog/)

具体的な実装方法は上記記事などが参考になり、その利便性もよくわかる。

-   [GoogleChrome/dialog-polyfill: Polyfill for the dialog element](https://github.com/GoogleChrome/dialog-polyfill)

ポリフィルもChromeチーム自ら提供している。

が、やはりせめてもう一つぐらい対応ブラウザが増えないと一生ポリフィルを抜け出せない不安が残る。  
現時点での実践投入はまだ早いかと。