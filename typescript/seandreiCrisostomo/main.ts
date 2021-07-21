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


        //validation
        if((user == null && passWd == null) || (user == "" && passWd == "")){
            alert("Please enter your credentials. ");
            return false;
        }else if(user == null || user == ""){
            alert("Please enter your username. ");
            return false;
        }else if(user.length < 5){
            alert("Username must at least have 5 characters. ")
            return false;
        }else if(passWd == null || passWd == ""){
            alert("Please enter your password. ");
            return false;
        }else if(passWd.length < 4){
            alert("Invalid password. Must have at least 4 characters or more. ");
            return false;
        }else if(response.statusCode != 200){
            alert("Invalid username/password. Please try again.");
            return false;
        }else{
            alert("Logging In... ");
            location.href='https://www.google.com'
        }



