import LoginForm from "./LoginForm.js";

console.log('Application was loaded...');

const loginForm = new LoginForm();

// self-invoking function
(async function() {
  loginForm.loginButton.addEventListener('click', async function(event) {
    event.preventDefault();

    console.log("Clicked!");

    let username = loginForm.username.value;
    let password = loginForm.password.value;
    let api = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login';

    let response = await loginForm.postRequest(api, { username, password });

    console.log(response);
  });
})();
