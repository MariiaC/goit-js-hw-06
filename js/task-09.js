const bodyRef = document.querySelector('body');
//console.log(bodyRef);
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Напиши скрипт, який:
// змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

