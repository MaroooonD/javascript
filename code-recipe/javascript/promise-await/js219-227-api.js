// js219~227までの復習
// 課題：配列を作成（apiのjsonファイルを意識して）。その配列から文言を引き出して、buttonの文言を変更する挙動を5回実施する。

const PromiseRoundupApi = () => {
    const api = {
        name1: "1番目",
        name2: "2番目",
        name3: "3番目",
        name4: "4番目",
        name5: "5番目"
    }

    async function SeriesAwait() {
        for (key in api) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    document.getElementById(`matome`).innerHTML = api[key];
                    resolve();
                }, 1000);
            });
        }
    }
    SeriesAwait()
}
