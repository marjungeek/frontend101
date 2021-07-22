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
import { HttpClientTS } from './HttpClient.js';
var LoginFormTS = /** @class */ (function (_super) {
    __extends(LoginFormTS, _super);
    // public $btnToggle: HTMLSpanElement;
    function LoginFormTS() {
        var _this = _super.call(this) || this;
        console.log("LoginForm Loaded.");
        _this.username = document.getElementById('UsernameID');
        _this.password = document.getElementById('PasswordID');
        _this.$btnLogin = document.getElementById('LoginBTN');
        return _this;
        // this.$btnLogin = document.getElementById('LoginBTN')! as HTMLButtonElement;
        // //button modal for success hehe :D
        // this.CloseButton = document.getElementById('CloseBTN');
    }
    // elements(): void{
    //     let $username = document.getElementById('UsernameID')! as HTMLInputElement;
    //     let $password = document.getElementById('PasswordID')! as HTMLInputElement;
    //     let $btnLogin = document.getElementById('LoginBTN')! as HTMLButtonElement;
    //     this.getUserPass($username.value, $password.value);
    // }
    LoginFormTS.prototype.getUserPass = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(username == '' && password == '')) return [3 /*break*/, 1];
                        // document.getElementById('missing').style.display='block'
                        // document.getElementById('invalid').style.display='none'
                        alert("Missing inputs!");
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username: username, password: password })];
                    case 2:
                        response = _a.sent();
                        console.log(response.statusCode);
                        // const result = await this.postRequest( 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{ $username, $password });
                        // console.log(result);
                        // var stat = result.statusCode;
                        // var stat = result.statusCode;
                        // console.log(stat);
                        if (response.statusCode == 200) {
                            alert("success");
                            //     document.getElementById('modalpopup').style.display='block'
                            // //hides other modals
                            //     // hides the Form
                            //     document.getElementById('ContainerForm').style.display='none'
                            //     //hides the invalid credentials ONLY if entered wrong first
                            //     document.getElementById('invalid').style.display='none'
                            //     //hides the Missing inputs ONLY if entered wrong first
                            //     document.getElementById('missing').style.display='none'
                        }
                        else {
                            alert("invalid");
                            // document.getElementById('invalid').style.display='block'
                            // //hides only if missing fields are shown.
                            // document.getElementById('missing').style.display='none'
                            return [2 /*return*/, false];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //end of getUserPass()
    return LoginFormTS;
}(HttpClientTS)); //end of LoginFormTS block scope
export default LoginFormTS;
//1. input fields ghuser secret
//2. button executes getuserpass reading the input fields typed
//3. validation
//additional: post request comes from httpclient
