title: node-redis入門
date: 2015-05-17 20:07:18
tags:
- Node.js
- Redis
- Koa
author: hirofumi

---
Redisの修行を進めている。  
Nodeアプリ内で使う分には下記を参考に学習を進めていけばいい様子。

-   [http://redis.io/](http://redis.io/)
-   [mranney/node\_redis](https://github.com/mranney/node_redis)
-   [node-redis - node.js redisクライアント](http://nodejs.osser.jp/node/node-redis/)
-   [node.jsでRedisを使ってみる【準備編】](http://yutapon.hatenablog.com/entry/2013/07/07/011645)

やはりセッション管理などはRedisで行いたい。  
Koaでは[koa-redis](https://github.com/koajs/koa-redis)を使えば容易に実装できた。

よりRedisをよりアプリケーションの広範囲で活用する際は下記で理解を深めるとよさそう。

-   [入門 : Redis のデータ構造と概念 — Redis Documentation (Japanese Translation)](http://redis-documentasion-japanese.readthedocs.org/ja/latest/topics/data-types-intro.html)