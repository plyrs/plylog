---
layout: post
title: Marker-Clusterer
date: 2015-11-29 21:30:15
tags:
- JavaScript
author: hirofumi

---
Google mapsへMarker Clustererを導入した。

-   [googlemaps/js-marker-clusterer](https://github.com/googlemaps/js-marker-clusterer)

ライブラリを追加し、下記ドキュメントとデモを見たら大体の仕様は分かった。

-   [MarkerClusterer for Google Maps v3 version 1.0 Reference](https://googlemaps.github.io/js-marker-clusterer/docs/reference.html)
-   [MarkerCluster for v3 Documentation: Examples](https://googlemaps.github.io/js-marker-clusterer/docs/examples.html)

基本的にはGoogleMapオブジェクトとマーカーの配列を`new MarkerClusterer()`へ突っ込めば作動する。

オプションを渡してクラスター化のタイミングなどを制御できるようだが、ドキュメントを探すのにちょっと苦労した。  
おそらく[Ver.1](http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/1.0/docs/reference.html)と同様のようなので、ここを参照した。

-   gridSize - クラスター範囲のサイズ。デフォルトは60で、小さくすると精度が上がり、大きくするとパフォーマンスが上がる。
-   maxZoom - クラスター監視に限度を設定できる。設定以下だとクラスター対象のマーカー群を無視する。
-   styles - クラスターのスタイルを設定できる。配列で大サイズから小への順番で。

大量のマーカーを配置するならユーザビリティ的に恩恵は大きいと思う。  
スマートフォンでもパフォーマンス上の問題は無さそう。

しかしマーカーが比較的密集していると、ズームレベル15では単独表示だったが、16へズームするとクラスター化されてしまうという不自然な挙動が見られた。恐らくクラスター化のグリッド計算アルゴリズムの仕様なのでしょうがないかも。