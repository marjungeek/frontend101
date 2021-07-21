import LoginForm from "./LoginForm.js";

console.log('Application was loaded..');

const loginForm = new LoginForm({
 loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
 
});

(async function(){
    
    loginForm.btnSubmit.addEventListener('click', async function(event){
        event.preventDefault();

        let username = loginForm.txtUsername.value;
        let password = loginForm.txtPassword.value;
            console.log('Username:',username);
            console.log('Password:',password);

        let response:any = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(response);

    if (response.statusCode == "200"){
        alert("Successfully Login");
        location.reload();
        loginForm.txtUsername.classList.remove('error');
        loginForm.txtPassword.classList.remove('error');
    }else{
        alert("Invalid User or Password");
        loginForm.txtUsername.classList.add('error');
        loginForm.txtPassword.classList.add('error');
        }
    });
})();