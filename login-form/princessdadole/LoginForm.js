import { HttpClient } from "./HttpClient.js";
export default class LoginForm extends HttpClient{
    constructor(options){
        console.log("Login Form Loaded successfully...")
        super();
        this.url = options.url;
        this.txtEmail =  document.getElementById("user");
        this.txtPassword  = document.getElementById("password");
        this.btnSubmit = document.getElementById("submit");

    }
}