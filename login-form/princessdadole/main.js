import LoginForm from "./LoginForm.js";
console.log("Application Loaded..");
const loginForm = new LoginForm({
    url: "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login"
})

loginForm.btnSubmit.addEventListener('click',async function(event){
    event.preventDefault();
     let username  = loginForm.txtEmail.value;
     let password = loginForm.txtPassword.value;

     let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
     if (response.statusCode == 200){
        window.location.href = "/index.html"
     }else{
         alert("Invalid Credentials")
        console.log(response);
     }
     
})