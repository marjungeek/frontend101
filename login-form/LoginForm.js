import { HttpClient } from "./HttpClient.js";

export default class loginForm extends HttpClient{
    constructor(options){
        console.log('loginForm was loaded...')
        super();

        // class property
        this.loginUrl = options.loginUrl;

        this.txtUsername = document.getElementById('username');
        this.txtPassword = document.getElementById('password');

        this.btnSubmit = document.getElementById('loginbtn');
    }
}