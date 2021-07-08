import LoginClass from './LoginClass.js';

console.log("OK");

const loginClass = new LoginClass({
    loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    loginClass.btnLogin.addEventListener('click',async function(event) {
    event.preventDefault();

    let username = loginClass.user.value;
    let password = loginClass.pass.value;

    let response = await loginClass.postRequest('http://127.0.0.1:8080/login.html', { username , password });
    
    console.log(response);

    if (username == "ghuser" && password == "secret") {
        alert("Login Success")
    }
    else{
        alert("Login Failed")
    }

    });
})();