import LoginForm from "./LoginForm";

const login = new LoginForm({
  url: "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
  success: function () {
    alert("success");
  },
  error: function () {
    alert("error");
  },
});

var x = 'hello ulit';

// use self invoke async function 
(async function(x) {
  console.log(x);
  // await whateverClass.whateverAsyncMethod();
})(x);

login.listener();
