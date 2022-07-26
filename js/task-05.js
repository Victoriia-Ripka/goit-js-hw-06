const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputValid = event => {
    outputEl.textContent = event.currentTarget.value.trim() || "Anonymous";
};

inputEl.addEventListener('blur', inputValid);