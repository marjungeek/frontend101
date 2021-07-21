import { httpClient } from "./httpClient.js";

export default class loginForm extends httpClient{
   
    loginUrl: string;
    txtUsername: HTMLInputElement;
    txtPassword: HTMLInputElement;
    btnSubmit: HTMLInputElement; 

    constructor(options){
        console.log('loginForm was loaded...')
        super();

        // class property
        this.loginUrl = options.loginUrl; 

        this.txtUsername = document.getElementById('username')! as HTMLInputElement;
        this.txtPassword = document.getElementById('password')! as HTMLInputElement;

        this.btnSubmit = document.getElementById('loginbtn')! as HTMLInputElement;
    }
}