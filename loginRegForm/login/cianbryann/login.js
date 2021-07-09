import logincontrol from './logincontrol.js';
let lControlObject = new logincontrol();

lControlObject.submit.addEventListener('click',function(){
    var userNameI = lControlObject.username.value;
    var passWordI = lControlObject.password.value;
    lControlObject.getCredentials(userNameI,passWordI);
});