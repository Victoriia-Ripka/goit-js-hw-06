function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');

function changeColorBtnAndText(event) {
  const hex = getRandomHexColor();
  span.textContent = hex; 
  body.style.backgroundColor = hex;
}

btn.addEventListener('click', changeColorBtnAndText);