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
exports.MylogForm = void 0;
var HTTPClient_1 = require("./HTTPClient");
var MylogForm = /** @class */ (function (_super) {
    __extends(MylogForm, _super);
    function MylogForm(options) {
        var _this = _super.call(this) || this;
        _this.myRandom = function () {
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            _this.total = num1 + num2;
            document.getElementById("Q").innerHTML = "" + num1 + "+" + num2 + "?";
            //return total;
        };
        _this.myCheck = function () {
            var y = document.getElementById("robot");
            if (y.style.display === "block") {
                y.style.display = "none";
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success disabled";
                //return NaN;
            }
            else {
                y.style.display = "block"; //show
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success";
                _this.myRandom();
            }
        };
        console.log('logForm was loaded...');
        _this.postURL = options.postURL;
        _this.total = NaN;
        _this.userName = document.getElementById("UserName");
        _this.userNamediv = document.getElementById("UserName-div");
        _this.password = document.getElementById("password");
        _this.passworddiv = document.getElementById("password-div");
        _this.btnSubmit = document.getElementById('test-submit');
        _this.checkbox = document.getElementById('checkbox');
        _this.clear = document.getElementById('reload');
        _this.ans = document.getElementById("Ans");
        return _this;
    }
    return MylogForm;
}(HTTPClient_1.MyHttpClient));
exports.MylogForm = MylogForm;
