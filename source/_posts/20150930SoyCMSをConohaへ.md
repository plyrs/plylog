title: SoyCMSをConohaへ
date: 2015-09-30 20:23:07
tags:
- SoyCMS
- Conoha
author: hirofumi

---
壊滅状態のNAUTILUSのサイトをそろそろ復活させるべく、重い腰を上げた。

当時ロリポップで運用していたのだが、インフラにこだわりはじめサーバー引っ越しを繰り返す中でいつしかトップページ以外開かないといった状態へと変貌を遂げた。  
というのもXserverへの引っ越しはスムーズに行ったものの、その後のVPSへの移行はハマリどことが多く、面倒になってしまったのだ。

今回復活にあたって参考になったペーシ一覧。

-   [SOY CMS 公式サイト](http://www.soycms.net/)
-   [SOY CMS インストール - KAGOYA Internet Routing](http://support.kagoya.jp/manual/soy/site.html)
-   [SOY CMS フォーラム • トピックの表示 - ミニム　レンタルサーバー動作検証しました](http://www.soycms.org/viewtopic.php?f=6&t=639)
-   [SOY CMS フォーラム • トピックの表示 - 他サイトラベルブロックについて](http://www.soycms.org/viewtopic.php?f=7&t=412)

パーミッションの設定と、一部のPHPモジュールのインストールで現状問題なく動作している様子。

そもそもこのサイトのためだけにApacheとPHPインストールするのもな～と思い、いっそ内部をNodeで書き換えようかとも思ったが、改めて見てみると記事の量も結構多いからそれはそれで遠回りになりそう。