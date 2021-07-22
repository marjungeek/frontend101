"use strict";
//dummy file
var login = /** @class */ (function () {
    function login() {
        // let user:HTMLElement = document.getElementById("UsernameID");
        // let UsernameID:HTMLInputElement = document.getElementById("UsernameID");
        this.user = document.querySelector('UsernameID');
        this.pass = document.querySelector('PasswordID');
        this.submit = document.querySelector('LoginBTN');
    } //end of constructor
    login.prototype.getUserPass = function (UserEvent, UserPass) {
        if (UserEvent == 'ghuser' && UserPass == 'secret') {
            console.log('yes');
        }
    };
    return login;
}()); // end of login class
var LogCont = new login();
LogCont.submit.addEventListener('click', function () {
    var UserEvent = LogCont.user.value;
    var UserPass = LogCont.pass.value;
    LogCont.getUserPass(UserEvent, UserPass);
});
// console.log(input.value);
// user.innerText = "Hello world!";
