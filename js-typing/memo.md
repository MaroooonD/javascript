# window.addEventListener('keyup',e => {})
以下を選択することで画面上でタイピングすると、文字が認識される

```js
'use strict';

{
  window.addEventListener('keyup', e => {
    console.log(e.key);
  });
}
```

# 「a,p,p,l,e」と順番にタイピングすると反応させるプログラム
```js
'use strict';

{
    const word = 'apple';
    let loc = 0;

    const target = document.getElementById('target');
    target.textContent = word;

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            console.log('score');
            loc++;
        } else {
            console.log('miss');
        }
    });
}

```

# 正解とミスの数をカウントしよう
```js
{
    const word = 'apple';
    let loc = 0;
    let score = 0;
    let miss = 0;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');

    target.textContent = word;

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            console.log('score');
            loc++;
            score++;
            scoreLabel.textContent = score;
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}
```

# 正解した文字の表示を整えよう
```js
{
    const word = 'apple';
    let loc = 0;
    let score = 0;
    let miss = 0;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');

    target.textContent = word;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
        target.textContent = placeholder + word.substring(loc);
    }

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            console.log('score');
            loc++;
            score++;
            scoreLabel.textContent = score;
            updateTarget();
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}
```

複数単語に対応させて、文字を打ち終わると変換して、最初の文字をClick to Startにする
```js
{
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
    ];

    let word = words[Math.floor(Math.random() * words.length)];

    // const word = 'apple';
    let loc = 0;
    let score = 0;
    let miss = 0;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');

    // target.textContent = word;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
        target.textContent = placeholder + word.substring(loc);
    }

    window.addEventListener('click', () => {
        updateTarget();
    });

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            // console.log('score');
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            score++;
            scoreLabel.textContent = score;
            updateTarget();
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}

```

# タイマーを表示しよう！
```js
{
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
    ];

    let word = words[Math.floor(Math.random() * words.length)];

    // const word = 'apple';
    let loc = 0;
    let score = 0;
    let miss = 0;
    const timeLimit = 3 * 1000;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    let startTime;

    // target.textContent = word;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
        target.textContent = placeholder + word.substring(loc);
    }

    function updateTimer() {
        // 残り時間
        const timeLeft = startTime + timeLimit - Date.now();
        // toFixed(2)は小数点以下２桁まで表示させる
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    }

    window.addEventListener('click', () => {
        updateTarget();
        startTime = Date.now();
        updateTimer();
    });

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            // console.log('score');
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            score++;
            scoreLabel.textContent = score;
            updateTarget();
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}
```

# タイマーを動かそう！
- これだけでタイマーを動かすことができる
- setTimeout関数がすんごく便利だ
- 以下だけでは3秒からだんだん時間が減っていく
- しかもマイナスまで行ってしまうから、さらに0秒で止める必要がある
```js
function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        setTimeout(() => {
            updateTimer();
        }, 10);
    }
```

- timeが0以下になると「Game out」を表示（アラート）
```js
{
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
    ];

    let word = words[Math.floor(Math.random() * words.length)];

    let loc = 0;
    let score = 0;
    let miss = 0;
    const timeLimit = 3 * 1000;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    let startTime;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutId = setTimeout(() => {
            updateTimer();
        }, 10);

        if (timeLeft < 0) {
            clearTimeout(timeoutId);
            alert('Game out！')
        }
    }

    window.addEventListener('click', () => {
        updateTarget();
        startTime = Date.now();
        updateTimer();
    });

    window.addEventListener('keyup', e => {
        console.log(e.key);

        if (e.key === word[loc]) {
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            score++;
            scoreLabel.textContent = score;
            updateTarget();
        } else {
            console.log('miss');
            miss++;
            missLabel.textContent = miss;
        }
    });
}

```

# 一度しかゲームスタートしないようにしよう。
- isPlayingという変数を宣言して、それをtrueやfalseで調整してあげましょう。
    - 初期状態ではfalseにしておきましょう
- addEventListenerのときは以下をしておくと、trueのときにリターンしてくれるので、一度しか処理しなくなる

```js
if (isPlaying === true) {
    return;
}
isPlaying = true;
// ここより以下をreturnしてくれる
updateTarget();
startTime = Date.now();
updateTimer();
```

# 正答率を表示しよう
- 結果を表示する`showResult();`を宣言する
```js
function showResult() {
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
    }
``` 



