import { TsLogin } from "./tslogin-form";

console.log("TS Main loaded");
//To make this work, I changed tsconfig "module" to es2015. Not sure if it is good practice.

const loginObbj = new TsLogin({
  url: "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
  //url: 'http://localhost:7071/api/login',
  success: function() {
    console.log("Login Success!");
    //alert('success');
  },
  error: function() {
    alert('error');
  }
});

loginObbj.listener();