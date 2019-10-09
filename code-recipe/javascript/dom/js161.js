window.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('#myTexts');
    element.addEventListener('input', handleChange);
})

const handleChange = (event) => {
    const value = event.target.value;
    document.querySelector('.log').innerHTML = value;
}
