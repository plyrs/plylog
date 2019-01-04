---
layout: post
title: React Date-picker
date: 2017-05-13 00:18:01
tags:
- JavaScript
- React
author: hirofumi

---
Date-picker機能を実装するにあたり、Reactコンポーネントを含め調査を行った。

-   [reactのdate-pickerを選ぶ - Qiita](http://qiita.com/193/items/61b81ea718d70b6197e1)
-   [Hacker0x01/react-datepicker: A simple and reusable datepicker component for React](https://github.com/Hacker0x01/react-datepicker)（採用）
-   [Rudeg/react-input-calendar](https://github.com/Rudeg/react-input-calendar)（すんなり使えなかった）

HTML標準のinput要素のtype属性「date」のPolyfillもいくつか見つかった。

-   [Input type=”date” polyfill (date picker) - Working examples - Web Experience Toolkit](https://wet-boew.github.io/wet-boew/demos/datepicker/datepicker-en.html)
-   [jcgertig/date-input-polyfill: Automatically adds datepickers to input\[type=date\] on IE, Firefox, and OS X Safari.](https://github.com/jcgertig/date-input-polyfill)
-   [chemerisuk/better-dateinput-polyfill: input\[type=date\] polyfill for better-dom](https://github.com/chemerisuk/better-dateinput-polyfill)

Firefoxは次期バージョンでChromeライクなDate-pickerが利用できるが、現時点ではまだ未対応。  
これらのポリフィルを採用してもよかったが…統一したUIの提供を優先し、今回はReactコンポーネントを利用した。