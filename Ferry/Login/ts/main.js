"use strict";
exports.__esModule = true;
var login_1 = require("./login");
var login = new login_1["default"]({
    url: 'http://127.0.0.1:5500/Ferry/Login/ts/index.html',
    success: function () {
        alert('success');
    },
    error: function () {
        alert('error');
    }
});
login.listener();
