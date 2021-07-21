import { LoginApiResponse, LoginFormOptions } from "./interfaces";
import HttpClient from "./HttpClient";

export default class LoginForm extends HttpClient {
    public $username: HTMLInputElement;
    public $password: HTMLInputElement;
    public $btnSubmit: HTMLButtonElement;

    url: string;

    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions) {
        console.log('LoginForm was loaded..');
        super();

        this.$username = document.getElementById('username')! as HTMLInputElement;
        this.$password = document.getElementById('password')! as HTMLInputElement;
        this.$btnSubmit = document.getElementById('btn')! as HTMLButtonElement;

        this.success = options.success;
        this.error = options.error;
        this.url = options.url;
    }
    
    async httpRequest() {
        console.log('HttpRequest....');
    }
    async sendLogin(): Promise<LoginApiResponse|any> {
        const username = this.$username.value;
        const password = this.$password.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.url,
            headers: { 'Content-Type': 'application/json' },
            requestBody: JSON.stringify ({ username, password }),
            responseType: 'json'
        });
    }
    
listener() {
    var _this = this;

    this.$btnSubmit.addEventListener('click', async function(event) {
    
        event.preventDefault();

        if (_this.$username.value !== '' && _this.$password.value !== '') {
            let response = await _this.sendLogin();
            _this.validateLogin(response);
        }
    });
    
    private validateLogin(response: LoginApiResponse) {
        if (response.statusCode === 200) {
            this.success();
            console.log('Success');
        } else {
            this.error();
            console.log('Error!');
        }
        }
    }
}