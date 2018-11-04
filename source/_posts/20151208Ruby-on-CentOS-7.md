title: Ruby on CentOS 7
date: 2015-12-08 18:44:06
tags:

author: hirofumi

---
開発環境のCentOS7へRubyをインストールした。バージョンも管理したいのでrbenvを経由し、方法はいくつかあるようだが一番シンプルそうなルートを選択した。

-   [rbenv/rbenv](https://github.com/rbenv/rbenv)

事前に必要なモジュールをインストールする。

```bash
$ sudo yum -y install git libffi libffi-dev gcc openssl-devel readline-devel zlib-devel
```

rbenv、rbenv-buildのリポジトリをクローン。

```bash
$ git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
$ git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
```

rbenvのパスを通す。

```bash
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile$ exec $SHELL$ source ~/.bash_profile
```

インストールできるRubyのバージョン一覧を取得。

```bash
$ rbenv install -list
```

今回は最新安定板の`2.2.3`をインストール。

```bash
$ rbenv install -v 2.2.3
```

rvenvを再読み込みしグローバルで使用するバージョンへ指定。

```bash
$ rbenv rehash$ rbenv global 2.2.3
```

`ruby -v`でバージョンが表示されれば完了。

また、併せてbundlerも入れておく。

```bash
$ gem install bundler$ bundle -v
```