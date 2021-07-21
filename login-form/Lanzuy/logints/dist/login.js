"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loginform_js_1 = __importDefault(require("./loginform.js"));
console.log('login loaded');
var loginForm = new loginform_js_1.default({
    loginApi: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function () {
        console.log('success');
    },
    error: function () {
        console.log('success');
    }
});
loginForm.listener();
