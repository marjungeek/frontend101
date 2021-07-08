import { HttpClient } from "../registration-form/rjrico/HttpClient";

export default class LoginClass extends HttpClient {
  constructor(options) {
    super();

    this.baseURL = options.baseURL;
    this.username = document.getElementById("user");
    this.password = document.getElementById("pass");
    this.btnsubmit = document.getElementById("submit");
  }
}