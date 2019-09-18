# js頻出コード

## ユーザーに名前入力をさせたいとき
- `prompt('名前を入力してください')`

## 変数に保存した文字を表示したいとき
```js
hoge = prompt('名前を入力してください');
hoge.textContent = state;
```

## クリックイベントで関数のイベントを開始したいとき
```js
para.addEventListener('click', updateName);
function updateName() {
  hogehoge
}
```

## アロー関数を実行してみよう
```js
// const test = function calc(x) {
//    return x + 1;
// };

let test = (x) => {
    return x + 1;
};

test();
```

### アロー関数を書くとどうなる？
- 関数名を書かなくてよくなる
    - 今まで`const = hoge`と`function hogeHoge()`と二つ宣言しないといけなかった
    - しかも結局実行するのは`hoge`だけなのですごく面倒だった
    - アロー関数にすると関数命名の数が減って大助かり！！！
- thisに関してなにかあるらしいけど今度調べます
    
## document.querySelectorAll('button')
- クラス名、ID名、関係なく取得できる。
- getElementById()の上位互換
- querySelectorだけだと、1つ目を取得したら終了してしまう
- なのでquerySelectorAll
- 今回がbuttonタグ全体を取得している

## document.createElement('p')
- p要素を作って追加する

## <button>タグをクリックするとpタグの文字が形成される
```html
<div class="study">
    <button>ここをクリックして</button>
</div>
<script>
    function createParagraph() {
        const para = document.createElement('p');
        para.textContent = 'ボタンが押されました！';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for (var i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }

</script>
```

### htmlを汚すjs
- 上記は以下のようにHTMLに記述することでfor文を省略することができる
    - `<button onclick="createParagraph()">押してください</button>`
- けどこれはマジで邪道
- htmlをjsが汚染しているので、ちゃんとプログラムを書こう。

## asyncが追加されたんだって！！！！
- `<script src="script.js" async></script>`






