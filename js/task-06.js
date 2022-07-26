const inputEl = document.querySelector('#validation-input');
const inputVlaue = Number(inputEl.dataset.length);

const inputValid = event => {
    if (event.target.value.length === inputVlaue) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};
inputEl.addEventListener('blur', inputValid);