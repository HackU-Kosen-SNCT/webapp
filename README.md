# コードの変更方法
Node.jsのバージョンは16か17であれば問題なく動くはずです。
パッケージマネージャはyarnを使ってください。

## Viteについて
package.jsonのscriptsの項を見れば分かると思いますが、
`build`でビルド、`start`で既にサーバー起動（ホットリロードなし）、`dev`でサーバー起動（ホットリロードあり）

## ESLintについて
VSCodeの拡張機能のESLintを入れて、キーボードショートカットにてFormat Documentが設定されているか確認してください。
そのショートカットを使うと、修正可能な部分は修正されます。
修正されない部分はESLintでは修正できない記述ミスなので手動で修正してください。
これで動作しない場合、`npm i -g eslint`なり`yarn global add eslint`なりすれば動くと思います。

ESLintのコンフィグは[eslint-config-standard](https://github.com/standard/eslint-config-standard)に、他の拡張機能や設定をして使いやすくしたものです。

## 残りのタスクについて
VSCodeの拡張機能の、TODO Treeを入れてTODOを確認して潰してください。
TODO Treeでは検知されないTODOもあるので、検索して潰してください。
