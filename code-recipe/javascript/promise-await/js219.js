// 一定時間後に処理を行いたい

// 基本形
/*
setTimeout(timer1, 1000);
function timer1() {
    alert('タイマー処理');
}
*/

const SetTimeOut = () => {

    console.log('起動時の時刻', new Date().toLocaleDateString());

    setTimeout(() => {
        console.log('setTimeout後の時刻', new Date().toLocaleTimeString());
    }, 10000);

}
