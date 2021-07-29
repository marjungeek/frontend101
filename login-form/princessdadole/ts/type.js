var username = document.getElementById('user');
var password = document.getElementById('password');
var btnLogin = document.getElementById('submit');
function doLogin(username, password) {
    return true;
}
var response = doLogin(username.value, password.value);
console.log(response);
