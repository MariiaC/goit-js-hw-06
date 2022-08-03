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

