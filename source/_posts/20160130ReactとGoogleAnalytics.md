---
layout: post
title: ReactとGoogleAnalytics
date: 2016-01-30 19:12:55
tags:
- React
author: hirofumi

---
Reactベースで構築されたSPAの場合、Google Analyticsを用いたアクセス解析には一工夫が必要となる。

-   [単一ページ アプリケーションのトラッキング | ウェブ向けアナリティクス（analytics.js） | Google Developers](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications)

単純にアナリティクスのコードを読み込むだけではなく、ルーティングへのフックを設置しなければならない。  
今回はreact-routerを採用しているので、それを基準にライブラリを探すと、以下が見つかった。

-   [mozilla/react-ga - JavaScript](https://github.com/mozilla/react-ga)
-   [seeden/react-g-analytics: React google analytics with support for react-router](https://github.com/seeden/react-g-analytics)
-   [tcoopman/ga-react-router: Google analytics component for react-router](https://github.com/tcoopman/ga-react-router)

react-gaはapiが豊富で、Mozilla内でドッグフーディングされているようで信頼もできる。コード量は一番多いかな。  
3.73 KB

react-g-analyticsは機能をpageviewの送信にしぼっている分、シンプルな作り。

ga-react-routerはとにかくシンプル。Webpack前提の作りだが、かなり軽量だ。

一番サクっと導入できそうなのはreact-g-analyticsだが、その前にreact-routerのアップグレードからしたほうがよさそうだ。

最終的には react-ga を採用し、以下を参考に実装を行った。

-   [reactjs - How to set up Google Analytics for React-Router? - Stack Overflow](http://stackoverflow.com/questions/34836500/how-to-set-up-google-analytics-for-react-router)