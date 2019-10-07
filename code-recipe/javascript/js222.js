// 一定時間ごとの処理を解除したい

const ClearInterval = () => {
    const intervalid = setInterval(timer1, 1000);
    let count = 0;
    function timer1(){
        count += 1;
        console.log(count, new Date().toLocaleTimeString());
        if (count === 3) {
            clearInterval(intervalid); // 解除
        }
    }
}
