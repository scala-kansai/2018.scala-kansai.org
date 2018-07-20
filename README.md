# Scala関西Summit 2018 ウェブサイト


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


## スポンサー情報の追加方法

1. ブランチを作成 `sponsor/hogehoge`
1. [contents/sponsors.yml](contents/sponsors.yml) を編集
1. 画像を `static/sponsors` ディレクトリに配置する [画像の作成方法はガイドを参照](./SPONSOR_IMAGE.md)
1. 手元で `npm start` を叩き正常に反映されているかを確認 (任意)
1. commit/pushを行う
1. PRの作成を行う
  - タイトル: スポンサー情報の追加 hogehoge様 
  - Reviewers: SAMMY7th
  - コメント: close #-- (スポンサー情報のIssue番号を表記) 特記事項が有れば合わせて書く
1. netlifyでの確認を行う
  - PR作成後、しばらくすると `All checks have passed` と表示される
  - Show all checksをクリック→Detailsをクリック
