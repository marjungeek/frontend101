import LoginForm from './LoginForm.js';
let LogCont = new LoginForm();

LogCont.LoginSubmit.addEventListener('click', function(){
    var UserEvent = LogCont.username.value;
    var UserPass = LogCont.password.value;
    LogCont.getUserPass(UserEvent,UserPass);
});

/* 
(for review purposes)

structure goes MainLogin -> LoginForm -> HttpClient


1. MainLogin consist of event listeners and reads the values from LoginForm
2. LoginForm consist of validation of the input fields
3. HttpClient consist of endpoints of the API link



*/