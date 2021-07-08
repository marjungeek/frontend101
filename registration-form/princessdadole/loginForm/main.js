import LoginForm from "./LoginForm.js";
console.log("Application Loaded..");
const loginForm = new LoginForm({
    url = "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login"
})

loginForm.btnSubmit.addEventListener('click',async function(event){
    event.preventDefault();
     let user  = loginForm.txtEmail;
     let password = loginForm.txtPassword;

     let response = await regForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { user, password });

     console.log(response);
})