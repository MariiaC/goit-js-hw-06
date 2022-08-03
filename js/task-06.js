
const focusRef = document.querySelector('input')

focusRef.addEventListener('focus', inputFocus);
focusRef.addEventListener('blur', inputBlur);

function inputFocus() {
    //console.log(' input works');
}

function inputBlur() {
    //console.log(' blur works');
    if (this.getAttribute('data-length') >= this.value.length) {
    this.classList.add('valid')
    this.classList.remove('invalid');
} else {
    this.classList.add('invalid')
    this.classList.remove('valid');
}
}



