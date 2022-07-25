const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
})

const list = document.querySelector('#ingredients')
list.append(...elements);