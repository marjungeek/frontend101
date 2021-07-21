import Login from "./login";

const login = new Login({
    url: 'http://127.0.0.1:5500/Ferry/Login/ts/index.html',
    success: function(){
        alert('success');
    },
    error: function(){
        alert('error');
    }
});

login.listener();