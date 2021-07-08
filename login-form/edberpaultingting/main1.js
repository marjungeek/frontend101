import LoginForm from "./LoginForm.js";

console.log('Application was loaded...');
//console.log("Try on Incognito4");
//For some reason, changes on js files do not update on this exercise.
//I need to clear cache or use incognito everytime for it to update on browser
//Only the css and html files are updated if I refresh the browser

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
