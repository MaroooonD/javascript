'use strict';

// {
//     const word = 'apple';
//     let loc = 0;
//
//     const target = document.getElementById('target');
//     target.textContent = word;
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             console.log('score');
//             loc++;
//         } else {
//             console.log('miss');
//         }
//     });
// }

// 正解とミスの数をカウントしよう
// {
//     const word = 'apple';
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//
//     target.textContent = word;
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             console.log('score');
//             loc++;
//             score++;
//             scoreLabel.textContent = score;
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }

// 正解した文字の表示を整えよう
// {
//     const word = 'apple';
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//
//     target.textContent = word;
//
//     function updateTarget() {
//         let placeholder = '';
//         for (let i = 0; i < loc; i++) {
//             placeholder += '_';
//         }
//         // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
//         target.textContent = placeholder + word.substring(loc);
//     }
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             console.log('score');
//             loc++;
//             score++;
//             scoreLabel.textContent = score;
//             updateTarget();
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }

// 複数の単語に対応させよう
// {
//     const words = [
//         'apple',
//         'sky',
//         'blue',
//         'middle',
//         'set',
//     ];
//
//     let word = words[Math.floor(Math.random() * words.length)];
//
//     // const word = 'apple';
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//
//     // target.textContent = word;
//
//     function updateTarget() {
//         let placeholder = '';
//         for (let i = 0; i < loc; i++) {
//             placeholder += '_';
//         }
//         // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
//         target.textContent = placeholder + word.substring(loc);
//     }
//
//     window.addEventListener('click', () => {
//         updateTarget();
//     });
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             // console.log('score');
//             loc++;
//             if (loc === word.length) {
//                 word = words[Math.floor(Math.random() * words.length)];
//                 loc = 0;
//             }
//             score++;
//             scoreLabel.textContent = score;
//             updateTarget();
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }

// タイマーを表示しよう
// {
//     const words = [
//         'apple',
//         'sky',
//         'blue',
//         'middle',
//         'set',
//     ];
//
//     let word = words[Math.floor(Math.random() * words.length)];
//
//     // const word = 'apple';
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//     const timeLimit = 3 * 1000;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//     const timerLabel = document.getElementById('timer');
//     let startTime;
//
//     // target.textContent = word;
//
//     function updateTarget() {
//         let placeholder = '';
//         for (let i = 0; i < loc; i++) {
//             placeholder += '_';
//         }
//         // substring() に引数をひとつだけ渡してあげると、その位置から最後までの部分文字列を取得してくれます。
//         target.textContent = placeholder + word.substring(loc);
//     }
//
//     function updateTimer() {
//         // 残り時間
//         const timeLeft = startTime + timeLimit - Date.now();
//         // toFixed(2)は小数点以下２桁まで表示させる
//         timerLabel.textContent = (timeLeft / 1000).toFixed(2);
//     }
//
//     window.addEventListener('click', () => {
//         updateTarget();
//         startTime = Date.now();
//         updateTimer();
//     });
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             // console.log('score');
//             loc++;
//             if (loc === word.length) {
//                 word = words[Math.floor(Math.random() * words.length)];
//                 loc = 0;
//             }
//             score++;
//             scoreLabel.textContent = score;
//             updateTarget();
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }

// タイマーを動かそう！そしてタイマーを0秒で止める処理をしよう
// {
//     const words = [
//         'apple',
//         'sky',
//         'blue',
//         'middle',
//         'set',
//     ];
//
//     let word = words[Math.floor(Math.random() * words.length)];
//
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//     const timeLimit = 3 * 1000;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//     const timerLabel = document.getElementById('timer');
//     let startTime;
//
//     function updateTarget() {
//         let placeholder = '';
//         for (let i = 0; i < loc; i++) {
//             placeholder += '_';
//         }
//         target.textContent = placeholder + word.substring(loc);
//     }
//
//     function updateTimer() {
//         const timeLeft = startTime + timeLimit - Date.now();
//         timerLabel.textContent = (timeLeft / 1000).toFixed(2);
//
//         const timeoutId = setTimeout(() => {
//             updateTimer();
//         }, 10);
//
//         if (timeLeft < 0) {
//             clearTimeout(timeoutId);
//             timerLabel.textContent = '0.00';
//             // ここで OK を押す前に 0.00 になっていない原因なのですが、これはブラウザによっては、こちらの alert() の処理が終わるまで画面描画の処理をブロックしてしまうからですね。
//             // これを防ぐには alert() の処理を setTimeout() を使って少し遅らせてあげれば OK です
//             setTimeout(() => {
//                 alert('Game out！');
//             }, 100);
//         }
//     }
//
//     window.addEventListener('click', () => {
//         updateTarget();
//         startTime = Date.now();
//         updateTimer();
//     });
//
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             loc++;
//             if (loc === word.length) {
//                 word = words[Math.floor(Math.random() * words.length)];
//                 loc = 0;
//             }
//             score++;
//             scoreLabel.textContent = score;
//             updateTarget();
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }

