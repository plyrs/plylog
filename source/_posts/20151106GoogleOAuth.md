---
layout: post
title: Google OAuth
date: 2015-11-06 22:39:20
tags:
- Node.js
author: hirofumi

---
[Dewy](https://jp.dewy.me/)へGoogleアカウントによるログイン機能を実装した。  
これまで通り[simov/grant](https://github.com/simov/grant)を利用したので、基本的に流れはFacebookやTwitterのときと同じであった。

-   [Google OAuth 2.0 を使い、Web アプリケーションに認証機能を追加する - komiyakの通り道](http://d.hatena.ne.jp/komiyak/20141103/1415016929)

アクセストークンの取得などには上記記事が参考になった。記事が少し古く、現在のUIとやや違う部分はあったが、問題はなかった。  
また、Twitterと比べ項目が多く、Facebookと違ってしっかり日本語で表示れてるので色々見ていて楽しい。今回はGoogle+のAPIを触るのみでありが、機会があれば他にも試してみたくなる。