import { LoginApiResponse, LoginFormOptions } from "./interfaces";

import HttpClient from "./HttpClient";

export default class LoginForm extends HttpClient {
  public $username: HTMLInputElement; 
  public $password: HTMLInputElement;

  public $btnLogin: HTMLButtonElement;
  public $btnToggle: HTMLSpanElement;

  url: string; // by default properties are public

  success: () => void;
  error: () => void;

  // constuctor(protected $username, private $password, $btnLogin, $btnToggle, url, success, error)
  constructor(options: LoginFormOptions) {
    super();

    this.$username = document.getElementById('inUsername')! as HTMLInputElement;
    this.$password = document.getElementById('inPassword')! as HTMLInputElement;

    this.$btnLogin = document.getElementById('btnLogin')! as HTMLButtonElement;
    this.$btnToggle = document.getElementById('toggle')! as HTMLSpanElement;

    this.success = options.success;
    this.error = options.error;

    this.url = options.url;
  }

  async httpRequest() {
    console.log('hello...');
  }

  async sendLogin(): Promise<LoginApiResponse|any> {
    const username = this.$username.value;
    const password = this.$password.value;

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

    this.$btnLogin.addEventListener('click', async function(event) {
      // console.log(this); // element     
      // console.log(_this); // class LoginForm or HttpClient

      event.preventDefault(); // dont do element's default event process

      if (_this.$username.value !== '' && _this.$password.value !== '') { // 
        // console.log(_this.$username.value, _this.$password.value);
        let response = await _this.sendLogin(); 
        _this.validateLogin(response);
      }
    });

    this.$btnToggle.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (_this.$password.type === 'password') {
        _this.$password.type = 'text'; // `_this` refers to the Class
        this.innerHTML = 'Hide Password'; // `this` refers to the element id=toggle
      } else {
        _this.$password.type = 'password';
        this.innerHTML = 'Show Password';
      }
    })
  }

  // private declaration #validateLogin (JS)
  private validateLogin(response: LoginApiResponse) {
    if (response.statusCode === 200) {
      this.success();
    } else {
      this.error();
    }
  }
}