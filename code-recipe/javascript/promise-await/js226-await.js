// await asyncを使用した記述方法

async function SeriesAwait() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`1つめのpromise`, new Date().toLocaleTimeString());
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('2つ目のPromise', new Date().toLocaleTimeString());
            resolve();
        }, 1000);
    });
}
