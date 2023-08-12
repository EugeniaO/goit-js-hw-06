const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (event) => {
    if (!event.target.value) {
        outputEl.textContent = "Anonymous";
    } else { outputEl.textContent = event.target.value; }
});