---
layout: post
title: Critical Path CSS#2
date: 2015-11-25 18:37:21
tags:
- CSS
author: hirofumi

---
[Dewy](https://dewy.me/) へクリティカルCSSの最適化を実装した。

色々と下調べを行っていたが、運用コストを図るには運用してみるのが一番だと感じとりあえず小さく始めてみることにした。

サイトはレンダリングにテンプレートエンジンを使用しているため、当初は[penthouse](https://github.com/pocketjoso/penthouse)を使用しようと考えた。  
これはWebページをPhantomJSを用いて解析するもので、手元でレンダリングを実行する必要がなく導入が容易でサイコーだと感じた。

```javascript
penthouse({
    url : 'https://dewy.me/',
    css : path.join(__dirname + '/public/css/main.css'),
    width : 320,
    height : 480,
    timeout: 30000
}, (err, criticalCss) => {
    if (err) console.error(err);

    const clean = new cleanCSS().minify(criticalCss);
    
    fs.writeFile('views/inline/index.html', `<span class="subst">${clean.styles}</span>`);
});
```

これでクリティカルCSSが記述されたhtmlが生成され、これをhead内でインポートしフルCSSは非同期で読み込む。PhantomJSが重いのか少し実行に時間はかかるが、問題なく作動した。  
しかし、内部モジュールのCSSパースの精度がよくないのか正確なクリティカルCSSを吐き出せておらず、ベタに[critical](https://github.com/addyosmani/critical)を使うこととなった。

とりえず一度静的なhtmlへレンダリングを行い、それを解析。それ以外は上記と同じ流れとなる。

criticalの部分は…

```javascript
critical.generate({
    base: 'public/',
    src: 'index.html',
    css: ['public/css/normalize.css', 'public/css/evil-icons.min.css', 'public/css/main.css'],
    width: 320,
    height: 480
}).then(output => {
    const clean = new cleanCSS().minify(output);
    
    fs.writeFile('views/inline/index.html', `<span class="subst">${clean.styles}</span>`);
}).error(err => {
    console.error(err)
});
```

こんな感じ。Promiseで書けるので多少複雑になっていっても視認性はよさそうだ。

PageSpeed Insightsの点は結構上がって気持ちがいいので、しばらくこれで運用して改善点と課題を洗い出したいと思う。