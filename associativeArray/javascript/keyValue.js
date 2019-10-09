// 連想配列をforで出そうとすると、keyとvalue出さないといけない

const keyValue = () => {
    const api = {
        name1: "1番目",
        name2: "2番目",
        name3: "3番目",
        name4: "4番目",
        name5: "5番目"
    }

    for (key in api) {
        console.log(`key:` + key + `value:` + api[key]);
    }
}
