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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import HttpClient from "./HttpClient.js";
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    // constuctor(protected $username, private $password, $btnLogin, $btnToggle, url, success, error)
    function LoginForm(options) {
        var _this_1 = _super.call(this) || this;
        _this_1.$username = document.getElementById('inUsername');
        _this_1.$password = document.getElementById('inPassword');
        _this_1.$btnLogin = document.getElementById('btnLogin');
        _this_1.$btnTwit = document.getElementById('twitter');
        _this_1.$btnFb = document.getElementById('facebook');
        _this_1.success = options.success;
        _this_1.error = options.error;
        _this_1.url = options.url;
        return _this_1;
    }
    LoginForm.prototype.httpRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('hello...');
                return [2 /*return*/];
            });
        });
    };
    LoginForm.prototype.sendLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.$username.value;
                        password = this.$password.value;
                        return [4 /*yield*/, _super.prototype.httpRequest.call(this, {
                                method: 'post',
                                endpoint: this.url,
                                headers: { 'Content-Type': 'application/json' },
                                requestBody: JSON.stringify({ username: username, password: password }),
                                responseType: 'json'
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginForm.prototype.listener = function () {
        var _this = this; // temp set to the Class
        this.$btnLogin.addEventListener('click', function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // console.log(this); // element     
                            // console.log(_this); // class LoginForm or HttpClient
                            event.preventDefault(); // dont do element's default event process
                            if (!(_this.$username.value !== '' && _this.$password.value !== '')) return [3 /*break*/, 2];
                            return [4 /*yield*/, _this.sendLogin()];
                        case 1:
                            response = _a.sent();
                            _this.validateLogin(response);
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
        this.$btnTwit.addEventListener("click", function (event) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    event.preventDefault();
                    location.href = "https://twitter.com/login?lang=en";
                    return [2 /*return*/];
                });
            });
        });
        this.$btnFb.addEventListener("click", function (event) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    event.preventDefault();
                    location.href = "https://www.facebook.com/";
                    return [2 /*return*/];
                });
            });
        });
    };
    // private declaration #validateLogin (JS)
    LoginForm.prototype.validateLogin = function (response) {
        if (response.statusCode === 200) {
            this.success();
        }
        else {
            this.error();
        }
    };
    return LoginForm;
}(HttpClient));
export default LoginForm;
