// 非同期処理を行えるPromiseを使いたい

const PromiseJS = () => {

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('orange');
        }, 1000);
    });

    promise.then((value) => {
        console.log(value); // 結果: 'orange'
    });

}
