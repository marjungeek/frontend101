import { HttpClient } from "./HttpClient.js";

export default class loginClass extends HttpClient {
  constructor() {
    super();

    this.username = document.getElementById("username");
    this.password = document.getElementById("password");
    this.btnsubmit = document.getElementById("submit");
  }


}
