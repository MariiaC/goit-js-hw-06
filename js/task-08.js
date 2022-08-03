const formRef = document.querySelector('.login-form');
//console.log(form);

formRef.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

  const formaEvent = event.currentTarget.elements;
  // console.dir(formEl);

  const emailRef = formaEvent.email.value;
  const passwordRef = formaEvent.password.value;
  const subscriptionRef = formaEvent.password.value;

  const formCollection = {
    emailRef,
    passwordRef,
    subscriptionRef,
  };
   console.log(formCollection);
    
  formRef.reset();
  
   if (emailRef === "" || passwordRef === "") {
        return alert("Please fill in all the fields!");
    }
  
  //Варіант з FormData
  // const formData = new FormData(event.currentTarget);
  // console.log(formData);

  // formData.forEach((value, name) => {
  //     console.log(name);
  //     console.log(value);
  // })
}
