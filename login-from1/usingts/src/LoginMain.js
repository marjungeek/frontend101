"use strict";
exports.__esModule = true;
var LoginForm_1 = require("./LoginForm");
var login = new LoginForm_1["default"]({
    url: 'http://localhost:7071/api/login',
    success: function () {
        alert('success');
    },
    error: function () {
        alert('error');
    }
});


login.listener();
