
const styletRef = document.querySelector('#validation-input');

const InputBlur = ({ currentTarget }) => {
    const inputLength = Number(currentTarget.data-length) || 6;
    
    if (inputLength === currentTarget.value.length) {
        currentTarget.classList.add('valid');
        currentTarget.classList.remove('invalid')
    } else {
        currentTarget.classList.add('invalid');
        currentTarget.classList.remove('valid')
    }
   
}

styletRef.addEventListener('blur', InputBlur)









