
const counterNode = document.querySelector('#value');
let counterValue = 0;

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');


buttonIncrement.addEventListener("click", () => {
    
    counterValue += 1;
    counterNode.textContent = counterValue;
    
});

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
        counterNode.textContent = counterValue;

});
