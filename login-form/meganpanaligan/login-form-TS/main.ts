import LoginForm from "./LoginForm";
console.log('Application was loaded..');

const login = new LoginForm({
    url: 'http://localhost:7071/api/login',
    success: function(){
        alert('success');
    },
    error: function() {
        alert('error');
    }
});

var m = 'Alert!';

(async function(m) {
    console.log(m);
    
})(m);

login.listener();