const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');

const newArrRef = ingredients.map( ingr => {
  let newLi = document.createElement('li');

  newLi.textContent = ingr;
  newLi.className = 'item';

  return newLi
});


console.log(ingredientsRef.append(...newArrRef));


