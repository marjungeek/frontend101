import { HttpClient } from "../registration-form/rjrico/HttpClient";

export default class LoginClass extends HttpClient {
  constructor(options) {
    console.log("LoginForm was loaded...");
    super();

    this.baseURL = options.baseURL;
    this.userName = document.getElementById("user");
    this.password = document.getElementById("pass");
    this.btnSubmit = document.getElementById("submit");
  }
}