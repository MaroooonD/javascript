# SW

## カウントアップ機能を実装しよう
```js
'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;

  function countUp() {
    console.log(Date.now() - startTime);
    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
}
```
- なぜletを使用しているのか
    - letはブロックスコープ、varは関数スコープと呼ばれている
    - ブロックスコープは`[]`の中でしか使用できない
    - 関数スコープは`function(){}`の中でしか使用できない
- `console.log(Date.now() - startTime);`
    - Date.now()関数で現在の日本時間のすべてを網羅してる
    - startTimeはイベントが行われた時間を表している
    - よってDate.now() - startTime = 0ということになる
- そしてfunctionで設定した関数を使用する

## タイマーを表示させる

```js
'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;

    function countUp() {
        const d = new Date(Date.now() - startTime);
        const m = d.getMinutes();
        const s = d.getSeconds();
        const ms = d.getMilliseconds();
        timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;

        setTimeout(() => {
            countUp();
        }, 10);
    }

    start.addEventListener('click', () => {
        startTime = Date.now();
        countUp();
    });
}

```

- timer.textContent = '${m}:${s}:${ms}';で最初は表示していた
    - 秒数が変わるたびに桁落ちしていたので桁を揃えるためにpadStartを採用
    - padStartは文字列にしか使用できないのでString(m)とした
    - ${String(m).padStart(2, '0')}は、2桁で表示して、その桁に満たなかったら文字列の前を0で埋めるという意


