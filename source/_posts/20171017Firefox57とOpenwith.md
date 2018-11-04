title: Firefox57とOpenwith
date: 2017-10-17 01:19:41
tags:
- Firefox
author: hirofumi

---
今普段使いしている Firefox Developer Edition は、バージョンが57となったため、拡張機能がWebExtention限定となり、多数が使用不能となった。

いくつかは一旦仕様を諦めるか代替品へ移行したが、Open WithはWebExtention版がベータ版がテスト中とのことで、それを使用した。

-   [Open With WebExtension beta available · Issue #132 · darktrojan/openwith](https://github.com/darktrojan/openwith/issues/132)

その際の手順は以下の通り。

1.  [ここ](https://addons.mozilla.org/en-US/firefox/addon/open-with/versions/beta)から最新版をインストールする。
2.  もしインストールされていなかったら、[python](https://www.python.org/downloads/)をPCへインストールする。（2系、3系のどちらでもOKらしい）
3.  FirefoxでOpen withを立ち上げ、そのウィンドウ内にある`Click here to download`をクリックし、`open_with_windows.py` というファイルをダウンロードする。
4.  コマンドプロンプトを立ち上げ、`open_with_windows.py install` のようにインストールを実行する。
5.  ウィンドウ内の `Test Installation`を実行し、グリーンのチェックマークが表示されると成功。

これによりOpen With がFirefox 57 移行でも使用できる。  
使いかって、表示は若干差異があるが、ほぼ問題はない。

この調子で順調に著名拡張機能が移行したらいいのだが…そうはなかなかいかんだろうなぁ…。