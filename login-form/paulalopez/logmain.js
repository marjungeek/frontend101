import Login from "./Login.js";

login.btnLogin.addEventListener('click',async function(event) {
    event.preventDefault();

    let user = login.username.value;
    let password = login.password.value;

    let response = await login.postRequest('http://127.0.0.1:8080/login.html', {user, password});

    console.log(response);
})