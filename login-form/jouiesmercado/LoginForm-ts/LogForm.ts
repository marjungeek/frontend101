import { LoginApiResponse, LoginFormOptions } from "./interfaces";
import HttpClient from "./HttpClient"

export default class LogForm extends HttpClient {
    $username: HTMLInputElement;
    $password: HTMLInputElement;

    $btnLogin: HTMLButtonElement;
    $btnToggle: HTMLSpanElement;

    url: string;

    success: () => void;
    error: () => void;
    
    constructor(options: LoginFormOptions) {
        super();

        this.$username = document.getElementById('uname')! as HTMLInputElement;
        this.$password = document.getElementById('password')! as HTMLInputElement;

        this.$btnLogin = document.getElementById('btnsubmit')! as HTMLButtonElement;
        this.$btnToggle = document.getElementById('toggle')! as HTMLSpanElement;

        this.success = options.success;
        this.error = options.error;

        this.url = options.url;
    }

    async httpRequest() {
        console.log('Login');
    }

    async sendLogin(): Promise<LoginApiResponse|any> {
        const username = this.$username.value;
        const password = this.$password.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.url,
            headers: { 'Content-Type': 'application/json'},
            requestBody: JSON.stringify({ username, password }),
            responseType: 'json'
        });
    }

    listener() {
        var _this = this; // temp set to the class

        this.$btnLogin.addEventListener('click', async function(event) {
            event.preventDefault();

            if (_this.$username.value !== '' && _this.$password.value !== '') {
                let response = await _this.sendLogin();
                _this.validateLogin(response);
            }
        });

        this.$btnToggle.addEventListener('click', function(event) {
            event.preventDefault();

            if (_this.$password.type === 'password') {
                _this.$password.type = 'text';
                this.innerHTML = 'Hide Password';
            } else {
                _this.$password.type = 'password';
                this.innerHTML = 'Show Password';
            }
        })
    }

    //private declaration
    private validateLogin(response: LoginApiResponse) {
        if (response.statusCode === 200) {
            this.success();
        }else {
            this.error();
        }
    }
}