const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.classList.add('input-style');
inputEl.addEventListener("input", (event) => {
  const valInput = event.target.value;
  textEl.style.fontSize = `${valInput}px`;
  return textEl.style.fontSize;
});