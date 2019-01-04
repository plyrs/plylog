---
layout: post
title: Error: The `libsass` binding was not found
date: 2016-01-07 19:03:20
tags:
- Node.js
author: hirofumi

---
GulpでSassのコンパイル実行時にエラーが出た。

```bash
Error: The libsass binding was not found in /node_modules\node-sass\vendor\win32-x64-47\binding.node
```

node-sass内を除いてみるとvendorフォルダが存在しない。  
解決策は下記issueで見つけた。

-   [node 4.0.0 - Error: The libsass binding was not found in /node\_modules/gulp-sass/node\_modules/node-sass/vendor/darwin-x64-14/binding.node · Issue #1162 · sass/node-sass](https://github.com/sass/node-sass/issues/1162)

‘npm rebuild node-sass\` を実行するとモジュールが再構築され、vendorが配置された。

node-sassはちょくちょく問題を起こす。