---
layout: post
title: Instagram　API
date: 2017-03-30 19:55:48
tags:

author: hirofumi

---
Instagram APIを使用したフィード表示を実装してみた。

参考文献は以下、情報は多々見つかった。

-   [Instagram APIの利用方法 - Qiita](http://qiita.com/NoriakiOshita/items/71800502fca62d9ec685)
-   [instagramのuser idを取得する方法](http://thisisstandarz.com/instagram%E3%81%AEuser-id%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)
-   [How to get Instagram API access token and fix your broken feed](https://medium.com/@bkwebster/how-to-get-instagram-api-access-token-and-fix-your-broken-feed-c8ad470e3f02)
-   [【保存版】Instagramの審査の流れ、手順、必要なものまとめ - Qiita](http://qiita.com/takashings/items/f03eb9e2ba343878d287)
-   [Instagram APIを使ってWEBサイトに写真を表示させてみよう｜株式会社カポタスト](https://capotast.co.jp/article/detail/21/)
-   [Instagram APIをPHPでさくっと使う - Qiita](http://qiita.com/uda0922/items/0c111d3e312b1dc5d6e8)

今回はPHPを開始実装を行った。  
コードは代替、このような感じである。

```php

$myAccessToken = '00000000000000000000';
$user_id = '0000000000';
$json = file_get_contents('https://api.instagram.com/v1/users/'.$user_id.'/media/recent/?access_token='.$myAccessToken);
$obj = json_decode($json);
foreach($obj->data as $data) {
    echo ''" alt="">';
}?>
```

自アカウントの情報を載せる分にはそれほどハードルは高くなさそうであるが、  
それ以上を行うとなると手続きはかなり面倒そうである。