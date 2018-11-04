---
layout: post
title: VanillaなDropdown
date: 2015-10-30 16:08:49
tags:
- JavaScript
author: hirofumi

---
バニラなドロップダウンメニューを作成中。  
まぁ単純にクラスの追加・削除を制御すればいいのだが、一応参考資料を探す。  
がやはり、jQueryを用いたものは多数見つかるのに対し、バニラは希少である。

今回参考になったのは以下の二つ。

-   [Javascript Drop Down Menu](http://siongui.github.io/2015/02/13/javascript-dropdown-menu/)
-   [CodePen - A Pen by Brenden Palmer](http://s.codepen.io/brenden/debug/mJyEBg)

表示の制御はCSSで行い、アクティブ時のオーバービューエフェクトは無し。メニュー外のクリックの際に閉じるよう`document`にもイベントを追加。  
あとは最適なアニメーションを考慮すればよさそう。