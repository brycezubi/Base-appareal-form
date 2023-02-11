const form = document.querySelector('.form')
// console.log(form)

form.addEventListener('submit',e=>{
  e.preventDefault();
  const email = form['email'].value;
  const small =  document.querySelector('small')
  const formControl = form['email'].parentNode;
  // console.log(small)
  // console.log(email)


  if(email === ''){
    small.innerText = 'email is required';
    formControl.classList.add("error");
  }else if(!isValid(email)){
    small.innerText = 'email no valido';
    formControl.classList.add("error");
  }else{
    small.style.display = 'none';
    formControl.classList.remove("error");
  }
})

function isValid(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}