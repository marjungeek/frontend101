"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = require("./HttpClient.js");
class LogForm extends HttpClient_1.HttpClient {
    constructor(options) {
        console.log('LogForm was loaded');
        super();
        this.$userUrl = options.userUrl;
        this.$userName = document.getElementById("userNameControl");
        this.$password = document.getElementById("passwordControl");
        this.$btnSubmit = document.getElementById("submit");
        this.success = options.success;
        this.error = options.error;
    }
    sendLogin() {
        const _super = Object.create(null, {
            httpRequest: { get: () => super.httpRequest }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const username = this.$userName.value;
            const password = this.$password.value;
            return yield _super.httpRequest.call(this, {
                method: 'post',
                endpoint: this.$userUrl,
                headers: { 'Content-Type': 'application/json' },
                requestBody: JSON.stringify({ username, password }),
                responseType: 'json'
            });
        });
    }
    listener() {
        var _this = this;
        this.$btnSubmit.addEventListener('click', function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                event.preventDefault();
                if (_this.$userName.value !== "" && _this.$password.value !== "") {
                    let response = yield _this.sendLogin();
                    _this.validateLogin(response);
                }
            });
        });
    }
    validateLogin(response) {
        if (response.statusCode == 200) {
            this.success();
        }
        else {
            this.error();
        }
    }
}
exports.default = LogForm;
