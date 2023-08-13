function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector("input");
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let initialSize = 30;

createButtonEl.addEventListener("click", () => {
  const inputValue = inputEl.value; 
  let boxesMarkup = "";

  for (let i = 0; i < inputValue; i += 1) {
    const randomColor = getRandomHexColor();
    const oneBoxMarkup = `<div style="width:${initialSize}px; height:${initialSize}px;background-color:${randomColor};"></div>`;
    initialSize += 10;
    boxesMarkup += oneBoxMarkup;
  }

  initialSize = 30;
  boxesEl.innerHTML = boxesMarkup;
 });

destroyButtonEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";

 })