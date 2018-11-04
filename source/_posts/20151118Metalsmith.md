---
layout: post
title: Metalsmith
date: 2015-11-18 18:33:49
tags:
- Node.js
author: hirofumi

---
ブログではない、静的なサイトをビルドするにあたって、Metalsmithがよさげなので使ってみた。

-   [Metalsmith](http://www.metalsmith.io/)

公式は上記。  
最近は勢いが乏しいらしく、現時点では非推奨のモジュールが公式のサンプルにで使われている。  
が、メンテは継続されているようだしエコシステムもほぼ仕上がっているようなので、通常導入する分には問題はなさそう。

-   [static\_site\_generator - Metalsmith(静的サイトジェネレーター)の導入 - Qiita](http://qiita.com/maruloop/items/4c9ab4135ff1f3689d2a)

上記記事を参考にとりあえずビルドまでもっていく。`metalsmith-templates`は非推奨となり、[metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts)と[metalsmith-in-place](https://github.com/superwolff/metalsmith-in-place)へ分離したらしいが、今回は気にせず使用していく。テンプレートエンジンはNunjucksへ変えた。

また、`metalsmith.json`に設定を書いていくやりかたは個人的にあまり気持ちのいい方法ではないので、jsでビルドする方法を選択した。

```javascript
'use strict';
const Metalsmith = require('metalsmith');const collections = require('metalsmith-collections');const markdown = require('metalsmith-markdown');const permalinks = require('metalsmith-permalinks');const templates = require('metalsmith-templates');const metalsmith = new Metalsmith(__dirname)    .use(collections({posts: {pattern: "posts/*.md"}}))    .use(markdown())    .use(permalinks({pattern: ':title'}))    .use(templates('nunjucks'))    .build(err => {        if (err) throw err;});
```

これだけで今回ほしい部分は大体動く。  
柔軟性が高いようなので、ブログでなければMetalsmithのほうが楽に作れると感じた。

-   [Creating static sites with Metalsmith](http://www.petermorlion.com/creating-static-sites-with-metalsmith/)