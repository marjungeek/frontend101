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

    let response = await loginClass.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username , password });
    
    console.log(response);

    if (response.statusCode === 200) {
        alert("Login Success");
        window.location.pathname = 'frontend101/login-form/paulalopez/extra.html';
    }
    else if (username == "" && password == "") {
        alert("Please enter username and password!")
    }
    else{
        alert("Login Failed")
    }

    });
})();
