// Promiseで書いた時 

// const getFirstUserData = () => {
//     return fetch('../users.json') // ユーザ一覧のJSONを取得
//         .then(response => response.json()) // パース
//         .then(users => users[0]) // 最初のユーザを取り出す
//         .then(user => fetch(`/users/${user.name}`)) // 指定ユーザのJSONを取得
//         .then(userResponse => response.json()) // パース
// };
//
// getFirstUserData();

// 上記をasync/awaitで書くと

async function getFirstUserData() {
    const response = await fetch('./users.json'); // ユーザ一覧のJSONを取得
    const users = await response.json(); // パース
    const user = users[0]; // 最初のユーザを取り出す
    const userResponse = await fetch(`./users/${user.name}`); // 指定ユーザのJSONを取得
    const userData = await user.json(); // パース
    return userData
}

getFirstUserData();
