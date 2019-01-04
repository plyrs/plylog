---
layout: post
title: Github Pagesで独自ドメインを利用したサイトをHTTPS化
date: 2018-04-25 01:24:47
tags:
- Github
author: hirofumi

---
このブログは Github pages 上で独自ドメインを利用して構築されている。  
今回ここの HTTPS化を実施した。

参考：  
[Securing your GitHub Pages site with HTTPS - User Documentation](https://help.github.com/articles/securing-your-github-pages-site-with-https/)

いつのまにか独自ドメインのを利用したページも Let’s Encrypt を使用したSSL発行が行われていたようで、HTTPS化を強制することで完了した。  
詳しい方法は上記リンクを参照したが、特に混在コンテンツの問題もなくスムーズに移行できた。

独自ドメインの Github Pages のHTTPS化は、少し前までは CloudFlare を利用するのが常套句であったが、今回Github内のみで解決できハードルが相当下がった印象だ。

CloudFlare を挟むくらいなら自前のサーバーに上げSSL化した方がいいと感じていたが、今後は逆に、積極的にGithub上へ移行させたくなった。