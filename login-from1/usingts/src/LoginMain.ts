import LoginForm from "./LoginForm";

const login = new LoginForm({
    url: 'http://localhost:7071/api/login',
    success: function() {
        alert('success');
    },
    error: function() {
        alert('error');
    }
});


login.listener();