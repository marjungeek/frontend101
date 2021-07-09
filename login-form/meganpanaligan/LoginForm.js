import { HttpClient } from "./HttpClient.js";

export default class LoginForm extends HttpClient {
    constructor(text) {
        console.log('LoginForm was loaded..');
        super();

        this.loginUrl = text.loginUrl;

        this.txtUserName = document.getElementById('username');
        this.txtPassword = document.getElementById('password');
        this.btnSubmit = document.getElementById('btn');

    }
}