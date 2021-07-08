import LoginForm from "./LoginForm.js";

console.log('Application was loaded...');

const loginForm = new LoginForm();

// self-invoking function
(async function() {
  loginform.loginButton.addEventListener('click', async function(event) {
    event.preventDefault();

    console.log("Clicked!");

    let user = loginForm.username.value;
    let password = loginForm.password.value;
    //let api = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login';

    let response = await loginForm.postRequest('http://localhost:8080/login.html', { user, password });

    console.log(response);
  });
})();
