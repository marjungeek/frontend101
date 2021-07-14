import HttpClient from './HttpClient.js';

export default class LoginForm extends HttpClient {
  constructor(options) {
    console.log('LoginForm');
    super();

    this.$username = document.getElementById('inUsername');
    this.$password = document.getElementById('inPassword');
    this.$btnLogin = document.getElementById('btnLogin');
    this.$btnToggle = document.getElementById('toggle');

    this.url = options.url;

    this.success = options.success;
    this.error = options.error;
  }

  async httpRequest() {
    console.log('hello...');
  }

  async sendLogin() {
    const username = this.$username.value;
    const password = this.$password.value;

    // this.httpRequest(); // calls LoginForm.httpRequest()
    // super.httpRequest(); // calls HttpClient.httpRequest()

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
        _this.#validateLogin(response);
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

  // private declaration
  #validateLogin(response) {
    if (response.statusCode === 200) {
      this.success();
    } else {
      this.error();
    }
  }

}