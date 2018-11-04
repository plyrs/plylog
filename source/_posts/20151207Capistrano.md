title: Capistrano
date: 2015-12-07 18:39:09
tags:

author: hirofumi

---
自動デプロイを実現するべく、Capistranoを試している。  
参考記事は以下など。

-   [A remote server automation and deployment tool written in Ruby.](http://capistranorb.com/)
-   [入門 Capistrano 3 ~ 全ての手作業を生まれる前に消し去りたい | GREE Engineers’ Blog](http://labs.gree.jp/blog/2013/12/10084/)

```bash
$ gem install capistrano
$ cap install
```

npm用の拡張も容易されているので、こちらも合わせて確認していく。

-   [capistrano/npm](https://github.com/capistrano/npm/)

```bash
$ gem install capistrano-npm
```

これがうまくいけば、デプロイ時の負荷が大幅に削減される。  
がんがん開発していくためにも、カジュアルにデプロイできる環境を作っていきたい。