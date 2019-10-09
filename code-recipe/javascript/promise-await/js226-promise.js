
const SeriesPromise = () => {
    Promise.resolve()
        .then(
            () =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(`1つ目のPromise`, new Date().toLocaleTimeString());
                        resolve();
                    }, 1000);
                })
        )
        .then(
            () =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(`2つ目のPromise`, new Date().toLocaleTimeString());
                        resolve();
                    }, 1000);
                })
        );
}
