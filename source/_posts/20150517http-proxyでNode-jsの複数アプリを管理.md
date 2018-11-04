title: http-proxyでNode.jsの複数アプリを管理
date: 2015-05-17 20:00:15
tags:
- Node.js
author: hirofumi

---
一つのドメインで複数のnodeアプリを起動させたい。

http-proxy使えばできそうである。

> [nodejitsu/node-http-proxy](https://github.com/nodejitsu/node-http-proxy)

## 参考

> [Hosting multiple Express (node.js) apps on port 80](http://nerdpress.org/2012/04/20/hosting-multiple-express-node-js-apps-on-port-80/)  
> [http-proxyでプロキシAdd Star](http://d.hatena.ne.jp/sasaplus1/20130124/1358992547)

別モジュールを利用しているが、PM2のくだりが参考になりそう。

> [bouncyを使ったNodejsのみのバーチャルホスト](http://qiita.com/59naga/items/d3082516c2a365b47985)