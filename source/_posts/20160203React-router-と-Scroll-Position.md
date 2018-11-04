title: React-router と Scroll Position
date: 2016-02-03 19:16:22
tags:
- React
author: hirofumi

---
react-router と ReactCSSTransitionGroup を組み合わせてページ遷移時のアニメーションを実装したメモ。  
サンプルを参考に進めれば容易であった。

-   [react-router/examples/animations at master · rackt/react-router](https://github.com/rackt/react-router/tree/master/examples/animations)

しかし細かい挙動に凝り始めると、提供されているハイレベルなAPIでは難しくなってくる。  
今回はページ遷移時にスクロールポジションが維持されてしまう問題の修正に少しハマった。

結果的に react-router 側を微調整して完了となった。

-   [Scroll to top on route change? · Issue #2019 · rackt/react-router](https://github.com/rackt/react-router/issues/2019)

```js
 window.scrollTo(0, 0)} history={createBrowserHistory()}>
  ...</Router>
```

これでページ遷移時に強制的にスクロールポジションをトップへ固定することができる。  
ただこの方法だとブラウザバックの際にも `window.scrollTo(0, 0)` が発動してしまいユーザビリティが損なわれる。  
結果的に下記の方法を採用した。

```js
const history = createBrowserHistory();history.listen(location => {  setTimeout(() => {    if (location.action === 'POP') {      return;    }    window.scrollTo(0, 0);  });});const routes = (      // ...  </Router>);
```

-   [Scroll position in RC1 · Issue #2144 · rackt/react-router](https://github.com/rackt/react-router/issues/2144#issuecomment-150939358)

これでブラウザバック時は前回のスクロールポジションを維持することができる。  
ちなみに下記のようなものもあるらしい。

[rackt/scroll-behavior - JavaScript](https://github.com/rackt/scroll-behavior)