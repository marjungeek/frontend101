import RegForm from './RegForm.js';

console.log('Login Page Successfully Loaded...')
//let regForm = new RegForm();

const regForm = new RegForm({
    APIUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
  });
  
(async function(){
    regForm.btnSubmit.addEventListener('click', function() {
    var un = regForm.username.value;
    var pswrd = regForm.password.value;
    var rmChck = regForm.rmCheck.value;
    
    //if(rmChck.checked && un.value !== ''){
      //localStorage.name = username.value;
      //localStorage.checkbox = rmChck.value;
    //} else {
      //localStorage.name = "";
      //localStorage.checkbox = "";
    //}
    regForm.getInput(un, pswrd)
  });
})();