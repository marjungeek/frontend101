import { HttpClient } from "./HttpClient";

export default class LoginForm extends HttpClient{
    loginAPI:string;
    inUsername:HTMLInputElement;
    inPassword:HTMLInputElement;
    inBtnLogin:HTMLButtonElement;

    constructor(option){
        console.log("Logform was loaded.");
        super();
        this.loginAPI = option.loginAPI;
        this.inUsername = document.getElementById("usernameID")! as HTMLInputElement;
        this.inPassword = document.getElementById("passwordID")! as HTMLInputElement;
        this.inBtnLogin = document.getElementById("test-login")! as HTMLButtonElement;
    }
}