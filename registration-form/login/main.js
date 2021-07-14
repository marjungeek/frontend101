import LoginForm from "./LoginForm.js"; // es6 import

const login = new LoginForm({
  url: 'http://localhost:7071/api/login',
  success: function() {
    alert('success');
  },
  error: function() {
    alert('error');
  }
});

var x = 'hello ulit';

// use self invoke async function 
(async function(x) {
  console.log(x);
  // await whateverClass.whateverAsyncMethod();
})(x);

login.listener();
