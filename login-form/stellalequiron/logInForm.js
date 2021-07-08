import { HttpClient } from "./logInHttp.js";

export default class logForm extends HttpClient {
    constructor(options) {
        console.log('RegForm was loaded...');
        super();
        this.postURL = options.postURL;
        this.username = document.getElementById("username");
        this.userName = document.getElementById("userName");
        this.password = document.getElementById("password");
        this.passWord = document.getElementById("passWord");
        this.btnSubmit = document.getElementById('test-submit');
    }

}

export function doSomething() {
    console.log('doing something...');
}
  
export function doSomethingAgain() {
}