// js219~227までの復習
// 課題：await-asyncとpromiseを使用して、1秒ごとにbuttonの色が変わるコードを7回続けろ。色は赤橙黄緑青藍白の順で。

async function PromiseRoundupColor() {
    const rainbow = [];
    const roundup = document.querySelector('#roundup');

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('red');
            roundup.style.backgroundColor = `${rainbow[0]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('orange');
            roundup.style.backgroundColor = `${rainbow[1]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('yellow');
            roundup.style.backgroundColor = `${rainbow[2]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('green');
            roundup.style.backgroundColor = `${rainbow[3]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('blue');
            roundup.style.backgroundColor = `${rainbow[4]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('darkblue');
            roundup.style.backgroundColor = `${rainbow[5]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('white');
            roundup.style.backgroundColor = `${rainbow[6]}`;
            resolve();
        }, 1000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            rainbow.push('#0a0ab0');
            roundup.style.backgroundColor = `${rainbow[7]}`;
            resolve();
        }, 1000);
    });
}
