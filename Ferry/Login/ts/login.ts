import { LoginApiResponse, LoginFormOptions } from "./interfaces";
import HttpClient from "./httpclient";

export default class Login extends HttpClient{
    public $username: HTMLInputElement;
    public $password: HTMLInputElement;
    public $buttonLogin: HTMLButtonElement;
    // public $buttonSignUp: HTMLButtonElement;

    url: string;
    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions){
        super();

        this.$username = document.getElementById('userNameControl')! as HTMLInputElement;
        this.$password = document.getElementById('passwordControl')! as HTMLInputElement;
        this.$buttonLogin = document.getElementById('loginControl')! as HTMLButtonElement;
        // this.$buttonSignup = document.getElementById('signUpControl')! as HTMLButtonElement;

        this.url = options.url;
        this.success = options.success;
        this.error = options.error;
    }
    async httpRequest(){
        console.log('HttpRequest...')
    }
    async sendLogin(): Promise<LoginApiResponse|any>{
        const username = this.$username.value;
        const password = this.$username.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.url,
            headers: {'Content-Type': 'application/json'},
            requestBody: JSON.stringify({username,password}),
            responseType: 'json'
        });
    }
    listener(){
        var _this = this;
        
        this.$buttonLogin.addEventListener('click', async function(event){
            event.preventDefault();

            if(_this.$username.value !=='' && _this.$password.value !==''){
                let response = await _this.sendLogin();
                _this.validateLogin(response);
            }
        });
    }
    private validateLogin(response: LoginApiResponse){
        if(response.statusCode === 200){
            this.success();
        } else{
            this.error();
        }
    }

}