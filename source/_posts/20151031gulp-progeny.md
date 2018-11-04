title: gulp-progeny
date: 2015-10-31 21:17:26
tags:
- Node.js
author: hirofumi

---
SassをGulp経由でWathする際に、差分ビルドを有効にするためgulp-cachedをかますのだが、そうすると@importなどで読み込んでいるファイルを更新しても読み込み元のビルドは動作しない。

これを上手く解決する方法はないかと調べたら以下の記事を見つけた。

-   [gulpを使ってsassの@importを解決しつつ差分ビルドをする - Qiita](http://qiita.com/joe-re/items/542b3f6fdc577cf50509)

なるほど！依存元を辿り解決を図ればいいとのこと。

これに特化したgulpモジュールがあると楽チンやんーと再調査を行うと、gulp-progenyなるものを発見。

-   [HerringtonDarkholme/gulp-progeny](https://github.com/HerringtonDarkholme/gulp-progeny)

まさに依存関係を解決してくれるよう。

```js
const cache = require('gulp-cached');
const progeny = require('gulp-progeny');const sass = require('gulp-sass');gulp.task('sass', () => {  return gulp.src('*.scss')    .pipe(cache('style'))    .pipe(progeny())    .pipe(sass())});
```

これでSass内でインポートしているファイルの更新も監視対象となり、ビルドが走るようになった。