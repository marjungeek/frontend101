import LoginClass from '../LoginClass.js';

console.log("OK");

const loginClass = new LoginClass({
    loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){

    let username = await loginClass.getUsername();
    loginClass.loadUser(users);

    loginClass.btnLogin.addEventListener('click',async function(event) {
    event.preventDefault();

    let user = document.getElementById('uname');
    let password = document.getElementById('pwd');

    let response = await loginClass.postRequest('http://127.0.0.1:8080/login.html', { user , password });

    console.log(response);
    });
})();