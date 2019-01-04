---
layout: post
title: assets-webpack-plugin
date: 2016-02-06 19:22:23
tags:
- Node.js
author: hirofumi

---
Webpackでビルドした成果物のキャッシュバストを自動化したいので、assets-webpack-plugin を導入した。

-   [sporto/assets-webpack-plugin: Webpack plugin that emits a json file with assets paths](https://github.com/sporto/assets-webpack-plugin)

サンプル通り行うと`[name]-bundle-[hash].js` というネーミングでファイルが生成される。  
これでももちろん問題はないのだが、なんとなく今までの慣例でファイル名の後ろにパラメータを付与した方法をとりたい。

そこでoutput の設定を以下のようにした。

```js
output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[name].chunk.js?[hash]'
},
```

これで成果物のファイル名は通常のままで、同時に排出される assets.json へクエリを付与したフルパスが記述される。