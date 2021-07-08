import RegForm from "./RegForm.js";

console.log('Login Page Successfully Loaded...')
let login = new RegForm();
    //load the data
    let login = await regForm.getloginUrl();
    regForm.loadLogin(login);

    regForm.btnSubmit.addEventListener('click', function() {
    var un = login.username.value;
    var pswrd = login.password.value;
    login.getInput(un, pswrd)
    if (un == "ghuser" && pswrd == "secret"){
        alert("Logged in successfully");
    } 
  });
