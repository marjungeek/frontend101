import Login from './login.js';

console.log('Login Page Successfully Loaded...')
let login = new Login();

login.submit.addEventListener('click',function(){
    var un = login.userName.value;
    var pswd = login.passWord.value;
    login.getInput(un,pswd);
});