title: LetsEncryptとhttp2とNodeと
date: 2016-02-17 19:32:19
tags:

author: hirofumi

---
CloudFlare を利用してTLS化していたサイトを、Let’s Encrypt へ移行した。

参考にした記事ではWebroot プラグインを使用し、サーバーを停止せずに行う手法が多数でしたが、僕の環境（Node.js）だと少しハマったのでStandalone で取得を行った。

まずはCloudFlare を停止し、Aレコードを直接サーバーへ設定。

```bash
# gitで取得
$ sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```

```bash
# Nginx を停止$ sudo systemctl stop nginx# 80番ポートが塞がれていないかチャック$ netstat -na | grep ':80.*LISTEN'
```

```shell
# Let' sencrypt フォルダへ移動$ cd /opt/letsencrypt# Stndalone プラグインを実行$ ./letsencrypt-auto certonly --standalone
```

情報を入力し規約に同意して完了。

```bash
$ sudo ls /etc/letsencrypt/live/your_domain_nam
```

```bash
# Nginx を起動$ sudo systemctl start nginx
```

導入のさいに参考となった文献は以下など。

-   [光の速さのWEBサーバー(nginx)をlet’s encryptでSSL化及びHTTP/2化。ついでにセキュリティ評価をA＋にする。 - Qiita](http://qiita.com/sak_2/items/ff835b669c0a7e110b09)
-   [Let’s EncryptとnginxでHTTP/2サーバを立てる - pixiv inside](http://inside.pixiv.net/entry/2015/12/10/153114)
-   [aeas44 — CentOS 7 の Nginx への Let’s Encrypt の導入](http://aeas44.tumblr.com/post/138777257395/centos-7-%E3%81%AE-nginx-%E3%81%B8%E3%81%AE-lets-encrypt-%E3%81%AE%E5%B0%8E%E5%85%A5)
-   [Let’s Encrypt で証明書を発行して運用するための nginx の設定 - 意識低い開発者のBlog](https://blog.ymyzk.com/2016/02/nginx-config-for-lets-encrypt/)
-   [Hardening node.js for production part 2: using nginx to avoid node.js load | Arg! Team Blog](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load/)
-   [NGINX Config for nodejs application with nginx serving assets and socket.io support](https://gist.github.com/vodolaz095/8373960)

また、証明書の更新は以下の手順で行う。

```bash
# nginxを停止(80番ポートを開ける)$ sudo systemctl stop nginx# 更新$ ./letsencrypt-auto renew# nginxを起動$ sudo systemctl start nginx
```