---
layout: post
title: npm-check-updates
date: 2015-06-11 20:36:08
tags:
- npm
author: hirofumi

---
[npm-check-updates](https://github.com/tjunnone/npm-check-updates)が便利という発見。

モジュールのリリース情報を確認して、必要ならば更新というくだりは難儀。  
`npm outdated`してpackage.jsonを書き換えて`npm install`を行うのが通常の流れであるが、回数を重ねるとこれを行うのがおっくうになってくる。

npm-check-updatesはこのへんの手間を省いてくれる。

今回はコマンドが短くてよりよさげな開発版をインストール。

```coffeescript
npm install -g npm-check-updates@unstable
```

これで更新確認から実行まで3ステップで行える。

```shell
# 更新を確認
$ ncu# package.jsonを更新$ ncu -u

# 更新を実行
$ npm install
```

フロント開発でgulpを使用していると割と頻繁にupdateする必要がある。

マイナーバージョンアップであればあまり後先考えずガンガン上げていきたい性分なので、その作業の簡略化ができ素晴らしい。