import { HttpClient } from "./HttpClient.js";

export default class LogInClass extends HttpClient{
    LoginAPI: string
    txtUsername: any
    txtPassword: any
    btnSubmit: any

    constructor(options){
        console.log("Log In Form is Loaded");
        super();

        this.LoginAPI = options.LoginAPI;
        this.btnSubmit = document.getElementById("submit");
        this.txtUsername = document.getElementById("username");
        this.txtPassword = document.getElementById("password");
    }
}