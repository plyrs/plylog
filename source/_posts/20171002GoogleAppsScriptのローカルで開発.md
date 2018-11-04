---
layout: post
title: GoogleAppsScriptのローカルで開発
date: 2017-10-02 01:07:47
tags:

author: hirofumi

---
業務上の定期的な通知に、GoogleAppsScriptを使用してChat Work APIを叩くというのを利用している。

しかし、GoogleAppsScriptのコード管理は原則ブラウザ上で行う形となるので、なかなかバージョン管理も難儀で不都合も生じる。  
よって、ローカルで開発・修正し、アップロードし実行という環境を構築するべく、`node-google-apps-script`を導入した。  
その際の参考は以下の記事。

-   [danthareja/node-google-apps-script: The easiest way to develop Google Apps Script projects](https://github.com/danthareja/node-google-apps-script)
-   [Google Apps Scriptをローカルで開発する - Qiita](https://qiita.com/ttyokoyama/items/a4edfdcfcad56d664522)
-   [gapps を使って Google Apps Script を継続的にデプロイする - kakakakakku blog](http://kakakakakku.hatenablog.com/entry/2017/02/26/034115)

結果コードの編集と `gapps upload` コマンドを繰り返すだけで反映が可能となった。  
GoogleAppScriptはアイデア次第でかなり有用なので、容易に導入できるよう開発環境も整備して行きたい。