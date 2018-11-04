---
layout: post
title: GrantからPassportへ
date: 2016-01-10 19:04:59
tags:
- Node.js
- Koa
author: hirofumi

---
Oauth認証に[Grant](https://github.com/simov/grant)を使用していた。  
採用していた理由はどちらでも必要要件を満たせるし、ならばちょっと違ったものをという理由であった。

しかしKoa2.0へのアップデートを機にベタに[Passport](http://www.passportjs.org/)をラップした[koa-passport](https://github.com/rkusa/koa-passport)へ入れ替えることにした。  
現状のGrantではKoa2.0へ対応させることができず、プルリクを出してもいいのだがkoa-passportの2.0への対応が非常に迅速であり、やはり広くコミュニティに受け入れられているモジュールを使用するほうが長い目で見ても良さそうだと感じたので。

また、Grantは単体で様々なサービスに対応しているが、Passportは個別で追加が必要となる。やはりこのほうが現代的なアプローチでメンテもしやすいであろう。