import { httpClient } from "./httpClient.js";

export default class LoginClass extends httpClient {
    constructor(x) {
        console.log('Nagload na ang "Login"..');
        super();

        this.loginURL = x.loginURL;

        this.btnLogin = document.getElementById('login'); 
    }
    
    async getUsername() {
        return await this.getRequest(this.loginUrl);
      }
    
    async getPassword() {
        return await this.getRequest(this.loginUrl);
      }

}