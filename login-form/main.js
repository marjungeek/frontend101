import ClassForm from "./Class.js";

console.log("Log In Form is loaded");

const classForm = new ClassForm({
    LoginAPI: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    classForm.btnLogIn.addEventListener('click', async function(event){
        event.preventDefault();
        let username = classForm.txtUsername.value;
        let password = classForm.txtPasword.value;

        let response = await classForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});

        console.log(response);

        if(username.value == 'ghuser' && password.value == 'secret'){
            alert("Log In Successful");
        } else{
            alert(error);
        }
    });
})();