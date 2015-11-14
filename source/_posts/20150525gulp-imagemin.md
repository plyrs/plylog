title: gulp-imagemin
date: 2015-05-25 20:28:08
tags:
---

gulp-imageminで画像の最適化を突き詰める。

[sindresorhus/gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

## 標準API

- gifsicle
- jpegtran
- optipng
- svgo

gif、jpeg、png、svgと主要なフォーマットは標準搭載されているので、導入後すぐに試すことができる。


## 拡張モジュール

- [webp](https://github.com/imagemin/imagemin-webp)
- [advpng](https://github.com/imagemin/imagemin-advpng)
- [pngquant](https://github.com/imagemin/imagemin-pngquant)
- [pngout](https://github.com/imagemin/imagemin-pngout)
- [pngcrush](https://github.com/imagemin/imagemin-pngcrush)
- [mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)
- [jpegoptim](https://github.com/imagemin/imagemin-jpegoptim)

拡張モジュールを用いることも可能。
webpなども最適化することができる。
全てを試してはいないが、pngquantやmozjpegは標準搭載のそれよりも圧縮効率がいい。

ただ、モジュールがでかくてインストールに時間がかかる。
各プロジェクトにこれを導入していくと、なぜか申し訳ない気持ちになってくる。