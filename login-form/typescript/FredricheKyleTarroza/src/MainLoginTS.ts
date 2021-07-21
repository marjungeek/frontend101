import LoginForm from './LoginFormTS';
let LogCont = new LoginForm();
console.log("MainLogin Loaded."); 

//submit button event listener
LogCont.$btnLogin?.addEventListener('click', function(){
    let UserEvent = LogCont.$username.value;
    let UserPass = LogCont.$password.value;
    LogCont.getUserPass(UserEvent,UserPass); 
});

//modal event listener close button and shows the Form
// LogCont.CloseButton.addEventListener('click', function(){
//     document.getElementById('ContainerForm').style.display='block'
//     document.getElementById('modalpopup').style.display='none'
 
// });








