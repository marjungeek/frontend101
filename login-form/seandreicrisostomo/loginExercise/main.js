import LogInForm from "./loginForm.js";

console.log('Application was loaded... ');

(async function() {  
const loginForm = new LogInForm ({
    apiURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

    loginForm.btnSubmit.addEventListener('submit', async function(event) {
        event.preventDefault();

        let username = loginForm.logInUsername.value;
        let password = loginForm.logInPassword.value;

        let response = await loginForm.postRequest( 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });

        console.log(response);

        if (response == 200) {
            console.log("Success");
        }else{
            console.log("error");
        }

    });
})();