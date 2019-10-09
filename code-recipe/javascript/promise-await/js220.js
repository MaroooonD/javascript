// 一定時間後の処理
/*
const ClearTimeout = () => {
    const timerId = setTimeout(timer1,1000);
    function timer1() {
        console.log('一定時間後の処理を解除する')
    }
    clearTimeout(timerId);
}
*/

// よくわからなかった為別コードを用意した

const ClearTimeout = () => {
    let count = 0;
    const countup = function () {
        console.log(count++);
        const id = setTimeout(countup, 1000);
        if (count > 5) {
            clearTimeout(id);　//idをclearTimeoutで指定している
        }
    }
    countup();
}
