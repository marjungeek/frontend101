"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HttpClient_js_1 = require("./HttpClient.js");
var LogForm = /** @class */ (function (_super) {
    __extends(LogForm, _super);
    function LogForm(text) {
        var _this = this;
        console.log('LogForm was loaded...');
        _this = _super.call(this) || this;
        var username = document.getElementById('uname');
        var password = document.getElementById('pword');
        var btnLogin = document.getElementById('btnsubmit');
        function sendLogin(username, password) {
            return;
        }
        var response = sendLogin(username.value, password.value);
        console.log(response);
        return _this;
        //class property - sort of like configuration
        //this.logURL = text.logURL;
        // this.txtUName = document.getElementById('uname');
        // this.txtPword = document.getElementById('password');
        // this.btnSubmit = document.getElementById('submit');
    }
    return LogForm;
}(HttpClient_js_1.HttpClient));
exports["default"] = LogForm;
