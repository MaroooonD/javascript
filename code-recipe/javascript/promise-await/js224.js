// promiseで処理の成功時、失敗時の処理を行いたい
// 失敗時はcatchを使用する

const PromiseFalse = () => {

    let flag = true;
    // let flag = false;

    const promise = new Promise((resolve, reject) => {
        if (flag === true) {
            resolve('orange');
        } else {
            reject('apple');
        }
    });

    promise.then((value) => {
        console.log(value);
    })

    promise.catch((value) => {
        console.log(value);
    });

}
