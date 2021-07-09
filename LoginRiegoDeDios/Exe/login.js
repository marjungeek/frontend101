 import logincontrol from './logincontrol.js';
let login = new logincontrol();

login.submit.addEventListener('click',function(){
    var userhu = login.username.value;
    var passhu = login.password.value;
    login.loginFunc(userhu,passhu);
    
}); 









