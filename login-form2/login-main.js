import ClassForm from "./loginClass.js";

console.log("Log In Form is loaded")

const classForm = new ClassForm({
    LoginAPI: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    classForm.btnLogIn.addEventListener('click', async function(event){
        event.preventDefault();
        let username = classForm.txtUsername.value;
        let password = classForm.txtPassword.value;

        let response = await classForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});

        console.log(response);

        if(response.statusCode == 200){
            alert("Log In Successful");
        } else if(username == '' && password == ''){
            alert("Missing Credentials");
        }else{
            alert("Log In Failed");
        }
    });
})();

