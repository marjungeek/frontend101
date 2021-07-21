import { LoginApiResponse, LoginFormOptions } from "./tsInterfaces";
import TsHttpClient from "./tsHttpClient";

export class TsLogin extends TsHttpClient{
    //Initializing??
    username: HTMLInputElement;
    password: HTMLInputElement;
    btnLogin: HTMLButtonElement;

    url: string;

    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions){//super(); MUST come first before other codes
        super();
        console.log("TS login form loaded");

        this.username = document.getElementById("username")! as HTMLInputElement;
        this.password = document.getElementById("password")! as HTMLInputElement;
        this.btnLogin = document.getElementById("loginButton")! as HTMLButtonElement;

        this.url = options.url;

        this.success = options.success;
        this.error = options.error;
    }

    async sendLogin(): Promise<LoginApiResponse|any> {
        const username = this.username.value;
        const password = this.password.value;
    
        return await super.httpRequest({
          method: 'post',
          endpoint: this.url,
          headers: { 'Content-Type': 'application/json' },
          requestBody: JSON.stringify({ username, password }), // { username: username, password: password } -- es6
          responseType: 'json'
        });
      }
    
     listener() {
        var _this = this; // temp set to the Class
    
        this.btnLogin.addEventListener('click', async function(event) {
          event.preventDefault();
    
          if (_this.username.value !== '' && _this.password.value !== '') {
            console.log(_this.username.value, _this.password.value);
            let response = await _this.sendLogin(); 
            _this.validateLogin(response);
          }
        });
      }

    private validateLogin(response: LoginApiResponse) {
    if (response.statusCode === 200) {
      this.success();
    } else {
      this.error();
    }
  }
}