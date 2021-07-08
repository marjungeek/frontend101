import { httpclient } from "./httpclient.js";

export default class LoginForm extends httpclient {
  constructor() {
    console.log('login form was loaded...');
    super();

    // class property - sort of like configuration
    this.username = document.getElementById('username');
    this.password = document.getElementById('password');
    this.loginButton = document.getElementById('loginButton');
  }
}