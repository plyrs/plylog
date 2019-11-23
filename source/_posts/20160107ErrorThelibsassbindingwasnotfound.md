---
layout: post
title: "Error: The `libsass` binding was not found"
date: 2016-01-07 19:03:20
tags:
  - Node.js
author: hirofumi
---

Gulp で Sass のコンパイル実行時にエラーが出た。

```bash
Error: The libsass binding was not found in /node_modules\node-sass\vendor\win32-x64-47\binding.node
```

node-sass 内を除いてみると vendor フォルダが存在しない。  
解決策は下記 issue で見つけた。

- [node 4.0.0 - Error: The libsass binding was not found in /node_modules/gulp-sass/node_modules/node-sass/vendor/darwin-x64-14/binding.node · Issue #1162 · sass/node-sass](https://github.com/sass/node-sass/issues/1162)

‘npm rebuild node-sass\` を実行するとモジュールが再構築され、vendor が配置された。

node-sass はちょくちょく問題を起こす。
