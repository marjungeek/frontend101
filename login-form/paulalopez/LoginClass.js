import { httpClient } from "./httpClient.js";

export default class LoginClass extends httpClient {
    constructor(x) {
        console.log('Nagload na ang "Login"..');
        super();
        this.loginURL = x.loginURL;
        this.user = document.getElementById('uname');
        this.pass = document.getElementById('pwd');
        this.btnLogin = document.getElementById('login'); 
    }

}