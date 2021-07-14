import { loginHttpRequest } from "./loginApiRequest.js";

export default class LogInForm extends loginHttpRequest {
    constructor(options) {
      console.log('LoginForm was loaded...');
      super();

      this.apiURL = options.apiURL;

      this.logInUsername = document.getElementById('username');
      this.logInPassword = document.getElementById('password');

      this.btnSubmit = document.getElementById('test-submit');

    }

    async getApiResponse() {
        return await this.getRequest(this.apiURL);
    }

    async postApiResponse () {
        return await this.postRequest(this.apiURL);
    }

}
