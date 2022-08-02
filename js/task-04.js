const valueRef = document.querySelector('#value');
// console.log(valueRef);

const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn.dataset.increment);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn.dataset.decrement);

const counterValue = {
  value: 0,
  increment() {
    //console.log('incr this', this);
    this.value += 1;
  },
  decrement() {
    //console.log('decr this', this);
    this.value -= 1;
  },
};

incrementBtn.addEventListener('click', function () {
 // console.log('клік на інкремент');
  
    counterValue.increment();
//   console.log(counterValue);

  valueRef.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', function () {
  //console.log('клік на дикремент');
  
    counterValue.decrement();
  //console.log(counterValue);

  valueRef.textContent = counterValue.value;
});

/*Лічильник складається зі спану і кнопок, які по кліку повинні 
збільшувати і зменшувати його значення на одиницю (див. html).

+Створи змінну counterValue, в якій буде зберігатися поточне 
значення лічильника та ініціалізуй її значенням 0.
+Додай слухачів кліків до кнопок, всередині яких збільшуй або
зменшуй значення лічильника.
+Оновлюй інтерфейс новим значенням змінної counterValue.*/
