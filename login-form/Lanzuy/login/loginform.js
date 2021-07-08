import { loginclient } from "./loginclient.js";

export default class loginform extends loginclient{
    constructor(options){
    console.log('loginForm was loaded');
    super();
        this.loginApi = options.loginApi;
         this.txtUserame = document.getElementById('userName');
          this.txtPassword = document.getElementById('passWord');
         this.btnLogin = document.getElementById('logIn');

    }
}