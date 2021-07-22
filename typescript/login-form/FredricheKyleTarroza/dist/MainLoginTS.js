var _a;
import LoginForm from './LoginFormTS.js';
var LogCont = new LoginForm();
console.log("MainLogin Loaded.");
//submit button event listener
(_a = LogCont.$btnLogin) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var UserEvent = LogCont.username.value;
    var UserPass = LogCont.password.value;
    LogCont.getUserPass(UserEvent, UserPass);
});
//modal event listener close button and shows the Form
// LogCont.CloseButton.addEventListener('click', function(){
//     document.getElementById('ContainerForm').style.display='block'
//     document.getElementById('modalpopup').style.display='none'
// });
