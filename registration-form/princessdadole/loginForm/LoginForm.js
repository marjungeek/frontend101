import { HttpClient } from "./HttpClient";
export default class LoginForm extends HttpClient{
    constructor(options){
        console.log("Login Form Loaded successfully...")
        super();
        this.url = options.url;
        this.txtEmail =  document.getElementById("email");
        this.txtPassword  = document.getElementById("password");

    }
}