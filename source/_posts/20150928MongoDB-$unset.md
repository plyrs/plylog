title: MongoDB $unset
date: 2015-09-28 20:20:49
tags:
- MongoDB
author: hirofumi

---
MongoDBで特定のドキュメントの特定のフィールドを削除するには`$unset`を使えばスマートらしい。

-   [$unset — MongoDB Manual 3.0](http://docs.mongodb.org/manual/reference/operator/update/unset/)

これはMongoDB2からの機能で、それ以前は`undefined`や`null`を入れて対応していたらしい。

```javascript
User.collection.update({_id: user._id}, {field: undefined});
```

昔はこうだったのが…

```javascript
User.collection.update({_id: user._id}, {$unset: {field: 1 }});
```

こうらしい。