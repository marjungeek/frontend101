"use strict";
exports.__esModule = true;
var loginForm_1 = require("./loginForm");
console.log('Application was loaded... ');
var loginForm = new loginForm_1["default"]({
    apiURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function () {
        alert('success');
    },
    error: function () {
        alert('error');
    }
});
loginForm.listener();
