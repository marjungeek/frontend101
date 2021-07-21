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
import { HttpClient } from "./HttpClient.js";
console.log('login.ts LOADED!');
var login = /** @class */ (function (_super) {
    __extends(login, _super);
    function login(options) {
        var _this = _super.call(this) || this;
        _this.url = options.url;
        _this.user = document.getElementById('user');
        _this.pass = document.getElementById('pass');
        _this.subButton = document.getElementById('subButton');
        return _this;
    }
    login.prototype.listener = function () {
        this.subButton.addEventListener('click', function (event) {
            event.preventDefault();
            alert("button clicked");
        });
    };
    return login;
}(HttpClient));
export default login;
