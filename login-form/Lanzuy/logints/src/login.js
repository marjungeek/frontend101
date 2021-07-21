"use strict";
exports.__esModule = true;
var loginform_js_1 = require("./loginform.js");
console.log('login loaded');
var loginForm = new loginform_js_1["default"]({
    loginApi: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function () {
        console.log('success');
    },
    error: function () {
        console.log('success');
    }
});
loginForm.listener();
