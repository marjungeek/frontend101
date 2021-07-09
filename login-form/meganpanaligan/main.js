import LoginForm from "./LoginForm.js";
console.log('Application was loaded..');
const loginForm = new LoginForm({
    loginUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    loginForm.btnSubmit.addEventListener('click', async function(event){
    event.preventDefault();

    let username = loginForm.txtUserName.value;
    let password = loginForm.txtPassword.value;
    

    let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});
    console.log(response);
    if (username == 'ghuser' && password == 'secret') {
        alert("Login Successful!");
    } else {
        alert("Invalid username or password!");
    }
});
})();

