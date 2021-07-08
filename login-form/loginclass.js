import { HttpClient } from "./HttpClient.js";

export default class LoginClass extends HttpClient {
  constructor(options) {
    super();
    let testServer = "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login";
    testServer = options.baseURL;
    this.username = document.getElementById("user");
    this.password = document.getElementById("pass");
    this.btnsubmit = document.getElementById("submit");
  }
}