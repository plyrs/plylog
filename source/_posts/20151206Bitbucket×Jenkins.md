---
layout: post
title: Bitbucket × Jenkins
date: 2015-12-06 16:56:25
tags:
- Jenkins
author: hirofumi

---
個人開発用にローカルWindowsへJenkinsをインストールし、Bitbucketのプライベーソリポジトリへプッシュした内容を自動的にClで回してデプロイまでもっていきたい。

Clツールのためにサーバーを用意するほどではなく、課金してCircleCiするほどでもない案件。  
規模が大きくなるとどっかに移行したほうが楽かも。

-   [Welcome to Jenkins CI! | Jenkins CI](http://jenkins-ci.org/)

公式。

-   [JenkinsでCI環境構築チュートリアル (Windows編) - ICS MEDIA](https://ics.media/entry/2410)
-   [Windows7に、一人で使うためのJenkinsを入れてみた - メモ的な思考的な](http://thinkami.hatenablog.com/entry/20121125/1353795880)

インストールからHelloWorldまでは上記が参考になった。

-   [ユーザ作成を含む最低限のセキュリティ設定(Jenkins) - Qiita](http://qiita.com/n_rooms/items/2e1adefcc26d51b4e866)

基本的なセキュリティは、ちょっと古いようだが上記の流れで問題ない様子。

-   [HOOK TURN • WindowsのJenkinsにssh証明書を設定してgitを利用する](http://hookturn.tumblr.com/post/101929615252/windows%E3%81%AEjenkins%E3%81%ABssh%E8%A8%BC%E6%98%8E%E6%9B%B8%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%97%E3%81%A6git%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B)

ユーザー認証。