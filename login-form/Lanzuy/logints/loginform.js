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
Object.defineProperty(exports, "__esModule", { value: true });
var loginclient_js_1 = require("./loginclient.js");
var loginform = /** @class */ (function (_super) {
    __extends(loginform, _super);
    function loginform(options) {
        var _this = this;
        console.log('loginForm was loaded');
        _this = _super.call(this) || this;
        _this.loginApi = options.loginApi;
        _this.txtUserame = document.getElementById('userName');
        _this.txtPassword = document.getElementById('passWord');
        _this.btnLogin = document.getElementById('logIn');
        return _this;
    }
    return loginform;
}(loginclient_js_1.loginclient));
exports.default = loginform;
