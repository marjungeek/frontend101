import LogInForm from "./loginForm.js";

console.log('Application was loaded... ');

(async function() {  
const loginForm = new LogInForm ({
    apiURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

    loginForm.btnSubmit.addEventListener('click', async function(event) {
        event.preventDefault();//para hindi mag load or submit or magredirect

        let username = loginForm.logInUsername.value;
        let password = loginForm.logInPassword.value;
        let user = document.myForm.username.value;
        let passWd = document.myForm.password.value;

        let response = await loginForm.postRequest( 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password }); //required ung mismong link kesa apiUrl gamitin

        console.log(response);

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

    });

})();

