title: Noto Sans CJK
date: 2015-11-14 18:30:29
tags:

author: hirofumi

---
今作成しているHEXOテーマにNoto Sans CJKの導入を試みている。

-   [Noto Sans CJK – Google Noto Fonts](https://www.google.com/get/noto/help/cjk/)

日本語など漢字を含む書体は容量の問題があるので、常用漢字にしぼったサブセット化を行ったほうがよさそう。

-   [Noto SansをWeb font化しようとした時にハマった話 - Qiita](http://qiita.com/taka4sato/items/dba258d17d68500081f5)
-   [font - Noto Sans CJK JP フォントをダウンロードしてサイトに適用する手順 - Qiita](http://qiita.com/nowri/items/1c69b9b25f2958bd9f97)

上記記事にて丁寧に方法を解説しており、有り難いことにサブセット化したフォントデータを公開していたりもする。  
しかしサブセットの対象外としているJIS第2水準漢字をざっと眺めてみると、「おや、これも第2なの！？」と思う漢字も含まれている。(丼・罠・囮など、結構あった)

-   [JIS第2水準の漢字一覧表](http://kanjitisiki.com/jis2/)

しかし第2水準漢字は3000字弱定義されており、これをすべて含めるとそこそこの容量になってしまう。

どうしたものかと考えていたら、[システムズ・インテリジェンス・プロダクツ](http://www.sip.co.jp/)という業務用スキャンシステムなどを取り扱う企業の取り扱い商品の[仕様書](http://www.sip.co.jp/PSSkatsuji.pdf)を見つけたので、こちらを参考にさせていただくことにした。

こちらは第一水準へ第二水準から選定した551字をを加えた3516字を対応漢字として定義している。  
僕一人があれやこれやと加えるより遥かに客観性があるであろう。