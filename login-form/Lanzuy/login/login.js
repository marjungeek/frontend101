import loginform from "./loginform.js"
console.log('login loaded')
const loginForm = new loginform({
    loginApi:'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});



(async function(){
loginForm.btnLogin.addEventListener('click', async function(event){

event.preventDefault();
let username = loginForm.txtUserame.value;
let password = loginForm.txtPassword.value;



let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{ username, password});
console.log(response);
 if(username == '' || password == '' ){
     alert("Enter Username and Password")
 }
 else if (response.statusCode == '200'){
    
    document.location.href = 'http://www.google.com';
 }else{
     alert("Login Fail");
 }  

});
})();
