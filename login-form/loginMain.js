import LoginForm from "./LoginForm.js";

console.log('Application was loaded..');

const loginForm = new LoginForm({
 loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
 
});

(async function(){

    loginForm.txtEmail.addEventListener('blur', function(event){
        event.preventDefault();

        const email1 = event.target.value;

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email1)) {
            console.log('valid email');
            loginForm.txtEmail.classList.remove('error');
        } else {
            loginForm.txtEmail.classList.add('error');
        }
    });

    loginForm.btnSubmit.addEventListener('click', async function(event){
        event.preventDefault();
        
        let username = loginForm.txtUsername.value;
        let password = loginForm.txtPassword.value;
            console.log('UserName:',username);
            console.log('password:',password);

        let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(response);
            alert("Successfully Log-in")
    });
})();