// 一度しかゲームスタートしないようにしよう。

// {
//     const words = [
//         'apple',
//         'sky',
//         'blue',
//         'middle',
//         'set',
//     ];
//
//     let word = words[Math.floor(Math.random() * words.length)];
//
//     let loc = 0;
//     let score = 0;
//     let miss = 0;
//     const timeLimit = 3 * 1000;
//
//     const target = document.getElementById('target');
//     const scoreLabel = document.getElementById('score');
//     const missLabel = document.getElementById('miss');
//     const timerLabel = document.getElementById('timer');
//     let startTime;
//     let isPlaying = false;
//
//     function updateTarget() {
//         let placeholder = '';
//         for (let i = 0; i < loc; i++) {
//             placeholder += '_';
//         }
//         target.textContent = placeholder + word.substring(loc);
//     }
//
//     function updateTimer() {
//         const timeLeft = startTime + timeLimit - Date.now();
//         timerLabel.textContent = (timeLeft / 1000).toFixed(2);
//
//         const timeoutId = setTimeout(() => {
//             updateTimer();
//         }, 10);
//
//         if (timeLeft < 0) {
//             isPlaying = false;
//             clearTimeout(timeoutId);
//             timerLabel.textContent = '0.00';
//             setTimeout(() => {
//                 alert('Game out！');
//             }, 100);
//         }
//     }
//
//     window.addEventListener('click', () => {
//         if (isPlaying === true) {
//             return;
//         }
//         isPlaying = true;
//
//         updateTarget();
//         startTime = Date.now();
//         updateTimer();
//     });
//
//     window.addEventListener('keyup', e => {
//         // if(isPlaying !== true) { でもよい
//         if(isPlaying === false) {
//             return;
//         }
//         console.log(e.key);
//
//         if (e.key === word[loc]) {
//             loc++;
//             if (loc === word.length) {
//                 word = words[Math.floor(Math.random() * words.length)];
//                 loc = 0;
//             }
//             score++;
//             scoreLabel.textContent = score;
//             updateTarget();
//         } else {
//             console.log('miss');
//             miss++;
//             missLabel.textContent = miss;
//         }
//     });
// }


// 正答率を表示しよう + リプレイ

{
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
    ];

    let word = words[Math.floor(Math.random() * words.length)];


    // どうせクリック時のイベントで呼ばれることになるので、これらの値は初期化するのではなく、宣言するだけでよくなる。
    let loc;
    let score;
    let miss;
    const timeLimit = 3 * 1000;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    let startTime;
    let isPlaying = false;

    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    function showResult() {
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
    }

    function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutId = setTimeout(() => {
            updateTimer();
        }, 10);

        if (timeLeft < 0) {
            isPlaying = false;
            clearTimeout(timeoutId);
            setTimeout(() => {
                // alert('Game out！');
                showResult();
            }, 100);

            timerLabel.textContent = '0.00';
            target.textContent = 'click to replay';
        }
    }

    window.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }
        isPlaying = true;

        //ウィンドウをクリックしたときに初期化していきたい
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        word = words[Math.floor(Math.random() * words.length)];

        updateTarget();
        startTime = Date.now();
        updateTimer();
    });

    window.addEventListener('keyup', e => {
        // if(isPlaying !== true) { でもよい
        if(isPlaying === false) {
            return;
        }
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
