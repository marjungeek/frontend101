import LogInForm from "./loginForm.js";

console.log('Application was loaded... ');

(async function() {  
const loginForm = new LogInForm ({
    apiURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

    loginForm.btnSubmit.addEventListener('click', async function(event) {
        event.preventDefault();//para hindi mag load or submit or magredirect

        let username = loginForm.logInUsername.value;
        let password = loginForm.logInPassword.value;

        let response = await loginForm.postRequest( 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });

        console.log(response);

    });

})();

