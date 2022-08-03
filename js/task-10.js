
const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const divRef = document.querySelector('#controls input')
//console.log(createRef);
createRef.addEventListener('click', getAmount);
destroyRef.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = divRef.value;
  createBoxes(amount);
  console.log(amount);
}

function createBoxes(amount) {
  const divSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i+=1) {
    let size = divSize + i*10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px;
     height: ${size}px;
    background-color: ${getRandomHexColor()};`

    fragment.appendChild(div);
  }
  boxesRef.appendChild(fragment);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}