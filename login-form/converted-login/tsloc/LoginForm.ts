import HttpClient from "./HttpClient";
import { LoginFormOptions } from "./interfaces";
import { LoginApiResponse } from "./interfaces";

export default class LoginForm extends HttpClient{
    
    username: HTMLInputElement;
    password: HTMLInputElement;
    btnLogin: HTMLButtonElement;
    url: string;
    error: () =>void;
    success:() =>void;

    constructor(options: LoginFormOptions){
        super();
        this.username = document.getElementById("usernameID")! as HTMLInputElement;
        this.password = document.getElementById("passwordID")! as HTMLInputElement;
        this.btnLogin = document.getElementById("test-login")! as HTMLButtonElement;
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
          requestBody: JSON.stringify({ username, password }), 
          responseType: 'json'
        });
      }
    listener(){
        var _this = this;
        this.btnLogin.addEventListener("click", async function(event){
            event.preventDefault();

            if (_this.username.value !== '' && _this.password.value !== '') { 
                let response = await _this.sendLogin(); 
                _this.validateLogin(response);
              }
        })
    }
    private validateLogin(response: LoginApiResponse) {
        if (response.statusCode === 200) {
          this.success();
        } else {
          this.error();
        }
      }
    

}