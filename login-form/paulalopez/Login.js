import { httpClient } from "./httpClient.js";

export default class Login extends httpClient {
    constructor() {
        console.log('Nagload na and "Login"');
        super();
        this.btnLogin = document.getElementById('login'); 
    }

    
}