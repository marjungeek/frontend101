 import logincontrol from './logincontrol.js';
let login = new logincontrol();
console.log("login loaded");

login.submit.addEventListener('click',function(){
    const userhu = login.username.value;
    const passhu = login.password.value;
    login.loginFunc(userhu,passhu);
    
}); 
login.showpass.addEventListener('change', function() {
    const x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        console.log("Password is shown..");
      } else {
        x.type = "password";
        console.log("Password is hidden..");
      }
  });
  
  const clearbtn = function(){
    alert ("Hello World!");  
    login.clear.addEventListener('click',clearbtn);
  }