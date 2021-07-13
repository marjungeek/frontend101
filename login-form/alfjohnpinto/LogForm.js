import { HttpClient } from "./HttpClient.js";

export default class LoginForm extends HttpClient{
    constructor(options){
        console.log('LogForm was loaded...');
        super();
        this.loginAPI = options.loginAPI;
        this.username = document.getElementById("usernameID");
        this.password = document.getElementById("passwordID");
        this.btnLogin = document.getElementById("test-login");
    }
}