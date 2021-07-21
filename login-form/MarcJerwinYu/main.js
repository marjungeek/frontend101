"use strict";
exports.__esModule = true;
var Regform_1 = require("./Regform");
var login = new Regform_1["default"]({
    url: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function () {
        alert('success');
    },
    error: function () {
        alert('error');
    }
});
login.listener();
