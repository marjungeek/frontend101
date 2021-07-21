import { TsLogin } from "./tslogin-form.js";
console.log("TS Main loaded");
var loginObbj = new TsLogin({
    url: "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
    success: function () {
        console.log("Login Success!");
    },
    error: function () {
        alert('error');
    }
});
loginObbj.listener();
