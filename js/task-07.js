

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', handlerSlider);

function handlerSlider(event) {

    spanRef.style.fontSize = event.currentTarget.value + 'px';
    //console.log(handlerSlider);
}


