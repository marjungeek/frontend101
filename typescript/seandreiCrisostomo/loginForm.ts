import { LoginApiResponse, LoginFormOptions } from "./interfaces";
import { LogInApiRequest } from "./loginApiRequest";

export default class LogInForm extends LogInApiRequest{
    public $logInUsername: HTMLInputElement;
    public $logInPassword: HTMLInputElement;
    
    public $btnLogin: HTMLButtonElement;
    public $btnToggle: HTMLSpanElement;

    apiURL: string;

    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions){
        console.log('LoginForm was loaded... ');
        super();

        this.apiURL = options.apiURL;

        this.$logInUsername = document.getElementById('username') as HTMLInputElement;
        this.$logInPassword = document.getElementById('password') as HTMLInputElement;

        this.$btnLogin = document.getElementById('btnSubmit') as HTMLButtonElement;
        this.$btnToggle = document.getElementById('btnToggle') as HTMLSpanElement;

        this.success = options.success;
        this.error = options.error;

    }

    async sendLogIn(): Promise<LoginApiResponse|any> {
        const username = this.$logInUsername.value;
        const password = this.$logInPassword.value;

        return await super.ApiRequest ({
            method: 'post',
            endpoint: this.apiURL,
            headers: { 'Content-type': 'application/json'},
            requestBody: JSON.stringify({username, password}),
            responseType: 'json'
        });
    }

    listener() {
        var _this = this;

        this.$btnLogin.addEventListener('click', async function (event) {
            event.preventDefault();

            if(_this.$logInUsername.value !== '' && _this.$logInPassword.value !== '') {
                let response = await _this.sendLogIn();
                _this.validateLogin(response);
            }
            
        });

        this.$btnToggle.addEventListener('click', function (event) {
            event.preventDefault();

            if (_this.$logInPassword.type === 'password') {
                _this.$logInPassword.type = 'text';
                this.innerHTML = 'Hide Password';
            } else {
                _this.$logInPassword.type = 'password';
                this.innerHTML = 'Show Password';
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
