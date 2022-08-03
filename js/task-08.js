const formRef = document.querySelector('.login-form');
//console.log(form);

formRef.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

  const formaEvent = event.currentTarget.elements;
  // console.dir(formEl);

  const email = formaEvent.email.value;
  const password = formaEvent.password.value;
  

  const formCollection = {
    email,
    password,
  };
       
   if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
   }
  
  console.log(formCollection);
  
   formRef.reset();
    
  //Варіант з FormData
  // const formData = new FormData(event.currentTarget);
  // console.log(formData);

  // formData.forEach((value, name) => {
  //     console.log(name);
  //     console.log(value);
  // })
}
