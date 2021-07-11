import LoginForm from './LoginForm.js';
let LogCont = new LoginForm();
console.log("MainLogin Loaded.");
LogCont.LoginSubmit.addEventListener('click', function(){
    var UserEvent = LogCont.username.value;
    var UserPass = LogCont.password.value;
    LogCont.getUserPass(UserEvent,UserPass);
});
