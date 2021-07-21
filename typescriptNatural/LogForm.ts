import { LoginFormOptions, LoginApiResponse } from "./interface";
import { HttpClient } from "./HttpClient";

export default class LogForm extends HttpClient {

    $userUrl: string;
    $userName: HTMLInputElement;
    $password: HTMLInputElement;
    $btnSubmit: HTMLButtonElement;
    success: () => void;
    error: () => void;
    
  constructor(options: LoginFormOptions) {
    console.log('LogForm was loaded');
    super();

    this.$userUrl = options.userUrl;
    this.$userName = document.getElementById("userNameControl")! as HTMLInputElement;
    this.$password = document.getElementById("passwordControl")! as HTMLInputElement;
    this.$btnSubmit = document.getElementById("submit")! as HTMLButtonElement;
    this.success = options.success;
    this.error = options.error;
  }

  async sendLogin(): Promise<LoginApiResponse|any>{
    const username = this.$userName.value;
    const password = this.$password.value;

    return await super.httpRequest({
      method: 'post',
      endpoint: this.$userUrl,
      headers: { 'Content-Type': 'application/json'},
      requestBody: JSON.stringify({ username, password}),
      responseType: 'json'
    });
  }

  listener() {
    var _this = this;
    this.$btnSubmit.addEventListener('click',  async function(event) {
      event.preventDefault();

      if (_this.$userName.value !== "" && _this.$password.value !== "") {

        let response = await _this.sendLogin();
        _this.validateLogin(response);
      }
  
    });
  }
  validateLogin(response: LoginApiResponse){
    if (response.statusCode == 200) {
      this.success();
    } else {
      this.error();
    }
  }
  
}