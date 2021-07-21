import { LoginApiResponse, RegFormOptions } from "./Interfaces";
import HttpClient from "./HTTPClient";

export default class Regform extends HttpClient {
    $username : HTMLInputElement;
    $password : HTMLInputElement;

    $btnLogin : HTMLButtonElement;
    $isCheck : HTMLInputElement;

    url : string;

    success: () => void;
    error: () => void;

    constructor(options : RegFormOptions) {
        super();

        this.$username = document.getElementById('username')! as HTMLInputElement;
        this.$password = document.getElementById('password')! as HTMLInputElement;

        this.$btnLogin = document.getElementById('btn-login')! as HTMLButtonElement;

        this.$isCheck = document.getElementById('rememberMe')! as HTMLInputElement;

        this.success = options.success;
        this.error = options.error;

        this.url = options.url;
    }

    async httpRequest() {
        console.log('hello...')
    }

    async sendLogin(): Promise<LoginApiResponse|any> {
        const username = this.$username.value;
        const password = this.$password.value;

        return await super.httpRequest({
            method : 'post',
            endpoint : this.url,
            headers : { 'content-Type' : 'application/json'},
            requestBody : JSON.stringify({ username, password}),
            responseType : 'json'
        });
    }

    listener() {
        var _this = this;

        this.$btnLogin.addEventListener('click', async function(event){
            event.preventDefault();
            if (_this.$username.value !== '' && _this.$password.value !== '') {
                let response = await _this.sendLogin();
                _this.validateLogin(response);
            }
        });

        this.$isCheck.addEventListener('click', async function(event){
            event.preventDefault();
            
            if (_this.$username.value !== '' && _this.$isCheck.checked) {
                localStorage.name = _this.$username.value;
                localStorage.checkbox = _this.$isCheck.value;
            }
        })
    }

    private validateLogin(response : LoginApiResponse) {
        if (response.statusCode === 200) {
            this.success();
        } else {
            this.error();
        }
    }
}