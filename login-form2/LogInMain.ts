import ClassForm from 'LogInClass.js';

console.log("Log In Form Loaded!!!");

const classForm = new ClassForm({
    LoginAPI: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

function(){
    classForm.btnLogin.addEventListener('click', function(event){
        event.preventDefault();
        let username:any = classForm.txtUsername.value;
        let password:any = classForm.txtPassword.value;

        let response = classForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});

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