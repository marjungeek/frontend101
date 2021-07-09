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
    regForm.getInput(un, pswrd)

    //let response = await regForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
    //console.log(response); 
    //if (un == "ghuser" && pswrd == "secret"){
        //alert("Logged in successfully");
    //}
  });
})();