function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 16);
    });
}

// asyncFunctionが実行されたら、Promiseインスタンスを生成。以下のようなイメージ
/*
{
    resolve: [],
    reject: []
}
*/
// 16ms後にresolveにAsync Hello Worldをいれるイメージ

asyncFunction().then(function (value) {
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    console.error(error);
});

// value: []になにかをいれる挙動....という風にはならない。value = asyncFunction.resolveを入れるイメージ
