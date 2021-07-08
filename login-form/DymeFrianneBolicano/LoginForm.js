import { HttpClient } from "./LoginHTTP.js";

export default class logForm extends HttpClient {
    constructor(options) {
        console.log('RegForm was loaded...');
        super();
        this.postURL = options.postURL;
        //this.body = document.getElementById("body");

         this.userName = document.getElementById("UserName");
         this.userNamediv = document.getElementById("UserName-div");

         this.password = document.getElementById("password");
         this.passworddiv = document.getElementById("password-div");
  
        this.btnSubmit = document.getElementById('test-submit');
        }
  }

  export function doSomething() {
    console.log('doing something...');
  }
  
  export function doSomethingAgain() {
  
  }