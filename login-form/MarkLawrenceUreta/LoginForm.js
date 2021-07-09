import { HttpClient } from "./HttpClient.js";

export default class LoginForm extends HttpClient {
  constructor(options) {
    console.log("LoginForm was loaded...");
    super();

    this.baseURL = options.baseURL;
    this.userName = document.getElementById("user");
    this.password = document.getElementById("pass");
    this.btnSubmit = document.getElementById("submit");
    this.btnTwit = document.getElementById("twitter");
    this.btnFb = document.getElementById("facebook");
  }
}