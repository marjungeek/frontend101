import { HttpClient } from "./HttpClient.js";

export default class LogForm extends HttpClient {
  constructor(options) {
    console.log('LogForm was loaded');
    super();

    this.userUrl = options.userUrl;
    this.userName = document.getElementById("userNameControl");
    this.password = document.getElementById("passwordControl");
    this.btnSubmit = document.getElementById("submit");

  }
 
}