import { LoginApiResponse, LoginFormOptions } from "./Interface";
import HttpClient from "./HttpClient";

export default class LogInClass extends HttpClient {
    public $Username: HTMLInputElement;
    public $Password: HTMLInputElement;
    public $btnLogIn: HTMLButtonElement;

    url: string;

    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions){
        super();

        this.$Username = document.getElementById('username')! as HTMLInputElement;
        this.$Password = document.getElementById('password')! as HTMLInputElement;

        this.$btnLogIn = document.getElementById('submit')! as HTMLButtonElement;

        this.success = options.success;
        this.error = options.error;

        this.url = options.url;
    }

    async httpRequest(){
        console.log('Hello and Welcome!!!');
    }

    async sendLogIn(): Promise<LoginApiResponse|any> {
        const username = this.$Username.value;
        const password = this.$Password.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.url,
            headers: {'Content-Type': 'application/json'},
            requestBody: JSON.stringify({username, password}),
            responseType: 'json'
        });
    }

    listener(){
        var _this = this;

        this.$btnLogIn.addEventListener('click', async function(event){
            event.preventDefault();

            if(_this.$Username.value !== '' && _this.$Password.value !== ''){
                let response = await _this.sendLogIn();
                _this.validateLogIn(response);
            }
        });
    }

    validateLogIn(response: LoginApiResponse){
        if(response.statusCode == 200){
            this.success();
        } else{
            this.error();
        }
    }
}