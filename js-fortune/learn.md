# jsでおみくじをつくりましょう〜

## ボタンを押すとhitと出るようにする

```js
'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        btn.textContent = "hit!";
    });
}

```

- `const btn = document.getElementById('btn');`は`#btn`を探している
    - https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById
- `addEventListener`はイベントを追加できる
    - https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    - click部分の他にも様々なイベントを追加することができる
    - https://developer.mozilla.org/en-US/docs/Web/Events
    
## ボタンを押したような動作をする

```js
'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    btn.textContent = 'hit!';
  });
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}
```

- mousedownは押されていないボタンが押されたときの動作
- mouseupはは押されているボタンを押したときの動作
- classListは本来読み取り専用であるが、addやremoveを書くことでオブジェクトを変更することができる

## ランダムな整数値を生成する


- Math.random()
    - 0以上1未満になる
- Math.random() * 3
    - 0以上3未満になる
- Math.floor(Math.random() * 3)
    - 0以上3未満、かつ整数値（小数点を抜く）が表示する
- Math.floor(Math.random() * (n + 1))
    - 0以上n未満、かつ整数値（小数点を抜く）が表示する
- min + Math.floor(Math.random() * (max + 1 - min))
    - min以上max未満、かつ整数値（小数点を抜く）が表示する
    
## おみくじを表示してみる

```js
btn.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 3);
        btn.textContent = n;
        switch (n) {
            case 0:
                btn.textContent = '大吉';
                break;
            case 1:
                btn.textContent = '中吉';
                break;
            case 2:
                btn.textContent = '小吉';
                break;
        }
    });
```

- まぁそのままかな。見ればわかる

## 配列を使用する
```js
btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '凶'];
        const n = Math.floor(Math.random() * 3);
        btn.textContent = results[n];
});
```

- results配列を作ってあげてbtn.textContent = results[n];で表示してあげると配列内の文字がランダムに表示される
- 要素を追加するたびに`3`の値を変更するのは面倒臭いので、results.lengthにしてあげると良い

```js
btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '凶', '末吉'];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
});
```

## 確率を操作してみよう
- まず一つの方法として`const results = ['大吉', '大吉', '大吉', `大吉`, '凶'];`としてあげてもよい
- もう一つはif文で確率を操作する

```js
const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉';//5%
        } else if (n < 0.2) {
            btn.textContent = '中吉';//15%
        } else {
            btn.textContent = '凶';//80%
        }
```
