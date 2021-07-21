import LoginForm from "./LoginForm";

const login = new LoginForm({
  url: "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
  success: function () {
    location.href = "https://www.ibm.com/us-en/";
  },
  error: function () {
    alert("Wrong Username or Password!");
  },
  twitter: function(){
    location.href = "https://twitter.com/login?lang=en";
  },
  facebook: function() {
    location.href = "https://www.facebook.com/";
  }
});

var x = 'hello ulit';

// use self invoke async function 
(async function(x) {
  console.log(x);
  // await whateverClass.whateverAsyncMethod();
})(x);

login.listener();
