import { loginclient } from "./loginclient.js";
import { LoginApiResponse, LoginFromOptions } from "./interface";

export default class loginform extends loginclient {
    loginApi: string;
    public $txtUserame: HTMLElement;
    public $txtPassword: HTMLElement;
    public $btnLogin: HTMLElement;

    success: () => void;
    error: () => void;

    constructor(options: LoginFromOptions) {
        console.log('loginForm was loaded');
        super();
        this.loginApi = options.loginApi;
        this.$txtUserame = document.getElementById('userName')! as HTMLInputElement;
        this.$txtPassword = document.getElementById('passWord')! as HTMLInputElement;
        this.$btnLogin = document.getElementById('logIn')! as HTMLInputElement;
        this.success = options.success;
        this.error = options.error
    }
    async httpRequest() {
        console.log('Im in');
    }

    async sendLogin(): Promise<LoginApiResponse|any> {
        const username = this.$txtUserame.value;
        const password = this.$txtPassword.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.loginApi,
            headers: { 'Content-type': 'application/json' },
            requestBody: JSON.stringify({ username, password }),
            responseType: 'json'

        });

    }
    listener(){
        var _this = this;
        let response = await _this.sendLogin();

        this.$btnLogin.addEventListener('click', async function(event) {
            event.preventDefault;
            let stat :string = new response.statusCode

            if(_this.$txtUserame.value == ''|| _this.$txtPassword.value==''){
                alert("Enter Username and Password")
            }else if (stat == '200'){
                document.location.href = 'http://www.google.com';
            }else{
                alert("Login Fail");
            }
            
        })
    }
}