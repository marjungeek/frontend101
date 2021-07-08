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

      this.btnSubmit = document.getElementById('test-submit');
      this.checkbox = document.getElementById('checkbox');
      this.clear = document.getElementById('reload');
      }
      myRandom(){
        var num1=Math.floor(Math.random() * 10);
        var num2=Math.floor(Math.random() * 10);
        var total=num1+num2;
        document.getElementById("Q").innerHTML = ""+num1+"+"+num2+"?";
        return total;
  
      }
      myCheck() {
        var y = document.getElementById("robot");
        if (y.style.display === "block") {
          y.style.display = "none";
          document.getElementById("test-submit").className = "btn btn-success disabled";
        } 
        else {
          y.style.display = "block"; //show
          document.getElementById("test-submit").className = "btn btn-success";
          return this.myRandom();
        }
      }
  }

  export function doSomething() {
    console.log('doing something...');
  }
  
  export function doSomethingAgain() {
  
  }