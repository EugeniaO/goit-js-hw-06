const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredient = ingredients[0];
const listEl = document.querySelector('#ingredients');



const elements = [];
for (let i = 0; i < ingredients.length; i += 1 ) {
  console.log(ingredients[i]);

  const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = ingredients[i];
  console.log(itemEl);
  elements.push(itemEl);
};

listEl.append(...elements)
