title: sitemap.xml
date: 2015-10-07 20:40:14
tags:

author: hirofumi

---
グーグルに正しくインデックスしてもらうため、作成したNodeアプリケーションへsitemap.xmlを追加したい。  
清く正しくsitemap.xmlを理解するなら以下を参照。

-   [sitemaps.org - ホーム](http://www.sitemaps.org/ja/)
-   [サイトマップについて - Search Console ヘルプ](https://support.google.com/webmasters/answer/156184?hl=ja&ref_topic=4581190)

普段は以下のオンラインジェネレーターを利用し配備していた。

-   [Create your Google Sitemap Online - XML Sitemaps Generator](https://www.xml-sitemaps.com/)

これを利用すれば静的コンテンツは自動的にクロールをし追加してくれるが、動的に追加されるコンテンツはそのたびに作成しなおさなければならないため難儀である。  
そこで[sitemap.js](https://github.com/ekalinin/sitemap.js)を利用しアプリ内でリクエストがあったさいに動的にxmlを作成し発行する仕組みを作った。

-   [ekalinin/sitemap.js](https://github.com/ekalinin/sitemap.js)

ExapmpeにExpressでの使用例が書かれており、Koaでもほぼそのまま流用できた。  
Promiseでラップし、Yiedableにすればほぼ完了である。

あとはDBへアクセスしヒットしたコンテンツをsitemap.xmlへ追加すれば完了である。