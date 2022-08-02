
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



/*Напиши скрипт, який
+під час втрати фокусу на інпуті(подія blur),
перевіряє його вміст щодо правильної кількості введених символів.(html)
+Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
+Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.*/