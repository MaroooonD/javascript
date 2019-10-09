window.addEventListener('DOMContentLoaded', function () {
    // form要素の参照
    const formElement = document.querySelector('form');
    // 送信イベントを監視
    formElement.addEventListener('submit', handleSubmit);
})

// 送信イベント発生時
const handleSubmit = (event) => {
    // confirmでユーザーに確認する
    const isYes = confirm('この内容で送信していいですか？');

    if (isYes === true) {
        alert("yesおしたね！");
    }

    // 「いいえ」を選択した場合
    if (isYes === false) {
        // 挙動をキャンセル
        event.preventDefault();
    }
}
