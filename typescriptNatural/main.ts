import LogForm  from "./LogForm";
console.log('App was loaded');


const logForm = new LogForm({
  userUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
  success: function() {
    alert("Login Successful");
  },
  error: function(){
    alert("Login Failed!");
  }
});

var a = 'a';

(async function(a){
  alert(a);  
})(a);

logForm.listener();