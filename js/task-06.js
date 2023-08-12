const inputEl = document.querySelector('#validation-input');
const checkValue = Number(inputEl.getAttribute("data-length"));
// const checkValue = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", (event) => {
    if (event.target.value.length === checkValue) {
                        inputEl.classList.remove("invalid");

        inputEl.classList.add("valid");
    } else {
                inputEl.classList.remove("valid");

        inputEl.classList.add("invalid");
 }
})
