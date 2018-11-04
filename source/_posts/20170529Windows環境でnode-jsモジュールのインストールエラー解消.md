title: Windows環境でnode.jsモジュールのインストールエラー解消
date: 2017-05-29 00:25:06
tags:
- Node.js
author: hirofumi

---
Windows環境で node.jsのモジュールインストール時にエラーが発生する。

どうやら原因はC++のコンパイルが動作しないことのようで、これを解消していく。

-   [Windowsでnpm installの赤いエラーに悩まされているアナタへ - Mainly Devel Notes](http://overmorrow.hatenablog.com/entry/2015/11/27/235935)
-   [nodejs-guidelines/windows-environment.md at master · Microsoft/nodejs-guidelines](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md)

Microsoftが管理しているNode.jsガイドラインを主に参考に進める。情報の鮮度が大本が管理しているだけに高そう。  
まずは Visual C++ Build Tools をインストールする。  
カスタムインストールから “Windows 8.1 SDK”と”Windows 10 SDK” を選択。  
容量が大体7GBほど使用するらしいが、しょうがない。

また、[Python 2.7](https://www.python.org/downloads/)もインストールする。

しかし今度は下記ののエラーが発生。

`ERROR in Cannot find module 'node-sass'`

これはいつも通り、node-sass の再インストールで解消。  
これで通常運転に移った。  
そこまでやってその存在に気付いたが、下記ののツールを用いるととても簡単そうである。

-   [felixrieseberg/windows-build-tools: Install C++ Build Tools for Windows using npm](https://github.com/felixrieseberg/windows-build-tools)

普通に以下のようにグローバルインストールするだけで、もろもろセッティングを行ってくれるようだ。

```plain
$ npm install -g windows-build-tools
```

近年はMicrosoftもNode.jsへ色々と投資をしているので、少しずつ改善はしているが…もう一歩という印象は残る。