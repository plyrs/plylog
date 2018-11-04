---
layout: post
title: Windows10へVagrantを導入
date: 2015-08-10 20:03:31
tags:
- Windows
- Vagrant
author: hirofumi

---
Wordpressなどの開発はXamppで十分だが、Nodeを本格的にWindows上で行うのはきつい。  
というか本番環境がWindowsならまだいいかもしれないが、現実はほとんどそうではないので仮想環境上で開発すべきであろう。  
Windows10へアップグレードしたのを機会に、前々から検討していたVagrantでの開発環境導入を試みる。

## 事前作業

### Virtualization Technologyを有効にする

Vagrantは仮想環境を使用するため、Virtualization Technologyを有効にする必要がある。  
PCのBIOSに入り、`Virtualization Technology` を `Enabled` へ

### Vagrant、VirtualBoxをインストール

各公式サイトから最新版をダウンロードし、インスコ。

Vagrant 公式サイト  
[http://www.vagrantup.com/](http://www.vagrantup.com/)

VirtualBox  
[https://www.virtualbox.org/](https://www.virtualbox.org/)

### BOXを取得

配布サイトから必要なBoxを吟味。  
今回はCentOS v6.6 64bit。

Vagrantbox.es  
[http://www.vagrantbox.es/](http://www.vagrantbox.es/)

### CentOS 6.6 64bit を追加

ここからコマンドプロンプト

```bash
$ vagrant box add centos6.6 http://sourceforge.net/projects/nrel-vagrant-boxes/files/CentOS-6.6-x86_64-v20150426.box
```

### 追加したBoxを確認

```bash
$ vagrant box list
```

## Vagrant 初期化

ここからコマンドプロンプト on 作業フォルダ

```bash
$ vagrant init centos6.6
```

## 仮想マシンの操作

### 起動

```bash
$ vagrant up
```

### 状態確認

```bash
$ vagrant status
```

### 終了

```bash
$ vagrant halt
```

### 再起動

```bash
$ vagrant reload
```

### 破棄

```bash
$ vagrant destroy
```

## 仮想マシンへ接続

TeraTermで接続した。

### git インストール

```shell
$ sudo yum -y install git
```

### Node.js インストール

```bash
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ source ~/.nvm/nvm.sh$ nvm install 0.12
```

```bash
$ npm install --no-bin-links
```

### ファイアーウォールを停止

```bash
$ sudo service iptables stop$ sudo chkconfig iptables off
```

### 雑感

Windows10でも今回は問題はなかったが、環境やVirtualBoxのバージョンによっては不具合も報告されているようなのでもうちょっと待ったほうが安全かもしれない。  
Vagrantを開発環境として本格運用していくならイメージの保存や構成管理ツールも合わせるのが楽っぽいので、順次導入していきたい。