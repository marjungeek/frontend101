import LogInForm from "./loginForm";

console.log('Application was loaded... ');


const loginForm = new LogInForm ({
    apiURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function() {
        alert('success');
    },
    error: function() {
        alert('error');
    }
});

loginForm.listener();




