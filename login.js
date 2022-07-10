const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password1 =document.getElementById('password1');

form.addEventListener('submit',e =>{
  e.preventDefault();
  checkInput();
}); 

function checkInput(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim(); 
// user name 
    if(usernameValue === ''){
        setError(username,'User name cannot be blank ') ;
    } 
    else{
        setSuccess(username);
    }
// Email   

if(emailValue === ''){
    setError(email,'Email cannot be blank ') ;
} 
else if(!isEmail(emailValue)){
    setError(email,'Not a Valid Email  ') ;

}
else{
    setSuccess(email);
}

// password 
if(passwordValue === ''){
    setError(password,'password cannot be blank ') ;
} 
else if(passwordValue.length<=6){
    setError(password,'password must be more than 6 character ') ;
}
else{
    setSuccess(password);
}

// conform password 
if(password1Value === ''){
    setError(password1,'password2 cannot be blank ') ;
} 
else if(passwordValue !== password1Value){
    setError(password1,'password does not match ') ;
} 

else{
    setSuccess(password1);
}


// functions 
// function for is email
function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 


//  function set  error
function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;

}
  

//  function set  sucess
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}




}