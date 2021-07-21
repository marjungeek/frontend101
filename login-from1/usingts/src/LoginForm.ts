import { LoginApiResponse, LoginFormOptions} from "./interfaces";
import newHttpClient from "./newHttpClient";

export default class LoginForm extends newHttpClient {
    public $username: HTMLInputElement;
    public $password: HTMLInputElement;
    
    public $btnLogin: HTMLButtonElement;
    public $btnToggle: HTMLSpanElement;

    url: string;

    success: () => void;
    error: () => void;

    constructor(options: LoginFormOptions) {
        super();
        this.$username = document.getElementById('usernameID')! as HTMLInputElement;
        this.$password = document.getElementById('PasswordID')! as HTMLInputElement;

        this.$btnLogin = document.getElementById('btnLoginID')! as HTMLButtonElement;
        this.$btnToggle = document.getElementById('toggleID')! as HTMLSpanElement;

        this.success = options.success;
        this.error = options.error;

        this.url = options.url
    }

    async httpRequest() {
        console.log('httpRequest in working ...');
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
        var _this = this;

        this.$btnLogin.addEventListener('click', async function(event) {
            event.preventDefault();

            if (_this.$username.value !== '' && _this.$password.value !== '') {
                let response = await _this.sendLogin();
                _this.validateLogin(response);
            }
        });

    this.$btnToggle.addEventListener('click', function(event) {
        event.preventDefault();

        if(_this.$password.type == 'password') {
            _this.$password.type = 'text';
            this.innerHTML = 'Hide Password';
        } else {
            _this.$password.type = 'password';
            this.innerHTML = 'Show Password';
        }
    })
    }
    private validateLogin(response: LoginApiResponse) {
        if(response.statusCode === 200) {
            this.success();
        } else {
            this.error();
        }
    }
}
