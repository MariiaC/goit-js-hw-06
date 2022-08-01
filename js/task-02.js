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


/*Напиши скрипт, який для кожного елемента масиву ingredients:

*Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
*Додасть назву інгредієнта як його текстовий вміст.
*Додасть елементу клас item.
*Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/